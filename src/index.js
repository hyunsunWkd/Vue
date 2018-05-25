import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 올드 브라우저를 위한 promise지원
import Promise from 'promise-polyfill'
if( !window.Promise ) {
    window.Promise = Promise()
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*
- react 통신모듈 => ajax
    - superagent, jQuery, fetch, request, axios
    - axios: Promise 기반 -> async ~ await 혼용 처리
    npm install axios --save

- react ui 모듈
    - semantic-ui-react : react 구성
    - semantic-ui-css : jquery 구성
    - semantic-ui-sass : 구조적 차이
    npm install semantic-ui-react semantic-ui-css --save
    https://react.semantic-ui.com

- 올드 브라우저를 위한 promise 지원, 여러 통신시 모아주는 역할
    - Promise Polyfill
    - npm install promise-polyfill --save
- 외부 도메인으로 배포 확인, 도메인 지원, 임시 도메인 제공
    - surge
    - npm install surge --save

- 패턴 (페이ㅡ북 추천)
    - 컴포넌트 생성법:
        함수 => 함수 인자 props 전달받고, JSX 구성 <= state없다, 이벤트 없다. props만 받는다
                JSX를 구성한다 stateless component => css 적용하여 UI적인 표현 담당 , 라이프사이클X
                (클래스도 이렇게 구성 가능)
        클래스 => props, state, 이벤트, 라이프사이클 있음 => smart component
                 css적인 부분은 배제
- 더미 통신 API
    - 서버구성이 안되어있어서 임시로 통신하면 데이터를 던져주는 api 사이트를 활용
    - http://jsonplaceholder.typicode.com/
    - 사진글: https://jsonplaceholder.typicode.com/posts/2 or photos

- 애니메이션
    - http://anicollection.github.io/#/
    */