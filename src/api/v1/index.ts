import { Router } from "express";
import { upload } from "../../middlewares";
import auth from "./auth";
import challenge from "./challenge";
import participation from "./participation";
import proof from "./proof";
import uploadImage from "./uploadImage";

const router = Router();

router.post("/upload", upload.single("image"), uploadImage);
router.use("/auth", auth);
router.use("/challenge", challenge);
router.use("/participate", participation);
router.use("/proof", proof);

export default router;
