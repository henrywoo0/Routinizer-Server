import { Request, Response } from "express";
import Challenge from "../../../../entity/Challenge";
import Participation from "../../../../entity/Participation";
import User from "../../../../entity/User";

export default async (req, res: Response) => {
  const participation = new Participation();
  const { idx } = req.params;
  const { id } = req.user;

  try {
    const user = await User.findOne({ id });
    const challenge = await Challenge.findOne({ id: idx });
    if (!challenge) {
      return res.status(404).json({
        status: 404,
        message: "참여할 챌린지를 찾지 못했습니다.",
      });
    }
    const pastParticipation = await Participation.findOne({
      participant: user,
      challenge: challenge,
    });
    if (pastParticipation) {
      return res.status(400).json({
        status: 400,
        message: "이미 해당 챌린지에 참여하고 있습니다.",
      });
    }
    participation.challenge = challenge;
    participation.participant = user;
    await challenge.save();
    return res.status(200).json({
      status: 200,
      message: "챌린지 참여에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 챌린지에 참여하지 못했습니다.",
    });
  }
};
