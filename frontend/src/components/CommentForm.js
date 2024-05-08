import React, { useEffect, useRef } from "react";
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

const PostForm = ({ getPosts, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const post = ref.current

            post.name.value = onEdit.name
            post.email.value = onEdit.email
            post.password.value = onEdit.password

            document.getElementById("btn-enviar").innerHTML = "Editar";
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = ref.current

        if (
            !post.name.value ||
            !post.email.value ||
            !post.password.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }

        if (onEdit) {
            await axios
            .put("http://localhost:8800/post/" + onEdit.id, {
                name: post.name.value,
                email: post.email.value,
                password: post.password.value
            })
            .then(({ data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        } else {
            await axios
            .post("http://localhost:8800/post/", {
                name: post.name.value,
                email: post.email.value,
                password: post.password.value
            })
            .then(({ data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        }

        post.name.value = "";
        post.email.value = "";
        post.password.value = "";

        setOnEdit(null)
        document.getElementById("btn-enviar").innerHTML = "Adicionar";
        getPosts()
    }

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <label>Nome</label>
                <Input name="name"></Input>
            </InputArea>
            <InputArea>
                <label>E-Mail</label>
                <Input name="email"></Input>
            </InputArea>
            <InputArea>
                <label>Senha</label>
                <Input name="password"></Input>
            </InputArea>
            <Button type="submit" id="btn-enviar">Adicionar</Button>
        </FormContainer>
    )
}

export default PostForm