import { getRepository } from "typeorm";
import User from "../../../../entity/User.entity";

export default async (req, res) => {
  try {
    const userRepository = getRepository(User);
    const users: User[] = await userRepository.find({
      order: {
        point: "DESC",
      },
    });
    return res.status(200).json({
      status: 200,
      message: "랭킹 조회에 성공했습니다.",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 랭킹을 조회하지 못했습니다.",
    });
  }
};
