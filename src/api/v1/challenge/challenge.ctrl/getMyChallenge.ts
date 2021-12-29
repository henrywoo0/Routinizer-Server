// 내가 만든 챌린지
import { Request, Response } from "express";
import Challenge from "../../../../entity/Challenge.entity";
import User from "../../../../entity/User.entity";

export default async (req, res: Response) => {
  const { id }: { id: string } = req.user;

  try {
    const user: User = await User.findOne({ id });
    const challenges: Challenge[] = await Challenge.find({
      owner: user,
    });
    return res.status(200).json({
      status: 200,
      message: "자신의 챌린지 조회에 성공했습니다.",
      challenges,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 자신의 챌린지를 조회하지 못했습니다.",
    });
  }
};
