# mock 教程

### vue-cli3 搭建的 mock

```js
npm install mockjs
```

新建 mock 文件夹，并建 index.js

```js
const Mock = require("mockjs");
//解析文件夹下面的mock文件，例如test.mock.js
const files = require.context("./", false, /\.mock.js$/);
//获取封装axios的config文件
import { config } from "../request/http";
import qs from "qs";

let modules = [];
// 处理导出的文件
files.keys().forEach((file) => {
  modules = modules.concat(files(file).default);
});
//遍历模块
modules.forEach((module) => {
  Object.keys(module).forEach((key) => {
    //获取模块设置的属性
    const { method = "get", data, params = {}, isMock = true } = module[key];
    //处理参数
    if (Object.keys(params).length && !key.includes("?")) {
      key = key + "?" + qs.stringify(params);
    }
    const result = {
      url: key.includes("http") ? key : config.baseURL + key,
      // 伪造和服务端一模一样的返回数据，可自行配置
      data: {
        code: 1,
        isSuccess: true,
        msg: "成功",
        ...data,
      },
    };
    if (isMock) {
      console.log("已使用模拟数据:" + result.url);
      console.log(result.data);
      //进行mock
      Mock.mock(result.url, method, result.data);
    }
  });
});
```

新建 test.mock.js 文件，配合上面封装的方法使用如下

```js
import {Random} from "mockjs";
//请求方法路径
"url": {
        //请求方式
        method: "get",
        "data": {
            //mock的随机格式
            "data|3-10": [
                {
                    startDatetime: Random.now("month"),
                    projectDefineCode: "",
                    projectPlanName: "项目计划名称",
                    projectPlanid: 1,
                    projectDefineName: "项目组名称",
                    projectTime: "2022-1-1 10:00:00",
                    projectDefineId: 1,
                    endDatetime: Random.now("week"),
                    "starOrEnd|0-2": 2
                }
            ]
        }
    }
```

最后配置一下 mock 方式启动，如果是 mock 形式启动，就会以 mock 数据优先，会拦截 ajax 的请求

```js
//新建env.mock文件
//.env.mock
NODE_ENV=development
VUE_APP_DEV_MODE=mock

//最后在 package.json 增加配置
"scripts":{
    "serve:mock": "vue-cli-service serve --mode mock"
}

//在main.js
if (process.env.VUE_APP_DEV_MODE === "mock") import("../mock");
```
