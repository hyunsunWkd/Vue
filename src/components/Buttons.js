import React, {Component} from 'react'
import { connect } from "react-redux"
import { increment, decrement } from '../actions';

class Buttons extends Component {
    render () {
        return (
            <div>
                <button onClick={this.props.onIncrement}>증가</button>
                <button onClick={this.props.onDecrement}>감소</button>
            </div>
        )
    }
}
// redux상에 정의한 액션함수를 컴포넌트의 props와 연결
let mapDispatcherProps = (dispatch)=>{
    return {
        onIncrement: ()=>dispatch(increment()),
        onDecrement: ()=>dispatch(decrement())
    }
}

// Counter 클래스를 리듀서의 상태와 props를 연결하여 구조를 변경하여 다시 반환 => 모듈화
Buttons = connect(undefined, mapDispatcherProps)(Buttons)
export default Buttons