import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import foodModel from "../models/foodModel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//place new order
const placeOrder = async (req, res) => {

    const frontend_URL = 'http://localhost:5173'

    //console.log(req.body)

    try {

        const user = await userModel.findById(req.body.userId)
        const userCart = user.cartData
        const foodIds_inCart = Object.keys(userCart)

        //check if cart is not empty
        if (!foodIds_inCart.length) return res.json({success:false, message:'Cart empty'})

        const foodItem = await foodModel.find({_id:{"$in":foodIds_inCart}})
        const deliveryFees = 2

        let total = 0
        const orderItems = []
        
        foodItem.forEach((item,index)=> {
            total += item.price * userCart[item._id]
            orderItems.push({
                name: item.name,
                price: item.price,
                quantity: userCart[item._id]
            })
        }) 

        total += deliveryFees

        //create the new order
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: orderItems,
            amount: total,
            address: req.body.data,
        })

        //save the new order
        await newOrder.save()
        
        //reset user cart
        user.cartData = {}
        user.save()


        //create stripe data
        const line_items = orderItems.map((item,index)=>({
            price_data: {
                currency:"USD",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data: {
                currency:"USD",
                product_data: {
                    name: 'Delivery fees',
                },
                unit_amount: 2 * 100,
            },
            quantity: 1
        })
        
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode: "payment",
            success_url: frontend_URL + '/verify?success=true&orderId=' + newOrder._id,
            cancel_url: frontend_URL + '/verify?success=false&orderId=' + newOrder._id,
        })

        res.json({success:true, session:session.url})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error})
    }

}

const verifyOrder = async (req,res) => {

    const {orderId, success} = req.body

    try {
        if (success === 'true') {
            
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            res.json({success:true, message:'Paid'})
        } else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false, message:'Not paid'})
        }
    
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
}

//frontend user orders
const userOrders = async (req, res) => {

    try {
        const userOrders = await orderModel.find({userId:req.body.userId})
        res.json({success:true, data:userOrders})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error})
    }
}

//fetch users order for admin panel
const listOrders = async (req, res) => {

    try {
        const orders = await orderModel.find({})
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error})
    }
}

//update order status from user frontend
const updateStatus = async (req, res) => {

    try {
        const order = await orderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status})
        res.json({success:true, message:'Status updated'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error})
    }
}

export {placeOrder, verifyOrder, userOrders, listOrders, updateStatus}