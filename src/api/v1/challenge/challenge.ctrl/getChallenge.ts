import { getRepository } from "typeorm";
import Challenge from "../../../../entity/Challenge.entity";
import Participation from "../../../../entity/Participation.entity";

export default async (req, res) => {
  const { idx }: { idx: string } = req.params;

  try {
    const challenge: Challenge = await Challenge.findOne({
      id: parseInt(idx),
    });
    const continuous: number = await getRepository(Participation).count({
      where: {
        challenge,
      },
      order: {
        dateCount: "DESC",
      },
    });
    if (!challenge) {
      return res.status(404).json({
        status: 404,
        message: "챌린지를 찾지 못했습니다.",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "챌린지 조회에 성공했습니다.",
      ...challenge,
      continuous,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 챌린지를 조회하지 못했습니다.",
    });
  }
};
