import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// 리덕스 관련 모듈 가져오기
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducerTotal from "./reducers";
// 스토어 생성
const store = createStore( reducerTotal )

// npm install --save react-redux
// npm install --save redux
// 리덕스
// flux보다 심플하다. 편리하게 작업 가능(상대적인평가, 개인차 )
// Component -> action -> reducer -> store -> Component
// store 거대한 저장소 (모든 컴포너트가 접근 가능) => index.js
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();