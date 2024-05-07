import React, { useRef } from "react";
import styled from "styled-components";

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
    color: #fff;
    height: 42px;
`

const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>
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
            <Button type="submit">Enviar</Button>
        </FormContainer>
    )
}

export default Form