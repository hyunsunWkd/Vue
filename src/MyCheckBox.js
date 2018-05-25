import React, {Component} from 'react'

class MyCheckBox extends Component {
    constructor (props) {
        super(props)
        this.state = {
            checked: false
        }
    }
    onChangeHandler (e) {
        console.log(e.target.checked)
        this.setState({checked: !this.state.checked})
    }
    render () {
        const onChangeHandler = (e)=>this.onChangeHandler(e)
        return (
            <div style={{margin:20}}>
                <label>
                    <input type='checkbox' checked={this.state.checked} onChange={onChangeHandler}/>
                    { this.state.checked ? '선택':'해제' }
                </label>
            </div>
        )
    }
}
export default MyCheckBox