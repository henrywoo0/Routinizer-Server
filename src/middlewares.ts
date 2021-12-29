import * as jwt from "jsonwebtoken";
import * as multer from "multer";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(419).json({
        status: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    return res.status(401).json({
      status: 401,
      message: "유효하지 않은 토큰입니다.",
    });
  }
};

export const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10000000 },
});
