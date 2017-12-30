import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  components: { App },
  template: `<App :state="state"/>`,
  data: {
    state: {
      showDone: false,
      todos: [
        {
          text: 'Wake up',
          done: true,
        },
        {
          text: 'Eat',
          done: false
        },
        {
          text: 'Take a bath',
          done: false,
        }
      ]
    }
  }
})
