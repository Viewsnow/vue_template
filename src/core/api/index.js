import request from "./http";
import mock from  "@/mock"

class Apis{
	getPhp() {
        return request({
            method: 'get',
            url: '/test/',
        });
   }
	
   getNovel() {
        return request({
            method: 'get',
            url: '/book-info/53115e30173bfacb4904897e',
        });
    }
   
   getRecommend() {
        return request({
            method: 'get',
            url: '/recommend/53115e30173bfacb4904897e'
        });
    }
   
   //测试mock与ajax拦截
    login(data){
        return mock.get("/login",{
          params: data
        })
    }
}
export default new Apis();