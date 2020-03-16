<template>
  <div>
    <h6>Test. Views this component</h6>
    <ul v-for="todo in state.todos.filter(shoudShowTodo)">
      <li v-bind:class="{ complete: todo.done }">
        {{ todo.text }}
        <input type="checkbox" v-model="todo.done">
      </li>
    </ul>
    <form v-on:submit="handleAddTodo($event)">
      <input type="text" v-model="input">
    </form>
    <label class="show-completed">
      Show completed items?
      <input type="checkbox" v-model="statedata.showDone">
    </label>
    <p>Test this text</p>
  </div>
  
</template>

<script>
  export default {
    methods: {
      handleAddTodo(e) {
        e.preventDefault()
        this.statedata.todos.push({ text: this.input, done: false })
        this.input = ''
      },
      shoudShowTodo(todo) {
        if (this.statedata.showDone) {
          return true
        } else {
          return !todo.done
        }
      }
    },
    data() {
      return {
         statedata:this.$props.state,
         input:''
      }         
    },
    props:['state']
  }
</script>

<style>
  p::selection, p::-moz-selection
 {
  background-color: yellow;
}
  body {
    font-family: Helvetica, sans-serif;
    color: darkslategray;
    font-size: 1.4em;
    margin: 1.4em;
    width: 22em;
    position: relative;
  }
  
  input[type=text] {
    margin-top: 1em;
    padding: 0.8em;
    width: 100%;
    font-size: 0.7em;
  }

  input[type=checkbox] {
    position: absolute;
    right: 0;
    padding: 1em;
    cursor: pointer;
  }

  li {
    list-style-type: none;
    padding: 1em 0 1em 0;
    border-bottom: 1px solid lightblue;
    position: relative;
  }

  li input {
    transform: scale(1.8);
  }

  ul {
    padding: 0;
  }

  label {
    width: 80%
  }
  
  .complete {
    color: gainsboro;
    text-decoration: line-through;
    font-style: italic;
  }

  .show-completed {
    font-size: 1rem;
    color: slategray
  }

  .show-completed input {
    transform: scale(1.4)
  }

</style>