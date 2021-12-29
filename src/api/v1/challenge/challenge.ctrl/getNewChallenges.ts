import { getRepository } from "typeorm";
import Challenge from "../../../../entity/Challenge.entity";

export default async (req, res) => {
  try {
    const challengeRepository = getRepository(Challenge);
    const challenges: Challenge[] = await challengeRepository.find({
      order: {
        createdAt: "DESC",
      },
    });
    return res.status(200).json({
      status: 200,
      message: "챌린지 조회에 성공했습니다.",
      challenges,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 챌린지를 조회하지 못했습니다.",
    });
  }
};
