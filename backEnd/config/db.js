import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yassine:Z4qzoX5FCFIjdX68@cluster0.ex6jx0p.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0').then(()=> {
        console.log('db connected')
    })
}