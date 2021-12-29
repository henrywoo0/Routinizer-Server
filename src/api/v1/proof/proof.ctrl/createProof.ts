import { Response } from "express";
import Participation from "../../../../entity/Participation";
import Proof from "../../../../entity/Proof";
import User from "../../../../entity/User";

export default async (req, res: Response) => {
  const proof = new Proof();
  const { image } = req.body;
  const { idx } = req.params;
  const { id } = req.user;

  try {
    const user = await User.findOne({ id });
    const participation = await Participation.findOne({
      id: idx,
    });
    if (!participation) {
      return res.status(404).json({
        status: 404,
        message: "인증할 챌린지를 찾지 못했습니다.",
      });
    }
    proof.user = user;
    proof.participation = participation;
    proof.image = image;
    await proof.save();
    return res.status(200).json({
      status: 200,
      message: "일일 인증에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 인증글을 올리지 못했습니다.",
    });
  }
};
