import Mock from "mockjs";
const UsersData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 ~ 10 个元素
  "userList|1-100": [
    {
      "id|+1": 1,
      username: 'admin',
      password: '123456',
      avatar: 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
      name: '达康书记'
    }
  ]
});


export { UsersData }