import React, { useRef } from "react"
import styled from "styled-components"
import UserForm from "../components/UserForm.js"
import UserGrid from "../components/UserGrid.js"
import Requests from "../Requests.js"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const Container = styled.div``

const Users = () => {

    const [users, setUsers] = useState([])
    const [onEdit, setOnEdit] = useState(null)

    const getUsers = async () => {
        try {
        const res = await axios.get("http://127.0.0.1:8800/user");
        setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)))
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [setUsers])

    return (
        <Container>
            <h2>Usuários</h2>
            <hr />
            <UserForm onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
            <UserGrid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
            <ToastContainer autoClose={3000}/>
        </Container>
    )
}

export default Users