<template>
	<div class="helper">
		<span class="tabs">
			<span
			v-for="state in states"
			:key="state"
			:class="[state, filter===state?'actived':'']"
			@click="toggleFilter(state)"
			>
			<span v-if="state=='all'">全部({{todos.length}})</span>
			<span v-if="state=='active'">未完成({{unFinishedTodolength}})</span>
			<span v-if="state=='completed'">已完成({{todos.length-unFinishedTodolength}})</span>
			</span>
		</span>
		<span
		class="clear"
		@click="clearAllCompleted">删除已完成</span>
		<span
		class="clear"
		@click="clearAll">删除全部</span>
	</div>
</template>

<script>
export default{
	  props: {
	    filter: {
	      type: String,
	      required: true
	    },
	    todos: {
	      type: Array,
	      required: true
	    }

	  },
	  data () {
	    return {
				states: ['all', 'active', 'completed']
	    }
	  },
	  computed: {
	    unFinishedTodolength () {
	      return this.todos.filter(todo => !todo.completed).length
	    }
	  },
	  methods: {
	    toggleFilter (state) {
	      this.$emit('toggle', state)
	    },
	    clearAllCompleted () {
				if(global.confirm('确定要删除已完成事件吗？')){
					this.$emit('clearAllCompleted')
				}	      
			},
			clearAll () {
				if(global.confirm('确定要删除全部事件吗？')){
					this.$emit('clearAll')
				}				
			}
	  }
}
</script>

<style lang="stylus" scoped>
	.helper{
		font-weight 100
		display flex
		justify-content space-between
		padding 5px 0
		line-height 30px
		background-color #fff
		font-size 14px
		font-smoothing antialiased
		border-bottom: 2px solid #999
	}
	.clear, .tabs{
		padding 0 5px
		box-sizing border-box
	}
	.clear{
		width 150px
		text-align center
		cursor pointer
	}
	.tabs{
		width 500px
		display flex
		justify-content space-around
		*{
			display inline-block
			padding 0 10px
			cursor pointer
			border 1px solid rgba(175,47,47,0)
			&.actived{
				border-color rgba(175,47,47,0.4)
				border-radius 5px
				background pink
			}
		}
	}
</style>
