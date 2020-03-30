new Vue({
    el: "#app",

    data: {
        todos: [],
        todo: ''
        
    },

    methods: {
        addTodo(){
            let todo = this.todo;
            this.todos.push(todo)
            this.todo = ''
        }
    }
})