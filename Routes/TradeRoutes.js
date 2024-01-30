import express from "express";
import {
  MakePostController,
  GetController,
  GetTradesIdController,
} from "../controller/RouterController.js";
const router = express.Router();

router.post("/", MakePostController);
router.get("/", GetController);
router.get("/:id", GetTradesIdController);
router.delete("/:id", (req, res) => res.status(405).send("Method Not Allowed"));
router.put("/:id", (req, res) => res.status(405).send("Method Not Allowed"));
router.patch("/:id", (req, res) => res.status(405).send("Method Not Allowed"));

export default router;
