new Vue({
    el: "#app",

    data: {
        todos: [],
        todo: ''

    },

    methods: {
        addTodo: function () {
            let todo = this.todo;
            this.todos.push(todo);
            this.todo = ''
        },
        deleteTodo: function (todo, index) {
            if (this.todos[index] === todo) {
                this.todos.splice(index, 1)
            } else {
                let item = this.todos.indexOf(todo)
                this.todos.splice(item, 1)
            }
        }
    }
})