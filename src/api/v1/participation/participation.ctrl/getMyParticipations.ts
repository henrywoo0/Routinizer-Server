import { getRepository } from "typeorm";
import Participation from "../../../../entity/Participation.entity";
import User from "../../../../entity/User.entity";

export default async (req, res) => {
  const { id }: { id: string } = req.user;

  try {
    const user: User = await User.findOne({ id });
    const participationRepository = getRepository(Participation);
    const participations = await participationRepository
      .createQueryBuilder("participation")
      .select(["challengeId"])
      .innerJoinAndSelect("participation.challenge", "challenge")
      .where("participation.participant = :user", { user: user.id })
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
