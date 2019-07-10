export default (Vue)=>{
	Vue.filter("setStr",(val,num)=>{
			var str="";
			if(val.length>=num){
				str=val.slice(0,num)+"..."
			}else{
				str=val
			}
			return str
		})
}
