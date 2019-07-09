<template>
	<div>
		<ul>
			<li v-for="(item,index) in navList" :key="index">
				<router-link :to="item.url">{{item.name}}</router-link>
			</li>
		</ul>
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
				}]
			}
		},
		methods: {
			cli(e) {
				var arr=e.currentTarget.parentNode.children;
				for(var i=0;i<arr.length;i++){				
					arr[i].children[0].style.color="#0c0c0c";
				}
				e.target.style.color="red";
			}
		}
	}
</script>

<style scoped>
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
</style>