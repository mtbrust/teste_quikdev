import { db } from "../db.js"

export const getPosts = (_, res) => {
    const q = "SELECT * FROM post WHERE active = 1"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}

export const getAllPosts = (_, res) => {
    const q = "SELECT * FROM post"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}

export const addPost = (req, res) => {
    const q = "INSERT INTO post (user_id, title, description) VALUES(?);"

    const values = [
        req.body.user_id,
        req.body.title,
        req.body.description,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Post adicionado com sucesso.")
    })
}

export const updatePost = (req, res) => {
    const q = "UPDATE post SET `title` = ?, `description` = ? WHERE `id` = ?;"

    const values = [
        req.body.title,
        req.body.description,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Post atualizado com sucesso.")
    })
}

export const inativePost = (req, res) => {
    const q = "UPDATE post SET `active` = 0 WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Post inativado com sucesso.")
    })
}

export const activePost = (req, res) => {
    const q = "UPDATE post SET `active` = 1 WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Post ativado com sucesso.")
    })
}

export const deletePost = (req, res) => {
    const q = "DELETE FROM post WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Post deletado com sucesso.")
    })
}

export const likePost = (req, res) => {
    const q = "SELECT id, likes FROM post WHERE `id` = ?"

    db.query(q, [parseInt(req.params.id)], (err, data) => {
        if(err) return res.json(err)
        
        const q = "UPDATE post SET `likes` = ? WHERE `id` = ?"

        const values = [
            data[0].likes + 1,
            parseInt(req.params.id),
        ]
    
        db.query(q, [...values, req.params.id], (err) => {
            if(err) return res.json(err)
            
            return res.status(200).json("Post marcado como gostei com sucesso.")
        })
    })
}

export const deslikePost = (req, res) => {
    const q = "SELECT id, deslikes FROM post WHERE `id` = ?"

    db.query(q, [parseInt(req.params.id)], (err, data) => {
        if(err) return res.json(err)
        
        const q = "UPDATE post SET `deslikes` = ? WHERE `id` = ?"

        const values = [
            data[0].deslikes + 1,
            parseInt(req.params.id),
        ]
    
        db.query(q, [...values, req.params.id], (err) => {
            if(err) return res.json(err)
            
            return res.status(200).json("Post marcado como não gostei com sucesso.")
        })
    })
}
