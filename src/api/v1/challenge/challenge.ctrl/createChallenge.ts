import { Request, Response } from "express";
import Challenge from "../../../../entity/Challenge";
import User from "../../../../entity/User";

export default async (req, res: Response) => {
  const challenge = new Challenge();
  const { title, category, benefit } = req.body;
  const { file } = req;
  const { id } = req.user;

  try {
    const user = await User.findOne({ id });
    challenge.owner = user;
    challenge.title = title;
    challenge.category = category;
    challenge.benefit = benefit;
    await challenge.save();

    return res.status(200).json({
      status: 200,
      message: "챌린지 생성에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 챌린지를 생성하지 못했습니다.",
    });
  }
};
