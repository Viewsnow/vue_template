<template>
	<div>
		<h3>这是国际新闻版面</h3>
		 <button @click="getMockData">mock</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			getMockData() {
				// console.log(this.$apis)
				this.$apis.login({
					uname: '123456',
					upwd: 122446
				}).then((res) => {
					console.log(res);
				})
			}
		}
	}
</script>

<style>

</style>