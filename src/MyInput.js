// 모듈 가져오기
import React, { Component } from 'react'

// 컴포넌트 정의
class MyInput extends Component {
    // input 태그에 입력을 하면 그 이벤트를 감지하여
    // 입력값을 조사 => 숫자가 아니면 무시, 숫자면 input 태그에 반영
    constructor (props) {
        super(props)
        // 상태 초기화
        this.state = {
            inputText: ''
        }
    }
    onChangeHandler (e) {
        // 이벤트 오는 것 확인했고, 값도 확인
        //console.log('onChangeHandler', e.target.value)
        // 숫자만 입력 => 입력값 필터링 => 정규식
        const value = e.target.value.replace(/[^0-9]/g, '')
        //console.log(value)
        // input에 숫자만 보이게 처리
        // 상태값 변경 -> render() 호출 -> 화면 갱신
        this.setState({inputText: value})
    }
    onSubmitHandler (e) {
        // 서버 통신 -> ajax
        // 결과 파싱 => 화면 처리
        // reactjs는 SPA 형식을 취하므로 폼 전송이 아닌, ajx를 선호
        // submit 이벤트를 제거
        e.preventDefault()
        console.log(e.target)
        // 값을 초기화
        this.setState({inputText: ''})
    }
    render () {
        // 로컬과 변수를 합친다?
        const onChangeHandler = (e) => this.onChangeHandler(e)
        const onSubmitHandler = (e) => this.onSubmitHandler(e)
        return (
            <div style={{margin: 20}}>
                <form onSubmit={onSubmitHandler}>
                    <input type='text' placeholder='숫자만 입력' onChange={onChangeHandler} value={this.state.inputText} />
                    <input type='submit' value='전송' />
                </form>
            </div>
        )
    }
}

// 모듈화
export default MyInput