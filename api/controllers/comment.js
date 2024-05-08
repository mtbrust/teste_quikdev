import { db } from "../db.js"

export const getComments = (_, res) => {
    const q = "SELECT * FROM comment WHERE active = 1"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}

export const getCommentsPost = (req, res) => {
    const q = "SELECT * FROM comment WHERE active = 1 AND post_id = ?"

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}

export const getAllComments = (_, res) => {
    const q = "SELECT * FROM comment"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}

export const addComment = (req, res) => {
    const q = "INSERT INTO comment (user_id, post_id, description) VALUES(?);"

    const values = [
        req.body.user_id,
        req.body.post_id,
        req.body.description,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Comentário adicionado com sucesso.")
    })
}

export const updateComment = (req, res) => {
    const q = "UPDATE comment SET `description` = ? WHERE `id` = ?;"

    const values = [
        req.body.description,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Comentário atualizado com sucesso.")
    })
}

export const inativeComment = (req, res) => {
    const q = "UPDATE comment SET `active` = 0 WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Comentário inativado com sucesso.")
    })
}

export const activeComment = (req, res) => {
    const q = "UPDATE comment SET `active` = 1 WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Comentário ativado com sucesso.")
    })
}

export const deleteComment = (req, res) => {
    const q = "DELETE FROM comment WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Comentário deletado com sucesso.")
    })
}

export const likeComment = (req, res) => {
    const q = "SELECT id, likes FROM comment WHERE `id` = ?"

    db.query(q, [parseInt(req.params.id)], (err, data) => {
        if(err) return res.json(err)
        
        const q = "UPDATE comment SET `likes` = ? WHERE `id` = ?"

        const values = [
            data[0].likes + 1,
            parseInt(req.params.id),
        ]
    
        db.query(q, [...values, req.params.id], (err) => {
            if(err) return res.json(err)
            
            return res.status(200).json("Comentário marcado como gostei com sucesso.")
        })
    })
}

export const deslikeComment = (req, res) => {
    const q = "SELECT id, deslikes FROM comment WHERE `id` = ?"

    db.query(q, [parseInt(req.params.id)], (err, data) => {
        if(err) return res.json(err)
        
        const q = "UPDATE comment SET `deslikes` = ? WHERE `id` = ?"

        const values = [
            data[0].deslikes + 1,
            parseInt(req.params.id),
        ]
    
        db.query(q, [...values, req.params.id], (err) => {
            if(err) return res.json(err)
            
            return res.status(200).json("Comentário marcado como não gostei com sucesso.")
        })
    })
}
