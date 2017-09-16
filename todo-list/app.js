const vm = new Vue({
  el: "#todo",
  data: {
    newTask: "",
    taskList: []
  },
  methods: {
    addTask: function(event) {
      const task = event.target.value;
      this.taskList.push({
        text: task,
        checked: false
      });
      this.newTask = "";
    },
    clearTodoList() {
      this.taskList = [];
    }
  }
});
