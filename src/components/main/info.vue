<template>
	<div>
		<h1>信息页</h1>
		<div class="box">
			{{str|setStr(7)}}
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				str: "世间男儿皆有愿，愿得一人心，白首不相离。"
			}
		},
		mounted() {
			//console.log(this.$global);
			/*this.$apis.getNovel().then((res) => {
				console.log(res);
				console.log(res.data);
				console.log(res.data.longIntro);
			})*/

			axios.all([this.$apis.getNovel(), this.$apis.getRecommend()])
				.then(axios.spread(function(Nov, Rec) {
					// 两个请求现在都执行完成
					console.log(Nov, Rec)
				}));
		}
	}
</script>

<style scoped lang="scss">
	.box {
		width: r(1000);
		height: r(1000);
		background: #00ffff;
	}
</style>