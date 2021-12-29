export default async (req, res) => {
  const { file } = req;
  return res.status(200).json({
    status: 200,
    message: "사진 업로드에 성공했습니다.",
    image: file.path,
  });
};
