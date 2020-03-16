<template>
  <div class="flex">
    <div class="flex-elem">
    <div class="logo">&nbsp;</div>
    <h6>Test. Views this component</h6>
    </div>
    <div class="flex-elem">
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
      <input type="checkbox" id="showcomplete" v-model="statedata.showDone">
    </label>
    <p>Test this text</p>
    </div>
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
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 100px;
}
.flex-elem {
  margin-left: 30px;
}
  body {
    font-family: Helvetica, sans-serif;
    color: darkslategray;
    font-size: 1.2em;
    width: 40em;
    position: relative;
  }
  
  input[type=text] {
    margin-top: 1em;
    padding: 0.8em;
    width: 100%;
    font-size: 0.9em;
  }

  input[type=checkbox] {
    position: absolute;
    right: 0;
    padding: 1em;
    cursor: pointer;
  }
  #showcomplete {
    position: static;
    padding: 1em;
    cursor: pointer;
  }
  .logo {
    background:url('/../assets/images/logo.png'); 
    width:200px;
    height:200px; 
  }

  li {
    list-style-type: none;
    padding: 0.2em 0 0.2em 0;
    border-bottom: 1px solid blue;
    position: relative;
  }

  ul {
    padding: 0;
  }

  label {
    width: 80%
  }
  
  .complete {
    color: #d0d;
    text-decoration: line-through;
    font-style: italic;
  }

  .show-completed {
    font-size: 1rem;
    color: #909;
  }
</style>