import { db } from "../db.js"

export const getTokens = (_, res) => {
    const q = "SELECT * FROM token"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}

export const addToken = (req, res) => {
    const q = "INSERT INTO token (title, value) VALUES(?);"

    const values = [
        req.body.title,
        req.body.value,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Token adicionado com sucesso.")
    })
}

export const updateToken = (req, res) => {
    const q = "UPDATE token SET `title` = ?, `value` = ?WHERE `id` = ?;"

    const values = [
        req.body.title,
        req.body.value,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Token atualizado com sucesso.")
    })
}

export const deleteToken = (req, res) => {
    const q = "DELETE FROM token WHERE `id` = ?;"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)
        
        return res.status(200).json("Token deletado com sucesso.")
    })
}
