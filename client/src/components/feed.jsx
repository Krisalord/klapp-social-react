import React, { useEffect, useState } from 'react'
import likeImage from '../images/like.png'

const Post = (props) => (
    <li>
        <div className='post_wrapper'>
            {/* Header of the post with picture of the user, name and date */}
            <div className='post_info'>
                <a href='#'><img src={likeImage} className='smallPfp'/></a>
                <div className='post_namedate'>
                    <p>UserName</p>
                    <p>{new Date(props.post.createdAt).toLocaleString()}</p>
                </div>
            </div>
            {/* Image of the post */}
            <a href='#'><img src={props.post.image} className='post_image'/></a>
            {/* likes of the post */}
            <div className='post_likes'>
                <div className='post_likebox'>
                    <img src={likeImage} className='post_likeimg'/>
                    <span>{props.post.likes}</span>
                </div>
                {/* caption of the post */}
                <div className='post_caption'>
                    <span>{props.post.caption}</span>
                </div>
            </div>
        </div>
    </li>
)

export default function PostList(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getPosts(){
            const res = await fetch('http://localhost:2121/post/')
            if(!res.ok)
                return
            const posts = await res.json()
            setPosts(posts)
        }
        getPosts()
        return
    }, [posts.length])
    function postList(){
        return posts.map((post) => {
            return (
                <Post
                    post={post}
                />
            )
        })
    }
    return(
        <div className='wrapper_nobg'>
            <h1>Feed</h1>
            <ul>
                {postList()}
            </ul>
        </div>
    )
}