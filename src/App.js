import React, { Component } from 'react';
import { Header } from "./components";
import { PostingContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div>
        {/* 헤더 */}
        <Header title='My 포스트'/>
        {/* 본문 */}
        <PostingContainer />
      </div>
    );
  }
}

export default App;