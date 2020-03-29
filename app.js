new Vue({
    el: "#app",

    data: {
        todos: [],
        todo: {}
        
    },

    methods: {
        addTodo(){
            let newTodo = {
                task: this.todo.task
            }
            this.todos.push(newTodo)
        }
    }
})