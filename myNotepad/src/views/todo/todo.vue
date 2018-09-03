<template>
	<section class="real-app">
		<input
			type="text"
			class="add-input"
			autofocus="autofocus"
			placeholder="接下来要做什么？"
			@keyup.enter="addTodo"
		>
		<tabs
		:filter="filter"
		:todos="todos"
		@toggle="toggleFilter"
		@clearAllCompleted="clearAllCompleted"
    @clearAll="clearAll"
		/>
    <div class="item">
		<item
		v-bind:todo="todo"
		v-for="todo in filteredTodos"
		:key="todo.index"
		@del="deleteTodo"
		/>
    </div>
	</section>
</template>

<script>
import Item from "./item.vue"
import Tabs from "./tabs.vue"
import Storage from '../storage.js'
let id = 0;
export default {
  // 写在组件内部的导航守卫
  beforeRouteEnter(to, from, next) {
    console.log("todo before Route Enter 3");
    next(vm => {
      console.log("after enter vm.id is:", vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("todo before Route Update");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("todo before Route Leave 6");
		if (global.confirm("are you sure ?")){
		  next();
		} 
	},
	props: ['id'],
	mounted () {
		console.log('todo mounted')
	},
  data() {
    return {
      todos: Storage.get(),
      filter: "all"
    };
  },
  components: {
    Item,
    Tabs
  },
  // 监听todo变化
  watch: {
    todos: {
      handler () {
        Storage.set(this.todos)
      },
      deep: true
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      if(e.target.value.trim()){
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        });
        e.target.value = "";
      }
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    clearAll() {
      this.todos = []
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
	width: 600px;
	margin: 0 auto;
	box-shadow: 5px #666;
}
.add-input {
	position: relative;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	outline: none;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	font-smoothing: antialiased;
	padding: 16px 16px 16px 60px;
	border: none;
	box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.5);
}
.item{
  height: 410px;
  overflow: auto; 
}
</style>
