new Vue({
    el: "#app",

    data: {
        todos: [],
        todo: ''
        
    },

    methods: {
        addTodo: function(){
            let todo = this.todo;
            this.todos.push(todo);
            this.todo = ''
        },
        deleteTodo: function(todo){
            let index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)
        }
        
    }
})