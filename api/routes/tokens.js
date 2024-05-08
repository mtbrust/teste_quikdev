import express from "express"
import { getTokens, addToken, updateToken, deleteToken } from "../controllers/token.js"

const router = express.Router()

router.get("/", getTokens)

router.post("/", addToken)

router.put("/:id", updateToken)

router.delete("/:id", deleteToken)

export default router
