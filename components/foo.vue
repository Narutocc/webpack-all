<template>
	<div>
		<div>{{name}}</div>
		<input v-model="name"/>
		<button @click="setFe()">setFe</button>
		<p>{{fe}}</p>
		<router-link to="/foo/a/1">Go To a</router-link>
		<router-link to="/foo/b/2">Go To b</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				name:'foo'
			}
		},
		computed:{
			fe:function(){
				return this.$store.state.name
			}
		},
		methods:{
			setFe:function(){
				this.$store.commit('set_fe',this.name)
			}
		}
	}
</script>

<style>
	div{
		color:red
	}
</style>
