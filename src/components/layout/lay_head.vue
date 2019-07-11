<template>
	<div>
		<ul>
			<li v-for="(item,index) in navList" :key="index">
				<router-link :to="item.url">{{item.name}}</router-link>
			</li>
		</ul>
		<div>
			<h1>数量:{{$store.state.num}}</h1>
			<h1>单价:{{$store.state.price}}</h1>
			<h1>总价:{{$store.getters.count}}</h1>
			<button @click="add">add</button>
		</div>
		<div id="aa">
			
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				navList: [{
					url: "/info",
					name: "信息页"
				}, {
					url: "/news",
					name: "新闻页"
				}, {
					url: "/test",
					name: "测试页"
				}],
				num:""
			}
		},
		methods: {
			add(){
				this.$store.commit("add","马作的卢飞快,弓如霹雳弦惊,了却君王天下事,赢得生前身后名,可怜白发生.")
			}
			
		},
		mounted(){
			//this.num=this.$store.state.num
		}
	}
</script>

<style scoped >
	ul {
		overflow: hidden;
		border: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		padding: 0
	}
	
	li {
		list-style: none;
		float: left;
		padding: 5px;
	}
	
	a {
		text-decoration: none;
		font: 26px/30px "华文行楷";
		
	}
	h1{
		font:30px/60px ""
	}
	#aa{
		height:30px
	}
</style>