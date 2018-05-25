import React from "react"
import './CommentList.css'
import { Comment } from '../'

// var {title} = props
// 함수형 컴포넌트 : 단순 그리기만 담당
const CommentList = ({data})=>{
    // 배열의 개수만큼 반복하여 comment를 생성
    const comLists = data.map((item, index)=>{
        return (
            <Comment email={item.email} body={item.body} key={index} />
        )
    } )

    return (
        // 댓글 리스트 표현
        <ul className='CommentList'>
            {comLists}
        </ul>
    )
}
export default CommentList