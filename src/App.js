import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 라이프사이클 -> 컴포넌트 생애 주기
class App extends Component {
  // 1. 생성자
  constructor (props) {
    super(props)
    console.log('생성자')
  }
  // 2. 화면이 보이려고 한다 -> 마운트 되려고 한다.
  componentWillMount() {
    // 화면에 보이기 전에 뭔가를 하고 싶다면ㅖ
    console.log('componentWillMount()')
  }
  // 3. 화면을 그린다 -> 렌더링한다 -> 마운트한다
  render() {
    console.log('render()')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* 상태변수는 render()에서 최초화면 처리시 사용하는게 아니라면
          필요한 시점에서 수정이라는 방법(this.setState())을 통해 생성할 수 있다
          상태값을 변경했다고 (this.setState() 수행) 해서 그 즉시 변경된 것은 아니다. render()해야 변경됨.
           */}
          <button onClick={ ()=>this.setState({r:Math.random()}) }>상태변경</button>
        </p>
      </div>
    );
  }
  // 4. 화면이 보였다 -> 마운트 되었다.
  componentDidMount() {
    // 화면이 보인 직후 뭔가 작업을 하려면
    console.log('componentDidMount()')
  }
  //====================================
  // 프로퍼티 변경 주기 (props, state)
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps()')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()')
    return true
  }
  componentWillUpdate() {
    console.log('ComponentWillUpdate()')
  }
  componentDidUpdate(){
    console.log('상태값이나 props값이 완전히 변경됐음을 아는 타이밍ComponentDidUpdate()')
  }
  // =======================================
  // 컴포넌트 언마운드 -> 화면에 보여지지 않음
  componentWillUnmount() {
    
  }
}

export default App;
