import { db } from "../db.js"

export const getPosts = (_, res) => {
    const q = "SELECT * FROM post"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}
