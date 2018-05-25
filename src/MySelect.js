import React, {Component} from 'react'

class MySelect extends Component {
    constructor (props) {
        super(props)
        this.state = {
            default: this.props.value
        }
    }
    ChangeHandler(e) {
        this.setState({default: e.target.value})
    }
    render () {
        // 전달된 배열 데이터를 분해하여 options를 동적 생성
        const options = this.props.items.map( item=>{
            return (
                <option key={item}>{item}</option>
            )
        } )
        const ChangeHandler = (e)=>this.ChangeHandler(e)
        return (
            <div style={{margin:20}}>
                <select value={this.state.default} onChange={ChangeHandler}>
                    {options}
                </select>
            </div>
        )
    }
}

export default MySelect