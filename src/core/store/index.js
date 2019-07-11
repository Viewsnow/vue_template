import Vue from "vue";
import Vuex from "vuex";
import apis from "@/core/api";
// Vuex作用是什么? 全局状态管理
Vue.use(Vuex)

//理解为 组件内部  data 属性
const state={
	num:0,
	price:10,
	topic:[],
	isTopic:false
}


//定义  methods 同步方法   视图调用     this.$store.commit("xxxx",val)
const mutations={
	add(state,val){
		state.num++;
		console.log(val)
		console.log()
	}
}

// 定义 compunted  属性计算
const getters={
	count(state){
		return state.num*state.price
	}
}

//定义 异步方法 通用接口调用    视图调用     this.$store.dispatch("xxxx",val)
const actions={
	/*test(content,data){
		content.dispatch("test1",data)
	},
	test1(content,data){
		console.log(data)
	}*/
	
	test(content,data){
		apis.getNovel().then((res)=>{
			
				console.log(res.data.tags);
				content.state.topic=res.data.tags;
				content.state.isTopic=true
			
		})
	}
}
export default new Vuex.Store({
   state,
   mutations,
   getters,
   actions
})