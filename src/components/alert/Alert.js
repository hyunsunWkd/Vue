import React from "react"
import './Alert.css'

// var {title} = props
// 함수형 컴포넌트 : 단순 그리기만 담당
const Alert = ({msg, visiable })=>{
    // JSX를 않보이게 하는 방법은 리턴 null
    if( !visiable ) return null
    return (
        <div className='AlertBase'>
            <div className='Alert'>
                {msg}
            </div>
        </div>
    )
}
export default Alert