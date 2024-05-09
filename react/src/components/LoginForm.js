import React, { useEffect, useRef, useState } from "react";
import axios from "axios"
import styled from "styled-components";
import { toast } from "react-toastify"

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 5px;
`

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`

const Label = styled.label``

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    backgound-color: #2c73d2;
    height: 42px;
`

const LoginForm = () => {
    const ref = useRef();

    const [userId, setUserId] = useState('')
    const [userToken, setUserToken] = useState('')

    const logout = async (e) => {
        e.preventDefault()

        const post = ref.current
        
        await axios
        .get("http://127.0.0.1:8800/authentication/logout")
        .then(({ data }) => {
            toast.success(data)
        })
        .catch(({ data }) => toast.error(data))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = ref.current
        
        await axios
        .post("http://127.0.0.1:8800/authentication/login", {
            email: post.email.value,
            password: post.password.value,
        })
        .then(({ data }) => {
            toast.success("Login realizado com sucesso.")
        })
        .catch(({ data }) => {
            toast.error(data)
        })
    }

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <label>Login</label>
                <Input name="email" placeholder="e-mail"></Input>
            </InputArea>
            <InputArea>
                <label>Senha</label>
                <Input name="password" type="password"></Input>
            </InputArea>
            <Button type="submit" id="btn-enviar">Logar</Button>
            <Button type="button" id="btn-sair" onClick={logout}>Sair</Button>
        </FormContainer>
    )
}

export default LoginForm