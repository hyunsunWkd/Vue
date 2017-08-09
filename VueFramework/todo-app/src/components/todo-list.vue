<template lang="html">
  <ul v-if="passedData">
    <li v-for="todoItem in passedData" :key="todoItem.id">
      <span id="edited">{{ todoItem.title }}</span>
      <input class="edit" type="text"
          v-model="todoItem.title"
          @keyup.enter="doneEdit(todoItem)"
          v-focus="todoItem == beforeTodo"
          @keyup.esc="cancelEdit(todoItem)">
      <a @click="removeTodo(todoItem)"><i class="glyphicon glyphicon-remove"></i></a>
      <a @click="editTodo(todoItem)"><i class="glyphicon glyphicon-pencil"></i></a>

          <!-- : You are binding v-model directly to a v-for iteration alias.
          This will not be able to modify the v-for source array
          because writing to the alias is like modifying a function local variable.
          Consider using an array of objects and use v-model on an object property instead. -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      beforeTodo: null
    }
  },
  // props: ['passedData'],
  // props 검증
  props: {
    passedData: {
      type: [String, Array, Number]
    }
  },
  methods: {
    removeTodo(todoItem) {
      localStorage.removeItem(todoItem)
      var index = this.passedData.indexOf(todoItem)
      this.passedData.splice(index, 1)
    },
    editTodo(todoItem) {
      $('#edited').hide()
      $('.edit').show()
      this.beforeTodo = todoItem.title
    },
    doneEdit(todoItem) {
      console.log(todoItem.title)
      if (!this.beforeTodo) {
        return
      }
      this.beforeTodo = null
      todoItem.title = todoItem.title.trim()
      if (!todoItem.title) {
        this.removeTodo(todo)
      }
      $('.edit').hide()
      $('#edited').show()
    },
    cancelEdit(todoItem) {
      todoItem.title = this.beforeTodo
      $('.edit').hide()
      $('#edited').show()
    }
  },
  directives: {
    'focus': function (el, binding) {
      if (binding.value) {
        console.log(binding)
        console.log(el)
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 100px;
  font-family: Helvetica, Arial, sans-serif;
  color: #42b983;
}

li {
  font-size: 20px;
}

.edit {
  display: none;
}
</style>
