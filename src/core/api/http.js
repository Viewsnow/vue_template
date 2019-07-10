import axios from "axios"

//生产环境""   开发环境/apis
const baseURL = location.host.indexOf(".com") != -1 ? "" : "/apis";

//PHP测试
//const baseURL = location.host.indexOf("10.41.151.12") != -1 ? "" : "/apis";

var instance = axios.create({
	// 设置主机
	baseURL,
	//设置超时时间
	timeout: 200000,
	// 跨域  
	withCredentials: true,
	// `transformRequest` 允许在向服务器发送前，修改请求数据
	// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
	// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
	transformRequest: [function(data) {
		// 对 data 进行任意转换处理
		return data;
	}],
	// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
	transformResponse: [function(data) {
		// 对 data 进行任意转换处理
		return data;
	}],
	responseType: 'json'
})

export default instance