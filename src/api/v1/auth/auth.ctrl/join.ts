import { Request, Response } from "express";
import User from "../../../../entity/User";
import bcrypt from "bcrypt";

export default async (req, res: Response) => {
  const user = new User();
  const { name, school, id, password } = req.body;
  const { file } = req;

  try {
    user.name = name;
    user.school = school;
    user.id = id;
    user.password = bcrypt.hashSync(password, 10);
    user.avatar = file || "";
    await user.save();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 회원가입에 실패했습니다.",
    });
  }
};
