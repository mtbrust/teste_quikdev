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

            post.user_id.value = onEdit.user_id
            post.title.value = onEdit.title
            post.description.value = onEdit.description

            document.getElementById("btn-enviar").innerHTML = "Editar";
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = ref.current

        if (
            !post.user_id.value ||
            !post.title.value ||
            !post.description.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }

        if (onEdit) {
            await axios
            .put("http://localhost:8800/post/" + onEdit.id, {
                title: post.title.value,
                description: post.description.value
            })
            .then(({ data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        } else {
            await axios
            .post("http://localhost:8800/post/", {
                user_id: post.user_id.value,
                title: post.title.value,
                description: post.description.value
            })
            .then(({ data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        }

        post.title.value = "";
        post.description.value = "";

        setOnEdit(null)
        document.getElementById("btn-enviar").innerHTML = "Adicionar";
        getPosts()
    }

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea style={{display: "none"}}>
                <label>Usuário ID</label>
                <Input name="user_id" value="1" hidden></Input>
            </InputArea>
            <InputArea>
                <label>Título</label>
                <Input name="title"></Input>
            </InputArea>
            <InputArea>
                <label>Conteúdo</label>
                <Input name="description"></Input>
            </InputArea>
            <Button type="submit" id="btn-enviar">Adicionar</Button>
        </FormContainer>
    )
}

export default PostForm