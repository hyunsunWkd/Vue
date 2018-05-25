import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'

// 라우트를 이용하여 SPA상에서 여러 페이지 처리
// a 태그를 사용하면 새로 다 로드된다 -> 느리다 -> 리액트 성격에 맞지 않음
// Link태그를 이용하여 처리하면 VDOM에서 처리하는 원래 방식 처리(부분갱신)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <div style={{margin:10}}>
          <div className="App">
            {/* Route url와 컴포넌트를 연결. exact: 정확하게 URL이 일치할때 */}
            {/* 홈페이지 */}
            <Route path='/' component={Home} exact />
            {/* 로그인 */}
            <Route path='/login' component={Login}/>
            {/* 회원가입 */}
            <Route path='/join' component={Join}/>
            {/* 메인서비스 */}
            <Route path='/main' component={Main}/>
          </div>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

const common = {
  backgroundColor: 'red',
  color: 'white',
  padding: '0.5em'
}

const Header = ()=>{
  <div style={common}>
    <h2>헤더</h2>
  </div>
}
const Footer = ()=>{
  <div style={common}>
    <h2>푸터</h2>
  </div>
}

const Home = ()=>(
  <div>
    <h2>홈페이지</h2>
    <ul>
      <li><Link to='/login'>로그인</Link></li>
      <li><Link to='/join'>회원가입</Link></li>
      <li><Link to='/main'>메인서비스</Link></li>
    </ul>
  </div>
)
const Login= ()=>(
  <div>
    <h2>로그인</h2>
    <a href='/'>뒤로</a>
  </div>
)
const Join = ()=>(
  <div>
    <h2>회원가입</h2>
    <Link to='/'>뒤로</Link>
  </div>
)
const Main = ()=>(
  <div>
    <h2>메인</h2>
    <Link to='/'>뒤로</Link>
  </div>
)



export default App;