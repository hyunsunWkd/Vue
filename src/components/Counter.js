import React, {Component} from 'react'
import { connect } from "react-redux";

class Counter extends Component {
    render () {
        return (
            <div>
                <h2>카운터: {this.props.counterValue}</h2>
                </div>
        )
    }
}
// 스토어에 저장된 상태값(리듀서)을 컴포넌트의 props에 연결 => connect
let mapStateToProps = (state)=>{
    // 어떤 상태값이 어떤 props와 연결되는지 작성
    return {
        // 스토어에서 나오는 state(리듀서컴바인).(특정리듀서).상태값
        counterValue: state.counterReducer.value
    }
}
// Counter 클래스를 리듀서의 상태와 props를 연결하여 구조를 변경하여 다시 반환 => 모듈화
Counter = connect(mapStateToProps)(Counter)
export default Counter