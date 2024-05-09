import React, { useRef } from "react"
import styled from "styled-components"
import LoginForm from "../components/LoginForm.js"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Container = styled.div``

const Home = ({ users, setUsers, setOnEdit }) => {

    return (
        <Container>
            <h2>Home</h2>
            <hr />
            <LoginForm />
            <ToastContainer autoClose={3000}/>
        </Container>
    )
}

export default Home