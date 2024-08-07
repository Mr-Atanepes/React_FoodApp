import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Wrong password" });
    }

    const token = createToken(user._id);
    return res.json({ success: true, token: token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

//register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //checking if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email" });
    }

    //validating strong password
    if (!validator.isStrongPassword(password)) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error: error });
  }
};

// const createToken = (userId) => {
//     return jwt.sign({userId},process.env.JWT_SECRET)
// }

// const jwt = require("jsonwebtoken");

const createToken = (userId) => {
  const secret = process.env.JWT_SECRET || "defaultSecret"; // Fallback for development
  //   console.log(`Using JWT Secret: ${secret}`); // Debugging line
  return jwt.sign({ userId }, "secret");
};

export { loginUser, registerUser };
