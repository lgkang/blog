# 进阶技能

### vue 的进阶技能的使用及在业务中的应用

### api 应用系列

### 优化系列

#### 动态组件

##### 动态异步组件可以提高页面的响应速度（防止白屏时间太长），使用如下

```javascript
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import("./MyComponent.vue"),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000,
});
//or
const MyComponent = () => import("../../components/MyComponent");
```

产生的问题：

因为组件时异步加载，所以无法在父类 mounted 无法操作组件 dom 或者无法使用 ref

解决办法：监听组件的生命钩子函数 mounted

```js
<MyComponent @hook:mounted="searchLoaded" ref="myComponent"></MyComponent>
methods: {
    searchLoaded() {
        //操作子组件里面的方法
        console.log(this.$refs.myComponent)
    }
}
```

#### 长列表性能优化

##### 通过冻结 Object，使 vue 不添加 get/set，提高渲染速度

```js
const addData = [1, 2, 3];
this.showData = Object.freeze(addData);
```

::: warning
只是用展示列表数据，无法添加 get/set

故 this.\$set 不可用，this.showData[0].xxx 也不用
:::
产生的问题：
Vue 会通过 Object.defineProperty 对数据进行劫持，一旦使用 Object.freeze（）就无法使用 push、unshift 等等的数组方法、导致无法分页（如果业务需要分页）

分页的解决方法：虽然 push 等等不可用，但是可用扩展运算符(...)

```js
const addData = [1, 2, 3];
//已经加载过
if (showData.length) {
  let tempData = [...this.showData, ...addData];
  this.showData = Object.freeze(addData);
} else {
  this.showData = Object.freeze(addData);
}
```

---
