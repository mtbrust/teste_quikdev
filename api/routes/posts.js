import express from "express"
import { 
    getPosts, 
    getPost,
    getAllPosts,
    addPost, 
    updatePost, 
    activePost,
    inativePost,
    deletePost, 
    likePost,
    deslikePost
 } from "../controllers/post.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.get("/all/", getAllPosts)
router.post("/", addPost)
router.put("/:id", updatePost)
router.post("/active/:id", activePost)
router.post("/inative/:id", inativePost)
router.delete("/:id", deletePost)
router.post("/like/:id", likePost)
router.post("/deslike/:id", deslikePost)

export default router
