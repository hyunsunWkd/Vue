import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MyInput from './MyInput'
// import MySelect from './MySelect'
// import MyCheckBox from './MyCheckBox'
// npm install --save superagent
import Net from './Net';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Net />, document.getElementById('root'));
// ReactDOM.render(<MyCheckBox label='선택여부' />, document.getElementById('root'));
registerServiceWorker();
