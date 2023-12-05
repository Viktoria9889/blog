import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetching } from "../Components/UI/hooks/useFetching"
import PostService from "../API/PostService"
import Loader from "../Components/UI/Loader/Loader"

//useParams() вицеплює id з params
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Ви відкрили пост з ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>
                    <h2>{post.title}</h2><div>{post.body}</div>
                </div>
            }
        </div>
    )
}

export default PostIdPage