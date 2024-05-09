import React, { useRef } from "react"
import axios from "axios"
import styled from "styled-components"
import { FaTrash, FaEdit, FaEye } from "react-icons/fa"
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom"


export const H1 = styled.h1``
export const P = styled.p``

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

const PostGrid = ({ post, comments }) => {

    return (
        <>
            <H1>{post.title}</H1>
            <P>{post.description}</P>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Comentários</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {comments.map((item, i) => (
                        <Tr key={i}>
                            <Td width="100%">{item.description}</Td>
                            {/* <Td width="5%"><FaEdit onClick={() => handleEdit(item)} /></Td>
                            <Td width="5%"><FaTrash onClick={() => handleDelete(item.id)} /></Td>
                            <Td width="30%"><FaEye onClick={() => handleGoTo(item.id)} /></Td> */}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    )
}

export default PostGrid