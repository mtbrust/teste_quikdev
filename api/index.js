import express from "express"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import commentsRoutes from "./routes/comments.js"
import tokenRoutes from "./routes/tokens.js"
import authenticationRoutes from "./routes/authentication.js"
import { checkSession } from "./controllers/authentication.js"
import cors from "cors"
import session from "express-session"

const app = express()

app.use(express.json())
app.use(cors())
app.use(session({secret: 'qweASDzxc', cookie: {maxAge: 60000}}))

app.use("/user", userRoutes)
app.use("/post", postRoutes)
app.use("/comment", commentsRoutes)
app.use("/token", checkSession, tokenRoutes)
app.use("/authentication", authenticationRoutes)

app.listen(8800);
