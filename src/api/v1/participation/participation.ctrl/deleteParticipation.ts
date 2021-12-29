import { Response } from "express";
import Challenge from "../../../../entity/Challenge";
import Participation from "../../../../entity/Participation";
import User from "../../../../entity/User";

export default async (req, res: Response) => {
  const { idx } = req.params;
  const { id } = req.user;

  try {
    const user = await User.findOne({ id });
    const challenge = await Challenge.findOne({ id: idx });
    if (!challenge) {
      return res.status(404).json({
        status: 404,
        message: "취소할 챌린지를 찾지 못했습니다.",
      });
    }
    const participation = await Participation.findOne({
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
    challenge.participantCount--;
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
