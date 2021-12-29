import { getRepository } from "typeorm";
import Participation from "../../../../entity/Participation";
import User from "../../../../entity/User";

export default async (req, res) => {
  const { id } = req.user;

  try {
    const user = await User.findOne({ id });
    const participationRepository = getRepository(Participation);
    const participations = participationRepository
      .createQueryBuilder("participation")
      .select(["challenge"])
      .innerJoinAndSelect("participation.challenge", "challenge")
      .where("participation.user = :user", { user })
      .orderBy("participation.createdAt", "DESC")
      .getMany();
    return res.status(200).json({
      status: 200,
      message: "내 챌린지 조회에 성공했습니다.",
      participations,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 내 챌린지를 조회하지 못했습니다.",
    });
  }
};
