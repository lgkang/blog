# 缓存（数据类型和时效性）

github [本地缓存](https://www.runoob.com)

**说明**：封装 localStorage（sessionStorage）的时效性和数据类型

**_优势_**：
1、体积小，缓存有时效性，可以设置 localStorage（sessionStorage）储存方法
2、储存数据类型，localStorage（sessionStorage）有缺点，就是只能存 string

```js
import cache from "../utils/cache";
//可以存入布尔类型等等其他类型
cache.setLocal("temp", false);
cache.getCLocal("temp"); //false

cache.setSession("temp", { test: "test" });
cache.getSession("temp"); // {test: "test"}

/**
 * @params key
 * @params 数据
 * @params 过期时间，默认永久 default: Infinity
 */
cache.setLocal("temp", [1, 2, 3], 24 * 60 * 60 * 1000);

const temp = cache.getLocal("temp");
if (temp === null) {
  console.log("缓存已过期");
} else if (temp === "") {
  console.log("从来没设置过改缓存");
}
```
