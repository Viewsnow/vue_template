import directive from "@/core/directive";
import filter from "@/core/filter";
import commonTemp from "@/components/commonTemp"
import global from "@/core/global"
import apis from "@/core/api"
import Vue from "vue"


export default (Vue)=>{
	//全局注册指令
	directive(Vue);
	//全局注册组件
	commonTemp(Vue);
	//全局注册过滤器
	filter(Vue);
	//JS方法封装
	Vue.prototype.$global=global;
	//ajax的各种函数
	Vue.prototype.$apis=apis;
	//跨组件通信  在老祖宗原型上实例化一个Vue
	Vue.prototype.$eventHub=new Vue();
}
