<template>
	<div>
		<h1>新闻页</h1>
		<router-link to="/news/item1">国内新闻</router-link>
		<router-link to="/news/item2">国际新闻</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
/*	export default{
		data(){
			return{
				
			}
		},
		beforeCreate(){
			console.log(222);
		},
		//组件路由钩子函数
		// 路由进入
		beforeRouteEnter(to,from,next){
			 // 路由钩子函数 比生命还要提前,控制跳转不会显示页面
			console.log("跳转之前")
			next();
		},
		// 子路由进入触发
		beforeRouteUpdate(to,from,next){		
			console.log("子路由改变")
			next();
		},
		//路由离开触发
		beforeRouteLeave(to,from,next){
			console.log("跳转之后")
			next();
		}
	}*/
</script>

<style scoped>
	a{
		text-decoration: none;
		font: 26px/30px "";
		color: #0c0c0c;
	}
</style>