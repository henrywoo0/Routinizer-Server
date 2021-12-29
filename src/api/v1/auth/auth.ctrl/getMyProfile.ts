import { getRepository } from "typeorm";
import Participation from "../../../../entity/Participation";
import User from "../../../../entity/User";

export default async (req, res) => {
  const { id } = req.user;

  try {
    const user = await User.findOne({ id });
    const participations = await getRepository(Participation).find({
      where: {
        participant: user,
      },
      order: {
        dateCount: "DESC",
      },
    });
    const count: number = participations.length;
    const continuous: number = participations[0].dateCount;

    return res.status(200).json({
      status: 200,
      message: "프로필 조회에 성공했습니다.",
      ...user,
      count,
      continuous,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 프로필 조회를 하지 못했습니다.",
    });
  }
};
