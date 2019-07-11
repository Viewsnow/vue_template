import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: resolve => require(['@/components/home'], resolve),
		redirect: "info",
		children: [{
			path: 'info',
			name: 'info',
			component: resolve => require(['@/components/main/info'], resolve),
			meta:{
				keepAlive:true
			}
		}, {
			path: 'news',
			name: 'news',
			component: resolve => require(['@/components/main/news'], resolve),
			redirect: "/news/item1",
			children: [{
				path: 'item1',
				name: 'item1',
				component: resolve => require(['@/components/main/item1'], resolve)
			}, {
				path: 'item2',
				name: 'item2',
				component: resolve => require(['@/components/main/item2'], resolve)
			}]
		}, {
			path: 'test',
			name: 'test',
			component: resolve => require(['@/components/main/test'], resolve)
		}]
	}]
})

//全局路由钩子函数  通过参数跳转项目位置
/*routers.beforeEach((to, from, next) => {
	if(to.path == "/") {
		if(location.search.indexOf("news") != -1) {
			next({
				path: "/news"
			});
		} else if(location.search.indexOf("info") != -1) {
			next({
				path: "/info"
			});
		} else if(location.search.indexOf("test") != -1) {
			next({
				path: "/test"
			});
		}
	} else {
		next();
	}
})
routers.afterEach((to, from, next) => {
	console.log("跳转后执行");
})*/

export default routers