# 进阶技能

### vue 的进阶技能的使用及在业务中的应用

### api 应用系列

#### render 函数

vue 的整体流程：
<img :src="$withBase('/images/vue/vue-render1.webp')" alt="render">

模板：vue 基于纯 HTML，方面声明数据和 UI 关系
AST：AST 是 Abstract Syntax Tree 的简称，Vue 使用 HTML 的 Parser 将 HTML 模板解析为 AST，并且对 AST 进行一些优化的标记处理，提取最大的静态树，方便 Virtual DOM 时直接跳过 Diff。

渲染函数：用来生成 Virtual DOM 的。Vue 推荐使用模板来构建我们的应用界面，在底层实现中 Vue 会将模板编译成渲染函数，当然我们也可以不写模板，直接写渲染函数，以获得更好的控制

Virtual DOM：虚拟 DOM 树，Vue 的 Virtual DOM Patching 算法是基于 Snabbdom 的实现，并在些基础上作了很多的调整和改进。

Watcher：每个 Vue 组件都有一个对应的 watcher，这个 watcher 将会在组件 render 的时候收集组件所依赖的数据，并在依赖有更新的时候，触发组件重新渲染。你根本不需要写 shouldComponentUpdate，Vue 会自动优化并更新要更新的 UI

vue 中的渲染流程：

<img :src="$withBase('/images/vue/vue-render2.webp')" alt="render">

##### h(createElement): createElement 用法如下：

```js
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数。必填项。
  "div",

  // {Object}
  // 一个与模板中属性对应的数据对象。可选。
  {},

  // {String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    "先写一些文字",
    createElement("h1", "一则头条"),
    createElement(MyComponent, {
      props: {
        someProp: "foobar",
      },
    }),
  ]
);
```

第二个参数可传属性：

```js
{
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM 属性
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 属性内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层属性
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
```

:::details
疑问：根据官网介绍，createElement 第一个参数可传 Object 和 function，但是 Object 或者 function 传递会发生 vue 的错误警告。
:::

关于 slot 的使用方法

```js
import Vue from "vue";
//子组件
const child = Vue.component("child", {
  render: function (createElement) {
    return createElement(
      "strong",
      this.$scopedSlots.default({
        text: "This is Child Component",
      })
    );
  },
});

render(h) {
 return    h(child, {
    scopedSlots: {
      /*
      * <child>
      *     <span slot-scope="props">{{props.text}}</span>
      * </child>
      */
      default: (props) => {
        return h("span", props.text);
      },
    },
  });
}

```

关于指令的用法

```js
const items = (h) => {
  if (this.items.length) {
      return h("ul", this.items.map((item) => {
                return h("li", item);
            }));
    }
    else {
        h("p", "No items found.");
    }
};
//相当于
<ul v-if="items.length">
    <li v-for="item in items">{{ item }}</li>
</ul>
<p v-else>No items found.</p>
```

##### jsx: createElement 用法如下：

正在记录

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
<MyComponent @hook:mounted="myComponentLoaded" ref="myComponent"></MyComponent>
methods: {
    myComponentLoaded() {
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
  this.showData = Object.freeze(tempData);
} else {
  this.showData = Object.freeze(addData);
}
```
