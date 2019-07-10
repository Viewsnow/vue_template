import directive from "@/core/directive";
import filter from "@/core/filter";
import commonTemp from "@/components/commonTemp"
import global from "@/core/global"
import apis from "@/core/api"

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
}
