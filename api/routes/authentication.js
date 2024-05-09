import express from "express"
import { check, logout, login } from "../controllers/authentication.js"

const router = express.Router()

router.get("/check", check)

router.get("/logout", logout)

router.post("/login", login)

export default router
