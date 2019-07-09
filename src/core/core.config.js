import item1 from "@/components/main/item1"
export default (Vue)=>{
	//全局注册指令
	Vue.directive("test",(el,binding,vnode)=>{
        el.onclick=function(){
            alert("OK");
        }
    })
	//全局注册组件
	Vue.component("item1",item1);
}
