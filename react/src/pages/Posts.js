import React, { useRef } from "react"
import styled from "styled-components"
import PostForm from "../components/PostForm.js"
import PostGrid from "../components/PostGrid.js"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const Container = styled.div``

const Posts = () => {

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
        <Container>
            <h2>Postagens</h2>
            <hr />
            <PostForm onEdit={onEdit} setOnEdit={setOnEdit} getPosts={getPosts}/>
            <PostGrid posts={posts} setPosts={setPosts} setOnEdit={setOnEdit}/>
            <ToastContainer autoClose={3000}/>
        </Container>
    )
}

export default Posts