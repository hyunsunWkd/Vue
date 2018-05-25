import React from "react"
import './Comment.css'

// 댓글 하나 표현
const Comment = ({email, body})=>{
    return (
        <li className='Comment'>
            <p><b>{email}</b>{body}</p>
        </li>
    )
}
export default Comment