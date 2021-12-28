import { Request, Response } from "express";
import User from "../../../../entity/User";
import * as bcrypt from "bcrypt";

export default async (req, res: Response) => {
  const user = new User();
  const { name, school, id, password } = req.body;
  const { file } = req;

  try {
    user.name = name;
    user.school = school;
    user.id = id;
    user.password = await bcrypt.hash(password, 10);
    user.avatar = file || "";
    await user.save();

    return res.status(200).json({
      status: 200,
      message: "회원가입에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 회원가입하지 못했습니다.",
    });
  }
};
