# axios 进阶

### 封装请求方法

```js
/**
 * @params methods: 请求方法
 * @params url：请求路径
 * @params params: 请求参数
 * @params type：请求的类型， emun: form-data，json
 */
function request(method = "get", url, params, type = "form-data") {
  method = method.toLowerCase();
  const transformData = transform(method, params, type);
  const data = transformData.params;
  const requestConfig = {
    method,
    url,
    headers: {
      "Content-Type": transformData["Content-Type"],
    },
  };
  //注意如果是get请求，在params上赋值
  if (method === "get") {
    requestConfig.params = data;
  } else {
    requestConfig.data = data;
  }
  //封装好的axios实例
  return instance(requestConfig);
}

//处理方法、请求， 如果form-data， 用qs.stringify处理参数
function transform(method, params, type) {
  if (type === "from-data") {
    if (method !== "get") {
      params = qs.stringify(params);
    }
    return {
      params,
      "Content-Type": "application/x-www-form-urlencoded",
    };
  } else {
    return {
      params,
      "Content-Type": "application/json",
    };
  }
}

//post/put 用法 传json用法
request("post/put", "xxxx/xxxx", params, "form-data/json");
//get/delete用法
request("get/delete", "xxxx/xxxx", params);
```

### 上传文件（支持获取进度）

```js
/**
 * @params params：form表单
 * @params onUploadProgress：上传的进度回调
*/
postFile(params, onUploadProgress) {
        // config: axios实例的config
        const requestConfig = {...config};
        requestConfig.headers["Content-Type"] = "multipart/form-data";
        requestConfig.timeout = 50000;
        if (onUploadProgress) {
            requestConfig.onUploadProgress = onUploadProgress;
        }
        return axios.post(requestConfig.baseURL + "/file", params, requestConfig);
    }
//用法
let imageForm = new FormData();
imageForm.append("file", this.file, this.file.name);
const { data: fileInfo } = await postFile(imageForm, onUploadProgress);

onUploadProgress(e) {
    //获取当前的进度
    const currentProcess = e.loaded / e.total
}
```

### 防止同时间多次请求

思路：使用 axios.cancelToken api，在请求拦截前，用数组存下正在请求的 url，当再次请求的时候，判断该请求是否在数组中，如果在，则取消当前请求，不在则添加，请求完毕后（无论是否成功或者失败）清除请求的 url

```js
import axios from "axios";
//正在的请求数组
let pedding = [];
const CancelToken = axios.CancelToken;
/**
 * @params config：axios实例请求的配置
 * @params isFinish：请求是否完成
 */
const dealPedding = (config, isFinish = false) => {
  const unique = config.method + (isFinish ? "" : config.baseURL) + config.url;
  //是否有正在请求的url
  const index = pedding.findIndex((item) => item === unique);
  let cancel;
  config.cancelToken = new CancelToken((cancelFn) => {
    cancel = cancelFn;
  });
  //如果没有，在数组添加
  if (index === -1) {
    pedding.push(unique);
  } else {
    //如果存在，并且该请求已经完成，就从数组删除
    if (isFinish) {
      pedding.splice(index, 1);
    } else {
      //如果请求存在，且请求还没完成，就取消当前请求
      cancel();
    }
  }

//请求拦截器
instance.interceptors.request.use(config => {
    //处理正在pedding的请求
    dealPedding(config)
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

//响应拦截器
instance.interceptors.response.use(res => {
    dealPedding(res.config, true);
    //TODO 你的逻辑
}, err => {
    console.log(err);
    //判断请求是否取消，如果就不弹信息
    if (axios.isCancel(err)) {
        console.error('发送太频繁，重复请求已取消')
        return Promise.reject(err);
    }
    //如果请求是正常的网络错误，就弹出信息，对pedding数组清空，
    Vue.prototype.$toast({
        message: "网络错误请重试",
        position: "bottom"
    });
    // pedding清空是因为要把当前请求清掉
    pedding = [];
    return Promise.reject(err);
});
```
