### Reactivity in Depth

* Vue의 가장 두드러진 특징 중 하나는 눈에 잘 띄지 않는 반응 시스템이다. 이 문서에서는 Vue의 반응 시스템에 대한 세부 내용을 다룬다.

#### How Changes Are Tracked
* 일반 JavaScript 객체를 Vue Instance에 그것의 ```data``` 옵션으로써 전달할 때, Vue는 모든 속성을 처리하고 Object.defineProperty를 사용하여 그것들을 getter/setter들로 변환한다.
* getter/setter들은 사용자에게는 보이지 않지만, 속성에 접근하거나 수정할 때 Vue가 dependency 추적 및 변경 알림을 수행할 수 있도록 한다.
* 한 가지 주의할 점은 변환된 데이터 객체가 로깅될 때, 브라우저는 getter/setter들을 다르게 처리한다는 점이다. 따라서 보다 친숙한 인터페이스를 위해 ```vue-devtools```(https://github.com/vuejs/vue-devtools)를 설치할 수 있다.

* 모든 component instance는 해당하는 관찰자 instance가 있으며, 이것은 component가 dependency로써 렌더링하는동안 수정된 모든 속성을 기록한다.
* 나중에 dependency의 setter이 트리거되면, 관찰자에게 알리고 component가 다시 렌더링된다.

#### Change Detection Caveats(변경 감지 경고)
* 최신 JavaScript의 한계로 Vue는 속성 추가 또는 삭제를 감지할 수 없다.
* Vue는 instance초기화 중에 getter/setter 변환 프로세스를 수행하므로, Vue가 데이터를 변환하고 응답할 수 있도록 속성이 데이터 객체에 있어야 한다.
```js
var vm = new Vue({
  data: {
    a: 1
  }
})
// vm.a is now reactive
vm.b = 2
// vm.b is NOT reactive
```
* Vue는 이미 만들어진 instance에 새로운 root 수준의 반응 속성을 동적으로 추가하는 것을 허용하지 않는다.
* 하지만 ```Vue.set(object, key, value)``` 메소드를 이용해 중첩된 객체에 반응 속성을 추가할 수 있다.
```js
Vue.set(vm.somObject, 'b', 2)
```
* 전역 Vue.set 에 대한 별칭인 vm.$set instance 메소드를 사용할 수도 있다.
```js
this.$set(this.somObject, 'b', 2)
```
* 때로는 ```Object.assign()``` 또는 ```_.extend()``` 를 사용하여 기존 객체에 여러 속성을 할당할 수 있다. 그러나, 객체에 추가된 새로운 속성은 변경 내용을 트리거하지 않는다. 이 경우, 원본 객체와 mixin 객체의 속성을 이용하여 새로운 객체를 만든다.
```js
// Object.assign(this.someObject, { a: 1, b: 2 }) 대신에
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```

* 배열 관련 경고: Vue는 array에 대해 다음과 같은 변경 사항을 감지할 수 없다.
  1. index로 item을 직접적으로 설정할 때: ```vm.items[indexOfItem] = newValue```
  2. array의 길이를 수정할 때: ```vm.items.length = newLength```

* 1번 해결법
```js
Vue.set(example1.items, indexOfItem, newValue)
```
```js
example1.items.splice(indexOfItem, 1, newValue)
```
* 2번 해결법
```js
example1.items.splice(newLength)
```

#### Declaring Reactive Properties
* Vue는 root 수준의 반응성 속성을 동적으로 추가할 수 없으므로, 모든 root 수준의 반응성 데이터 속성을 빈 값으로 미리 선언하여 Vue instance를 초기화해야 한다.
```js
var vm = new Vue({
  data: {
    message:''
  },
  template: '<div>{{ message }}</div>'
})
vm.message = 'Hello!'
```
* 만약 data option에서 message를 선언하지 않는다면, Vue는 존재하지 않는 속성에  렌더 함수가 접근을 시도한다고 경고할 것이다.

* 이 제한사항에는 기술적인 이유가 있다. 이것은 dependncy 추적 시스템에서 가장자리 case를 제거하고 Vue instance를 유형 검사 시스템으로 보다 멋지게 만든다. 그러나 코드 유지 관리 측면에서도 중요한 고려 사항이 있다. 데이터 객체는 구성 요소의 상태에 대한 스키마와 같다. 모든 반응 특성을 선행적으로 선언하면 나중에 재방문하거나 다른 개발자가 읽을 때 구성 요소 코드를 더 쉽게 이해할 수 있다.

#### Async Update Queue
* Vue는 DOM 업데이트를 비동기적으로 수행한다. 데이터가 변경된 것이 발견될 때마다, Vue는 queue를 열고 같은 event loop에서 발생한 모든  데이터 변경사항들을 buffer한다(버퍼링한다).
* 만약 같은 관찰자가 여러번 트리거되면, 그것은 오직 한 번만 큐에 넣어질 것이다.
* 이 버퍼링된 중복 제거는 불필요한 계산과 DOM 조작을 피하는데 중요하다.
* 다음 event loop "tick"에서, Vue는 큐를 비우고 실제(이미 중복제거 된) 작업을 수행한다.
* 내부적으로 Vue는 비동기 queuing에 대해 ```Promise.then```과 ```MutationObserver```을 시도하고 ```setTimeout(fn, 0)```으로 물러난다.
* 예를 들어, ```vm.someData = 'new value' ```를 설정할 때, component는 즉시 재렌더링되지 않을 것이다. queue가 넘칠 때, 다음 "tick"에서 업데이트될 것이다.
* 대개의 경우 이것을 신경 쓸 필요는 없지만, 업데이트된 DOM 상태에 의존하는 작업을 수행할 때 까다로울 수 있다.
* Vue.js는 일반적으로 개발자가 데이터 기반 방식으로 생각하고 DOM을 직접 만지지 않도록 권장하지만, 때로는 손을 더럽게해야 할 수도 있다. Vue.js가 데이터 변경 후 DOM 업데이트를 마칠 떄까지 기다리려면 데이터가 변경된 직후 ```Vue.nextTick(callback)```을 사용할 수 있다. 콜백은 DOM이 업데이트된 후에 호출된다.
```js
<div id="example">{{ message }}</div>
```
```js
var vm = new Vue({
  el: '#example',
  data: {
    message: '123'
  }
})
vm.message = 'new message' // change data
vm.$el.textContext === 'new message' // false
Vue.nextTick(function () {
  vm.$el.textContext === 'new message' // true
})
```
```js
Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
})
```
