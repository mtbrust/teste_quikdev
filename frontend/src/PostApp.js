import GlobalStyle from "./styles/global.js"
import styled from "styled-components"
import PostForm from "./components/PostForm.js"
import PostGrid from "./components/PostGrid.js"
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

function PostApp() {
  const [posts, setPosts] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8800/post");
      setPosts(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [setPosts])

  return (
    <>
      <Container>
        <Title>Postagens</Title>
        <PostForm onEdit={onEdit} setOnEdit={setOnEdit} getPosts={getPosts}/>
        <PostGrid posts={posts} setPosts={setPosts} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000}/>
      <GlobalStyle />
    </>
  );
}

export default PostApp;
