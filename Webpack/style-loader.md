#### Code Splitting - css
* webpack은 stylesheet도 JavaScript 파일로 번들링할 수 있다.
* importing css
  * css 파일을 다른 JavaScript 모듈처럼 import한다.
  ```javascript
  import 'bootstrap/dist/css/bootstrap.css';
  ```
* Using css-loader and style-loader
  * css-loader과 style-loader을 설치한다.
  ```
  npm install --save-dev css-loader style-loader
  ```
  * 다음과 같이 webpack.config.js 파일을 설정한다.
  ```javascript
  module.exports = {
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
    }
  }
  ```
  * 결과적으로, css는 JavaScript와 함께 번들되고 초기 로드 후에 `<style>` 태그 injection을 통해 페이지에 적용된다.
  * 이는 css의 비동기식 및 병렬 로드 기능을 사용할 수 없다는 단점이 있다. 대신, style 자체를 위해 전체 JavaScript 번들이 로드될 때까지 페이지가 대기해야한다.
  * webpack이 이 문제를 ExtractTextWebpackPlugin을 분리해서 사용하는 CSS를 번들링함으로써 해결할 수 있다.
* Using ExtractTextWebpackPlugin
  * ExtractTextWebpackPlugin를 설치한다.
  ```
  npm install --save-dev extract-text-webpack-plugin
  ```
  * webpack.config.js 파일 설정
  ```javascript
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  module.exports = {
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
    ]
  }
  ```
* 위 두 단계로 모든 css 모듈을 위한 새로운 번들을 생성할 수 있고 그것들은 index.html에 분리된 tag로써 추가할 수 있다.
