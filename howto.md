### Vue.js + Express
* frontend: vue.js
* backend: express

#### 파일 구조
* app
  * backend
  * frontend

#### app 구성
  * app 디렉토리에서 express 앱 생성
    ```
    npm install express-generator -g
    express --view=jade backend
    cd backend
    npm install
    DEBUG=backend:* npm start
    ```
  * app 디렉토리에서 vue.js 앱 생성
    ```
    npm install -g vue-cli
    vue init webpack frontend
    # vue-router 설치 필요
    cd frontend
    npm install
    ```

#### express 서버와 연결
  * frontend/config/index.js
  ```js
  proxyTable: {
    '/api': {
      target: 'http://localhost:3000/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
  ```
  * 다음과 같은 설정은 프론트엔드 개발 중 http://localhost:8080/api 요청이 왔을 경우 http://localhost:3000/api 를 프록시로 사용하게 된다.
  참고: http://vuejs-templates.github.io/webpack/proxy.html
  * API 요청을 위해 axios 추가
    * npm install --save axios
    * frontend/src/main.js
    ```js
    import axios from 'axios'
    Vue.prototype.$http = axios
    ```

  * vue-router history module
    * vue-router의 기본모드는 hash mode이다.
    * URL 해시를 사용하여 전체 URL을 시뮬레이트하므로 URL이 변겨오딜 때 페이지가 다시 로드 되지 않는다.
    * 해시를 제거하기 위해 라우더의 history mode를 사용
    * history.pushState API를 활용하여 


  * __dirname
    * directory name of the current module
    * running node example.js from /Users/mjr
    ```
    console.log(__dirname);
    // => /Users/mjr
    ```
  * __filename
    * the file name of the current module
    ```
    console.log(__filename);
    // => /Users/mjr/example.js
    ```
