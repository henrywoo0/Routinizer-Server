import Challenge from "../../../../entity/Challenge";

export default async (req, res) => {
  const { idx } = req.params;

  try {
    const challenge = await Challenge.findOne({
      id: idx,
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
      challenge,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 챌린지를 조회하지 못했습니다.",
    });
  }
};
