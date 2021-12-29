export default async (req, res) => {
  try {
    const { file } = req;
    return res.status(200).json({
      status: 200,
      message: "사진 업로드에 성공했습니다.",
      image: file.filename,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 사진을 업로드하지 못했습니다.",
    });
  }
};
