import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom'

// 라우트를 이용하여 SPA상에서 여러 페이지 처리
// a 태그를 사용하면 새로 다 로드된다 -> 느리다 -> 리액트의 성격에 맞지 않음
// Link 태그를 이용하여 처리하면 VDOM에서 처리하는 원래 방식 처리(부분갱신)

const data = [
  {id:1, title:'어벤져스 인피니티워', director:'마블1'},
  {id:2, title:'월드컵', director:'러시아'},
  {id:3, title:'중간선거', director:'6.13'},
]
// switch, path가 없는 route가 기본 선택 페이지
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>>
            <Route component={Detail} path='/info/:id' />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  
  render() {
    const list = data.map((item, index)=>{
      return (
        <li key={index}>
          <Link to={`/info/${item.id}`}>{item.title}</Link>
        </li>
      )
    })
    return (
      <div>
        <h2>Home</h2>
        <ul>
          { list }
        </ul>
      </div>
    )
  }
}
class Detail extends Component {
  render() {
    const {id} = this.props.match.params
    const cur_id = parseInt( id )
    const detail = data.filter(e=> e.id === cur_id)
    const info = detail.length>0 ? <div>{detail[0].title}/{detail[0].director}</div> : null
    console.log(detail)
    return (
      <div>
        <h2>Detail</h2>
        {info}
      </div>
    )
  }
}
export default App;