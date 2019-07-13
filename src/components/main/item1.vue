<template>
	<div>
		<h3>这是国内新闻版面</h3>
	</div>
</template>

<script>
	import Mock from "mockjs";
	export default {
		data() {
			return {

			}
		},
		mounted() {
			var data = Mock.mock({
				// 属性 list数组，生成 1 到 10 个随机条数
				// 注意 字符串 引起来
				// 属性 id 是一个自增数，起始值为 1，每次增 1    
				"list|1-10": [{
					"id|+1": 1
				}]
			});
			console.log(data);
		}

	}
</script>

<style>

</style>