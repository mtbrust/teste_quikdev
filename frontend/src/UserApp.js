import GlobalStyle from "./styles/global.js"
import styled from "styled-components"
import UserForm from "./components/UserForm.js"
import UserGrid from "./components/UserGrid.js"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Title = styled.h2``

function UserApp() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/user");
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <UserForm onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <UserGrid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000}/>
      <GlobalStyle />
    </>
  );
}

export default UserApp;
