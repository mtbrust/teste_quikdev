import React, { useRef } from "react"
import axios from "axios"
import styled from "styled-components"
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"

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
    text-align: ${(props) => (props.alignCenter ? "center;" : "start;")}
    width: ${(props) => (props.width ? props.width : "auto")}
`


const Grid = ({ users }) => {

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Nome</Th>
                    <Th>E-Mail</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="5%">{item.id}</Td>
                        <Td width="30%">{item.name}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td alignCenter width="5%"><FaEdit /></Td>
                        <Td alignCenter width="5%"><FaTrash /></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid