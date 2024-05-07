import express from "express"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)
app.use("/post", postRoutes)

app.listen(8800);
