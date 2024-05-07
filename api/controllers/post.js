import { db } from "../db.js"

export const getPosts = (_, res) => {
    const q = "SELECT * FROM post"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}


export const addUPost = (req, res) => {
    const q = "INSERT INTO post (name, email, password) VALUES(?);"

    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Usuário adicionado com sucesso.")
    })
}

export const updatePost = (req, res) => {
    const q = "UPDATE post SET `name` = ?, `email` = ?, `password` = ? WHERE `id` = ?;"

    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Usuário atualizado com sucesso.")
    })
}

export const deletePost = (req, res) => {
    const q = "DELETE FROM post WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Usuário deletado com sucesso.")
    })
}
