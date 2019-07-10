export default (Vue)=>{
	Vue.directive("test",(el,binding,vnode)=>{
        el.onclick=function(){
            alert("OK");
        }
    })
}
