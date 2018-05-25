import React from "react"
import './Header.css'

// var {title} = props
// 함수형 컴포넌트 : 단순 그리기만 담당
const Header = ({title})=>{
    return (
        <div className='Header'>
            {title}
        </div>
    )
}
export default Header