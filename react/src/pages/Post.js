import React, { useRef } from "react"
import styled from "styled-components"
import PostView from "../components/PostView.js"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { useParams } from "react-router-dom";

const Container = styled.div``

const Post = () => {

    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    let params = useParams()

    const getPost = async () => {
        try {
            const res = await axios.get("http://localhost:8800/post/" + params.id.toString());
            setPost(res.data)
        } catch (error) {
            toast.error(error)
        }
    }

    const getComments = async () => {
        try {
            const res = await axios.get("http://localhost:8800/comment/");
            setComments(res.data)
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [setPost])

    useEffect(() => {
        getComments()
    }, [setComments])

    return (
        <Container>
            <h2>Post</h2>
            <hr />
            <PostView post={post} setPost={setPost} comments={comments} setComments={setComments} />
            <ToastContainer autoClose={3000}/>
        </Container>
    )
}

export default Post