import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  components: { App} ,
  template: `<App :state="state"/>`,
   
  data: {
    state: {
      showDone: true,
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
