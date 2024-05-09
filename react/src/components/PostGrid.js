import React, { useRef } from "react"
import axios from "axios"
import styled from "styled-components"
import { FaTrash, FaEdit, FaEye } from "react-icons/fa"
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom"

const Table = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 5px;
  word-break: break-all;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`

export const Td = styled.td`
    padding-top: 15px;
    text-align: center;
    width: auto;
`

const PostGrid = ({ posts, setPosts, setOnEdit }) => {

    const navigate = useNavigate();

    const handleEdit = (item) => {
        setOnEdit(item)
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/post/" + id)
            .then(({ data }) => {
                const newArray = posts.filter((post) => post.id !== id)

                setPosts(newArray)
                toast.success(data)
            })
            .catch(({data}) => toast.error(data))
        
        setOnEdit(null);
        document.getElementById("btn-enviar").innerHTML = "Adicionar";
    }

    const handleGoTo = (id) => {
        let url = "/posts/" + id
        navigate(url)
    }

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Id Usuário</Th>
                    <Th>Title</Th>
                    <Th>Descrição</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {posts.map((item, i) => (
                    <Tr key={i}>
                        <Td width="5%">{item.id}</Td>
                        <Td width="5%">{item.user_id}</Td>
                        <Td width="30%">{item.title}</Td>
                        <Td width="30%">{item.description}</Td>
                        <Td width="5%"><FaEdit onClick={() => handleEdit(item)} /></Td>
                        <Td width="5%"><FaTrash onClick={() => handleDelete(item.id)} /></Td>
                        <Td width="30%"><FaEye onClick={() => handleGoTo(item.id)} /></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default PostGrid