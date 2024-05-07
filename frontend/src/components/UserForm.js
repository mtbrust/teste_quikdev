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

const UserForm = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current

            user.name.value = onEdit.name
            user.email.value = onEdit.email
            user.password.value = onEdit.password

            document.getElementById("btn-enviar").innerHTML = "Editar";
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = ref.current

        if (
            !user.name.value ||
            !user.email.value ||
            !user.password.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }

        if (onEdit) {
            await axios
            .put("http://localhost:8800/user/" + onEdit.id, {
                name: user.name.value,
                email: user.email.value,
                password: user.password.value
            })
            .then(({ data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        } else {
            await axios
            .post("http://localhost:8800/user/", {
                name: user.name.value,
                email: user.email.value,
                password: user.password.value
            })
            .then(({ data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        }

        user.name.value = "";
        user.email.value = "";
        user.password.value = "";

        setOnEdit(null)
        document.getElementById("btn-enviar").innerHTML = "Adicionar";
        getUsers()
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

export default UserForm