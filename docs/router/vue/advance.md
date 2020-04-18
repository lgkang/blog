# 进阶技能

### vue 的进阶技能的使用及在业务中的应用

### api 应用系列

#### render
vue的整体流程：
<img :src="$withBase('/images/vue/vue-render1.webp')" alt="foo">

模板：vue基于纯HTML，方面声明数据和UI关系
AST：AST是Abstract Syntax Tree的简称，Vue使用HTML的Parser将HTML模板解析为AST，并且对AST进行一些优化的标记处理，提取最大的静态树，方便Virtual DOM时直接跳过Diff。

渲染函数：用来生成Virtual DOM的。Vue推荐使用模板来构建我们的应用界面，在底层实现中Vue会将模板编译成渲染函数，当然我们也可以不写模板，直接写渲染函数，以获得更好的控制

Virtual DOM：虚拟DOM树，Vue的Virtual DOM Patching算法是基于Snabbdom的实现，并在些基础上作了很多的调整和改进。

Watcher：每个Vue组件都有一个对应的watcher，这个watcher将会在组件render的时候收集组件所依赖的数据，并在依赖有更新的时候，触发组件重新渲染。你根本不需要写shouldComponentUpdate，Vue会自动优化并更新要更新的UI

使用如下：


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

产生的问题：因为组件时异步加载，所以无法在父类 mounted 无法操作组件 dom 或者无法使用 ref

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
