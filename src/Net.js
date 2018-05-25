import React, { Component } from 'react'
import request from 'superagent'

// 라이프사이클 -> 컴포넌트 생애 주기
class Net extends Component {
  // 1. 생성자
  constructor (props) {
    super(props)
    this.state = {
      exchange: null,
      cur_rate: 1, // 현재 선택한 환율 비율값
      input_money: 0,
      output_money: 0,
      exchange_date: ''
    }
  }
  componentWillMount() { // 화면 보이기 전에
  }
  render() {
    // 통신 데이터가 아직 도착하지 않으면 아래 내용으로 커팅
    if( !this.state.exchange ) {
      return (
        <div>환율 정보를 불러오고 있습니다.</div>
      )
    }
    const options = this.state.exchange.map( (item)=>{
      return (
        <option key={item.name} value={item.rate}>{item.name}</option>
      )
    })
    // 사용자가 통화를 변경하면 호출
    const onSelChange = (e)=>{
      this.setState({
        cur_rate: e.target.value,
        output_money: this.state.input_money / e.target.value
      })
      // 환전 국가를 바꾸면 한화 기준으로 계산한다
    }
    // 상태값은 현재 선택한 국가의 환율로 설정하였으나, 즉가겆긍로 변경되지는 않
    const onInputChange = (e) => {
      // 원화입력 -> 상태값 반영 -> 환전액 = 원화/현재환율
      this.setState({
        input_money: e.target.value,
        output_money: e.target.value / this.state.cur_rate
      })
    }
    const onOutputChange = (e) => {
      // 환전액 입력 -> 상태값 반영 -> 환전액*현재환율 = 원화
      this.setState({
        output_money: e.target.value,
        input_money: e.target.value * this.state.cur_rate
      })
    }

    return (
      <div style={{margin:20}}>
        현재 선택한 환전 국가:<br/>
        <select value={this.state.cur_rate} onChange={ onSelChange }>
          {options}
        </select>
        <br/>
        원화
        <br/>
        <input type='text' value={this.state.input_money} onChange={ onInputChange } />
        <br/>
        상대 국가 환전액
        <br/>
        <input type='text' value={this.state.output_money} onChange={ onOutputChange } />

      </div>
    );
  }
  // 변할 상태값이 전달되는 위치
  shouldComponentUpdate(nextProps, nextState) {

    return true
  }
  // 속성값이 변경 완료 호출
  componentDidUpdate(){

  }
  // 4. 화면이 보였다 -> 마운트 되었다.
  componentDidMount() { // 화면 보인 후에
    const url = 'http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json'
    request.get(url).end( (err, res)=>{
      this.setState( {
        exchange: res.body,
        // 최초 환율은 첫번째 환율
        cur_rate: res.body[0].rate
      } )
    } )
  }
}

export default Net;
