import React, { useRef } from "react"
import axios from "axios"
import styled from "styled-components"
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"

const Ul = styled.ul`
    display: inline-flex;
`

const Li = styled.li`
margin: 5px 20px;
`

const Navbar = ({ users, setUsers, setOnEdit }) => {

    return (
        <nav>
            <Ul>
                <Li><a href="/home">Home</a></Li>
                <Li><a href="/users">Usuários</a></Li>
                <Li><a href="/posts">Postagens</a></Li>
            </Ul>
        </nav>
    )
}

export default Navbar