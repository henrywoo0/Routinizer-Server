import { Request, Response } from "express";
import User from "../../../../entity/User";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export default async (req: Request, res: Response) => {
  const { id, password } = req.body;
  try {
    const user: User = await User.findOne({ id });
    if (!user) {
      return res.status(400).json({
        status: 400,
        message: "해당 전화번호를 가진 계정이 없습니다.",
      });
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(400).json({
        status: 400,
        message: "비밀번호가 옳지 않습니다.",
      });
    }
    const token = jwt.sign(
      {
        id,
      },
      process.env.JWT_SECRET,
      {
        issuer: "routinizer",
      }
    );
    return res.status(200).json({
      status: 200,
      message: "로그인에 성공했습니다.",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 로그인하지 못했습니다.",
    });
  }
};
