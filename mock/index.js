const Mock = require("mockjs");

const lists = [];
const count = 2;
const image_uri =
  "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3";
for (let i = 0; i < count; i++) {
  lists.push(
    Mock.mock({
      id: "@increment",
      timestamp: +Mock.Random.date("T"),
      author: "@first",
      reviewer: "@first",
      title: "@title(5, 10)",
      content_short: "mock data",
      forecast: "@float(0, 100, 2, 2)",
      importance: "@integer(1, 3)",
      "type|1": ["CN", "US", "JP", "EU"],
      "status|1": ["published", "draft"],
      display_time: "@datetime",
      comment_disabled: true,
      pageviews: "@integer(300, 5000)",
      image_uri,
      platforms: ["a-platform"],
    })
  );
}

let userInfo ={
  authType: [],
  channel: "BUC",
  createId: "-1",
  createName: "ANONYMOUS_USER",
  createTime: 1611717756000,
  deptName: "",
  email: "w4@com",
  deptId: "229421",
  userType: "O",
  id: "2803875",
  lastLoginTime: null,
  managerId: "266429",
  mobileNumber: "13236559385",
  modifyId: "-1",
  modifyName: "ANONYMOUS_USER",
  modifyTime: 1611717756000,
  nickName: "",
  operatorName: "wb-wcx891994",
  outUserNo: "WB891994",
  realName: "张三",
  staffNo: "WB891994",
  status: "NORMAL",
  tntInstId: "ALIPW3CN",
  tokenCreateTime: null,
  userChannel: "BUC",
  workNo: "1235466",
}

let mockMenu =[
  {
      id:1,
      parentId:0,
      orderBy:1,
      name: "Home",
      meta: {
        title: "首页",
        icon: "home-4-line",
      },
      fullPath: "/home",
  },
  {
    id:2,
    parentId:0,
    orderBy:2,
    name:'Test',
    meta: {
      title: "测试二级",
      icon: "building-line",
      affix: true,
    },
  },
  {
    id:21,
    parentId:2,
    orderBy:21,
    name: "Test1",
    meta: {
      title: "测试二级第一个",
    },
    fullPath: "/secondLevel/test1",
  },
  {
    id:22,
    parentId:2,
    orderBy:22,
    name: "Test2",
    meta: {
      title: "测试二级第二个",
    },
    fullPath: "/secondLevel/test2",
  }
]

const mocks = [
  {
    url: "/login",
    type: "post",
    response(config) {
      const accessToken = Mock.Random.date("T");
      if (!accessToken) {
        return {
          code: 500,
          msg: "帐户或密码不正确。",
        };
      }

      return {
        code: 200,
        msg: "success",
        data: accessToken,
      };
    },
  },
  {
    url: "/getUserInfo",
    type: "get",
    response(config) {
      return {
        code: 200,
        msg: "success",
        data: userInfo,
      };
    },
  },
  {
    url: "/getUserMenu",
    type: "get",
    response(config) {
      return {
        code: 200,
        msg: "success",
        data: mockMenu,
      };
    },
  },
  {
    url: "/test",
    type: "post",
    response() {
      return {
        code: 200,
        msg: "success",
        data: '请求成功',
      };
    },
  },
];

module.exports = {
  mocks,
};
