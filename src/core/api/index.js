import request from "./http"

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
}
export default new Apis();