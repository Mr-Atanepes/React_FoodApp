import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food item
const addFood = async (req,res) => {
    let imageFileName = req.file.filename

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: imageFileName
    })

    try {
        await food.save()
        res.json({success:true, message:'food added'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error})
    }
}

//all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})

        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error})
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink('uploads/' + food.image, ()=> {})

        await foodModel.findByIdAndDelete(food._id)

        res.json({success:true, message:'food item removed'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error})
    }
}

export {addFood,listFood,removeFood}