import { db } from "../db.js"

export const check = (req, res) => {
    return res.status(200).json(req.session)
}

export const logout = (req, res) => {
    req.session.destroy()
    res.status(200).json('Logout com sucesso.')
}

export const login = (req, res) => {

    const q = "SELECT u.id, u.name, u.email, t.value as token FROM user u inner join token t on u.id = t.user_id WHERE email = ? AND password = ?"

    const values = [
        req.body.email,
        req.body.password,
    ]

    db.query(q, [...values], (err, data) => {
        if(err) return res.json(err)
        
        if(!data.length) return res.status(400).json('Login inválido.')

        req.session.userId = data[0].id
        req.session.userToken = data[0].token
        
        return res.status(200).json(data[0])
    })
}

export const checkSession = (req, res, next) => {

    if (!req.session.userId) {
        return res.status(400).json("Necessário autenticar.")
    } else {
        next()
    }
}
