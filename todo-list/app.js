const vm = new Vue({
    el:"#todo",
    data: {
        newTask: "",
        taskList: []
      },
    methods:{
        addTask: function(){
            this.taskList.push({
                text: task,
                checked: false
            })
        }
    }
})