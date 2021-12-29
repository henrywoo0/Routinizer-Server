import { Response } from "express";
import Challenge from "../../../../entity/Challenge.entity";
import Participation from "../../../../entity/Participation.entity";
import User from "../../../../entity/User.entity";

export default async (req, res: Response) => {
  const { idx }: { idx: string } = req.params;
  const { id }: { id: string } = req.user;

  try {
    const user: User = await User.findOne({ id });
    const challenge: Challenge = await Challenge.findOne({ id: parseInt(idx) });
    if (!challenge) {
      return res.status(404).json({
        status: 404,
        message: "취소할 챌린지를 찾지 못했습니다.",
      });
    }
    const participation: Participation = await Participation.findOne({
      challenge,
      participant: user,
    });
    if (!participation) {
      return res.status(404).json({
        status: 404,
        message: "취소할 챌린지를 찾지 못했습니다.",
      });
    }
    await participation.remove();
    challenge.participationCount--;
    await challenge.save();
    return res.status(200).json({
      status: 200,
      message: "챌린지 취소에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 챌린지 참여를 취소하지 못했습니다.",
    });
  }
};
