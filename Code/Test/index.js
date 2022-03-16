var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vuejs!'
    }
});

app.message = 'New message the change data';


var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});


var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
});


 app3.seen = true;


 var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
});

// Define a new component called todo-item
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  });

const mensajeVanilla = document.getElementById('MyTest').textContent;
document.getElementById('salida').textContent = 'Copia: ' + mensajeVanilla;


const textVanilla = document.querySelector('#container #texto').innerHTML;
document.querySelector('#container #salida').innerHTML  = 'Copia: ' + textVanilla;

// Los 5 <span>
let nrer = document.querySelectorAll('#prueba .clase');
alert(nrer);
// Todos los <span> de una página
let rty = document.querySelectorAll('span');
alert(rty);
// Todos los <span> y <img> de una página
document.querySelectorAll('span, img');
// Todos los <span> hijos de <div>
document.querySelectorAll('div > span');
