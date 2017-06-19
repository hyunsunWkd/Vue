### Vue Instance

#### Constructor
* 모든 Vue vm은 Vue 생성자 함수를 통해 root Vue instance를 만듦으로써 부트스트랩된다.
```js
var vm = new Vue({
  // options
})
```
* Vue instance를 인스턴스화 할 때는 데이터, 템플릿 등의 옵션을 포함할 수 있는 옵션 객체를 전달해야 한다. (옵션 목록:\ https://vuejs.org/v2/api/)
* Vue 생성자는 미리 정의된 옵션과 함께 재사용 가능한 component 생성자를 만들도록 확장될 수 있다.
```js
var MyComponent = Vue.extend({
  // extension options
})

var myComponentInstance = new MyComponent()
```

#### Properties and Methods
* 각 Vue instance는 데이터 객체에 있는 모든 속성을 proxy한다.
```js
var data = { a: 1 }
var vm = new Vue({
  data: data
})
vm.a === data.a // -> true

vm.a = 2
data.a // -> 2

data.a = 3
vm.a // -> 3
```
* 이러한 proxy 속성만 반응한다는 점에 유의해야 한다. instance를 만든 후에 새 속성을 instance에 연결하면 Vue 업데이트가 유발되지 않는다.

#### Instance Lifecycle Hooks
* 각 Vue instance는 생성될 때 일련의 초기화 단계를 거친다.
* 예를 들면 데이터 관찰 설정 -> 템플릿 컴파일 -> DOM에 instance mount -> 데이터가 변경될 때 DOM 업데이트
* 그 과정에서 custom logic을 실행할 기회를 주기위해 lifecycle hook를 호출할 것이다. 예를 들어 생성된 hook은 instance가 생성된 후에 호출된다.
```js
var vm = new Vue({
  data: {
    a: 1
  },
  created: function() {
    console.log('a is: ' + this.a)
  }
})
// -> "a is: 1"
```

### Computed Properties and Watchers

#### Computed Properties

#### Watchers
