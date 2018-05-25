import React, {Component} from 'react'
import { connect } from "react-redux";
import { setStepRate } from '../actions';

class StepInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            rate: 1
        }
    }
    onStepChange = (e)=>{
        // 입력값을 정수로 변환하여 전달
        this.props.onChgStep(parseInt(e.target.value, 10))
        // 스토어에 있는 상태값이 변경된 후에 반영되길 원한다
        // this.setState({rate:e.target.value})

    }
    componentWillReceiveProps(newProps) {
        // 스토어에 저장된 rate값이 변경되어서 반영되면 이쪽으로 이벤트를 타고 들어온다
    }
    render () {
        return (
            <div style={{margin:10}}>
                <input value={this.state.rate} onChange={this.onStepChange} />
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        stepValue: state.counterReducer.step
    }
}

let mapDispatcherProps = (dispatch)=>{
    return {
        onChgStep: (newStepValue)=>dispatch(setStepRate(newStepValue))
    }
}

StepInput = connect(undefined, mapDispatcherProps)(StepInput)
export default StepInput