import { Response } from "express";

export default async (req, res: Response) => {
  try {
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 인증을 확인하지 못했습니다.",
    });
  }
};
