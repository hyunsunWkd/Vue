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
* 템플릿 내 표현식은 매우 편리하지만, 실제로는 단순한 연산에만 사용된다. 너무 많은 logic을 템플릿에 넣으면 부풀려지거나 유지하기가 어려워질 수 있다.
```js
<div id="example">
  {{ message.split('').reverse().join('') }}
  </div>
  ```
  * 여기서, 템플릿은 더이상 간단하지 않고 선언적이다. message를 역순으로 표시한다는 것을 알기 전에 잠깐 봐야한다. 템플릿에 역순 메세지는 두 번 이상 포함하려는 경우 문제가 악화된다.
* 그렇기 떄문에 복잡한 논리의 경우 계산된 속성을 사용해야 한다.

* basic example
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```
* 여기에서 우리는 계산된 속성 reversedMessage를 선언했다. 우리가 제공한 함수는 vm.reversedMessage 속성에 대한 getter 함수로 사용된다.

```js
console.log(vm.reversedMessage) // -> 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // -> 'eybdooG'
```

* 일반 속성처럼 템플릿의 계산된 속성에 데이터를 바인딩할 수 있다. Vue는 vm.reversedMessage가 vm.message에 종속되어 있음을 알고 있으므로 vm.message가 변경되면 vm.reversedMessage에 종속된 바인딩을 모두 업데이트한다. 그리고 가장 중요한 부분은 선언적으로 종속성 관계를 만들었다는 것이다. 계산된 getter함수에는 부작용이 없으므로 테스트하고 추론하기 쉽다.

* Computed Caching vs Methods


#### Watchers
