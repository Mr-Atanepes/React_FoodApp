import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, "defaultSecret");
    req.body.userId = tokenDecode.userId;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: false });
  }
};

export default authMiddleware;
