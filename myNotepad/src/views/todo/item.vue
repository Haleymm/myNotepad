<template>
	<div v-bind:class="['todo-item', todo.completed?'completed':'']">
		<input
		type="checkbox"
		class="toggle"
		v-model="todo.completed"
		>
		<label>{{todo.content}}</label>
		<button class="destroy" @click="deleteTodo"></button>
	</div>
</template>

<script>
export default{
	  props: {
	    todo: {
	      type: Object,
	      required: true
	    }
	  },
	  methods: {
	    deleteTodo () {
				if(global.confirm('确定要删除吗？')){this.$emit('del', this.todo.id)}
	    }
	  }
}
</script>

<style lang="stylus" scoped>
	.todo-item{
		position relative
		background-color #fff
		font-size 24px
		border-bottom 1px solid rgba(0,0,0,0.06)
		&:hover{
			.destroy:after{
				content: 'x'
			}
		}
		label{
			white-space: pre-line;
			word-break: break-all;
			padding: 15px 60px 15px 15px;
			margin-left: 30px;
			display: block;
			line-height: 1.2;
			transition: color 0.4s;
		}
		&.completed{
			label{
				color: #d9d9d9;
			}
		}
	}
	.toggle{
		position: absolute;
		top: 10px;
		bottom: 0;
		margin: auto 0;
		text-align: center;
		width: 40px;
		height: 40px;
		border: none;
		appearance: none;
		outline: none;
		&:after{
			content url("../../assets/check-box-outline-blank.png")

		}
		&:checked:after{
			content url("../../assets/check_box.png")
		}
	}
	.destroy{
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		width: 40px;
		height: 40px;
		margin: auto 0;
		font-size: 30px;
		color: #cc9a9a;
		margin-bottom: 11px;
		transition: color 0.2s ease-out;
		background-color transparent
		appearance none
		border-width 0
		cursor pointer
		outline none
	}
</style>
