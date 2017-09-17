const vm = new Vue({
    el: "#todo",
    data: {
        newTask: "",
        taskList: []
    },
    methods: {
        addTask: function () {

            var task = this.newTask.trim(); //trim()elimina los espacios por delante y por detrás           

            if (task) {
                console.log('enter')
                this.taskList.push({
                    text: task,
                    checked: false
                })
            }
            this.newTask = "";
        },
        removeTask: function (task) {

            var index = this.taskList.indexOf(task); //Devuelve el indice de task con indexOf
            this.taskList.splice(index, 1);

        },
        clearAll: function (task) {

            this.taskList.splice(task);

        },
        markAll: function(){

            this.taskList.checked(true);

        }

    }
})