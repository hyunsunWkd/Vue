<template lang="html">
  <ul v-if="passedData">
    <li v-for="todoItem in passedData" :key="todoItem.id">
      {{ todoItem }}
      <a @click="removeTodo(todoItem)"><i class="glyphicon glyphicon-remove"></i></a>
      <a @click="editTodo(todoItem)"><i class="glyphicon glyphicon-pencil"></i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
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
</style>
