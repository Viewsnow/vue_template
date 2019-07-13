import {UsersData} from './data/userInfo' ;

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// 初始化 拦截器对象
let mock = new MockAdapter(axios);


mock.onGet('/login').reply(config => {
  //console.log("run");

// console.log(config);
// console.log(UsersData)

  // [状态码,UsersData[0]]
  return [200,UsersData];
})

export default axios;