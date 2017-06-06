### ES2015

* IE환경을 지원하면서도 ES2015를 쓰기 위해서는 babel 같은 transpiler가 필수이다.
* webpack에서는 이를 위해 babel-loader에 통과시켜서 ES5이하의 JavaScript로 만든다.

#### babel-loader 설치
```
npm install --save-dev babel-loader babel-core babel-preset-env
```

#### 설정
* babel-loader을 사용하기 위해서는 webpack 설정파일에 다음의 module 리스트를 추가해야 한다.
* webpack.config.js
```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
}
```
* babel을 사용하기 위해서는 preset을 설치해야 한다.
* babel-preset-env: 설정된 환경에 알맞게 preset을 자동으로 설정해준다.
* 이 프로젝트에 포함된 모든 .js 확장자 파일은 babel-loader를 거치면서 ES5로 트랜스파일된다.
