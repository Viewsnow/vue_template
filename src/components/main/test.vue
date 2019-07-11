<template>
	<div>
		<h1>测试页</h1>
		<!--//地址栏显示,刷新不丢失-->
		<!--<router-link :to="{path:'/info',query:{id:123,name:'潇洒哥'}}">to Info(path)</router-link>-->
		<!--//地址栏不显示,刷新丢失-->
		<!--<router-link :to="{name:'info',params:{id:123,name:'潇洒哥'}}">to Info(name)</router-link>
		<br />
		<button @click="test">path</button>
		<button @click="test1">name</button>-->
		
		
		
		<!--测试core里的全局指令-->
		<button v-test>test</button>
		
		<!--测试core里的全局组件-->
		<item1></item1>
		
		
		<!--测试core里的eventHub的组件通信-->
		<button @click="tongxin">test</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			//函数内部内部跳转;
			/*test(){
				this.$router.push({path:'/info',query:{id:123,name:'潇洒哥'}})
			},
			test1(){
				this.$router.push({name:'info',params:{id:123,name:'潇洒哥'}})
			}*/
			tongxin(){
				this.$eventHub.$emit("test","八百里分麾下炙,五十弦翻塞外声")
			}
		}
	}
</script>

<style scoped>
	button{
		width:60px;
		height:35px;
		font:18px/35px "";
		margin:10px;
	}
	a{
		margin:10px;
	}
</style>