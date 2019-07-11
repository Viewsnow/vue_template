<template>
	<div>
		<h1>信息页</h1>
		<div class="box">
			{{str|setStr(14)}}
		</div>
		<p>{{title}}</p>
	</div>
</template>

<script>
	import axios from "axios";
	import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
	export default {
		data() {
			return {
				str: "世间男儿皆有愿，愿得一人心，白首不相离。",
				topic:[],
				title:""
			}
		},
		computed:{
			 // 声明属性
			 ...mapState(["isTopic"])
		},
		mounted() {		
			//测试Vuex的异步方法之一
			//this.$store.dispatch("test","人生当苦无妨,良人当归即好")

			//测试全局JS方法
			//console.log(this.$global);
			/*this.$apis.getNovel().then((res) => {
				console.log(res);
				console.log(res.data);
				console.log(res.data.longIntro);
			})*/
			//console.log(this.$eventHub)

			//ajax并发
			/*axios.all([this.$apis.getNovel(), this.$apis.getRecommend()])
				.then(axios.spread(function(Nov, Rec) {
					// 两个请求现在都执行完成
					console.log(Nov, Rec)
				}));*/
			
			//测试Vuex的异步方法之二
			/*this.$store.dispatch("test")
			setTimeout(()=>{
				this.topic=this.$store.state.topic;
			},20000)*/
			
			
			this.$store.dispatch("test")
		},
		methods:{
			
		},
		watch:{
			isTopic(){
				var str=""
				 //console.log(this.$store.state.topic);
				 this.topic=this.$store.state.topic;
				 for(var i=0;i<this.topic.length;i++){
				 	str=this.topic[0]
				 }
				 console.log(str);
				 this.title=str;
			}
		}
	}
</script>

<style scoped lang="scss">
	.box {
		width: r(400);
		height: r(400);
		background: linear-gradient(45deg, lightblue, #00ffff);
		border-radius: r(50);
	}
	p{
		font:38px/40px "华文行楷";
		text-align: center;
		color: #DF5000;
	}
</style>