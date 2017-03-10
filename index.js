import Vue from 'vue';
// 引入路由模块，必须通过Vue.use()明确安装路由功能
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
	state:{
		name:'tai&xiong'
	},
	mutations:{
		set_fe:function(state,data){
			state.name = data
		}
	}
})

var Foo = require('./components/foo.vue');
var Bar = require('./components/bar.vue');

var UserProfile = {
	template:'<div>{{name}}</div>',
	data:function(){
		return {
			name:''
		}
	},
	mounted:function(){
		console.log(this);//VueComponent
		console.log(this.$route.params);//Object {id: "1"}
		this.$http.jsonp('http://localhost:88/php/test.php',{
			params:{
				callback:'JSON_CALLBACK'
			}
		}).then(function(data){
			console.log(data)
			this.name = data.data.name
		},function(err){
			console.log(err)
		})
	}
}
var UserPosts = {
	template:'<div>UserPosts</div>',
	mounted:function(){
		console.log(this.$route.params)
	}
}

// 定义路由

// 创建router实例
const router = new VueRouter({
	routes:[{
		path:'/foo',
		component:Foo,
		children:[{
			path:'a/:id',
			component:UserProfile
		},{
			path:'b/:id',
			component:UserPosts
		}]
	},{
		path:'/bar',
		component:Bar
	}]
})

// 创建和挂载根实例
const app = new Vue({
	router:router,
	store:store
}).$mount('#app')