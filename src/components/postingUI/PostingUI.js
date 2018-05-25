import React from "react"
import './PostingUI.css'

// 본문에 UI 베이스를 담당
const PostingUI = ({children, sub})=>{
    // 해당 요소에 자식 노드들은 모두
    // props.children 밑으로 들어온다
    return (
        <div className='PostingUI'>
            {children}
        </div>
    )
}
export default PostingUI