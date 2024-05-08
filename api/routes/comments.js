import express from "express"
import { 
    getComments, 
    getAllComments,
    addComment, 
    updateComment, 
    activeComment,
    inativeComment,
    deleteComment, 
    likeComment,
    deslikeComment,
    getCommentsPost
 } from "../controllers/comment.js"

const router = express.Router()

router.get("/", getComments)
router.get("/post/:id", getCommentsPost)
router.get("/all/", getAllComments)
router.post("/", addComment)
router.put("/:id", updateComment)
router.post("/active/:id", activeComment)
router.post("/inative/:id", inativeComment)
router.delete("/:id", deleteComment)
router.post("/like/:id", likeComment)
router.post("/deslike/:id", deslikeComment)

export default router
