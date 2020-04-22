# vue 组件高级进阶

## 组件应用

### 1、不为人知的作用域插槽（Scoped Slots）

传递参数和事件

```js
//子组件
const child = Vue.component('child', {
    template: `<ul v-for="item in items">
                    <slot
                    :item="item"
                    :hidden="hidden"
                    name="button">
                    </slot>
                </ul>`,
    methods:{
        hidden(item) {
            item.hidden = true
        }
    }
})

//父组件
<child>
    <button
        slot="button"
        slot-scope="{item, hidden}"
        @click="hidden(item)">
    </button>
</child>
```

**_优点：将操作交还子组件的方法进行控制，复用性增强_**

设置通过 slot-scope 的控制父组件样式，在结合 v-bind 和 v-on

```js
//子组件修改如下
<slot
    :attrs="{
        style: item.hidden ? {opacity: 0} : {},
        class: {'color-red': true}
    }"
    :linences="{
        click: hidden(item)
    }"
    >
</slot>
//父组件修改如下
<child>
    <button
        slot="button"
        slot-scope="{attrs, linences}"
        v-bind="attrs"
        v-on="linences">
    </button>
</child>
```

**_优点：可以通过子组件控制父组件的样式，不用关心子组件的内部实现_**

### 2、函数式组件

```js
//xxx.vue
components: {
    child: {
        functional:true,
        //createElement, context
        render(createElement, context) {
            //{data,props,slots, slotScope, ...}
            console.log(context)
        }
    }
}
//or
//无状态组件，只接受props的传参，无需暴露script标签
<template functional>
  <div class="item-title">
      <span class="item-title-left" v-if="props.leftText">{{props.leftText}}</span>
      <slot></slot>
  </div>
</template>
```

:::warning
<template functional></template>
这种方式的写法无法抛出事件，因为无法访问到当前 vue 实例 this
:::
**_优点：相比其他传统组件，性能要高一些，适合展示类型组件_**

### 3、插件方式

思路：把显示方法挂载在 vue.prototype 上，初始显示时，初始化实例，"确定"和"取消"用 promise 回调;

实现如下组件

```js
//dialog.vue

<template>
  <div class="wrap" v-if="isShow">
    <div class="mask" @click="cancel"></div>

    <transition name="drop">
      <div class="content" v-if="isShow">
        <div class="title">
          <div class="title_left">{{title}}</div>
          <div class="title_right" @click="cancel"></div>
        </div>

        <div>{{content}}</div>

        <div class="down">
          <div v-if="showCancle" class="cancel" @click="cancel">取消</div>
          <div class="confirm" @click="confirm">确定</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      showCancle: false,
      title: null,
      content: ""
    };
  },
  methods: {
    //每次调用
    show(params) {
      //初始化参数
      let { showCancle, title, content } = params;
      this.showCancle = showCancle;
      this.title = title;
      this.content = content;
      this.isShow = true;
    },
    cancel() {
      this.isShow = false;
      //调原型链上面的回调
      this.handleAction(false);
    },
    confirm() {
      //确定按钮
      this.isShow = false;
      //调原型链上面的回调
      this.handleAction(true);
    }
  }
};
</script>

//dialog.js

import dialog from './dialog.vue';
import Vue from 'vue';

//
function handleAction(action) {
    if (!action) currentMsg.reject({})
    currentMsg.resolve()
}

let Dialog = {}
let currentMsg = null

Dialog.install = function (Vue, options = {}) {
    const vueDialog = Vue.extend(dialog) //创建模板
    let instance = null
    //挂载在vueDialog的处理行动（确定或者取消）
    vueDialog.prototype.handleAction = handleAction
    Vue.prototype.$dialog = (params) => {
        //第一次初始化实例
        if (!instance) {
            instance = new vueDialog().$mount() //创建实例
            document.body.appendChild(instance.$el) //挂载实例
        }
        //弹框显示
        instance.show(params)
        //返回正在pedding的promise
        return new Promise((resolve, reject) => {
            currentMsg = {
                resolve,
                reject
            }
        })
    }
}
export default Dialog;

//Home.vue
try{
    await this.$dialog({
        title: "提示", //弹窗的标题
        content: "这是内容" //弹窗的内容
    });
    console.log('点击了确定')
}catch(e){
    console.log('点击了取消')
}
```

将内容改造成动态组件，如下

```js
//dialog.vue
<div v-if="!component">{{content}}</div>
<component :is="component" v-else v-bind="componentAttr" v-on="componentListeners"></component>

//增加
data() {
    return {
    component: null,
      componentAttr: {},
      componentListeners: {}
    }
}
methods: {
    show(params) {
      this.componentAttr = componentInfo.attr;
      this.componentListeners = componentInfo.listeners;
      this.component = componentInfo.component;
    }
}
//Home.vue
await this.$dialog({
      showCancle: true, //true->确认消息弹窗,false->消息提示弹窗
      title: "提示", //弹窗的标题
      componentInfo: {
        //你的组件
        component: myComponent,
        //组件属性
        attr: {
          leftText: "亲爱的皮皮",
          es: 1
        },
        listeners: {
          //你组件emit出来的事件，详看1-1
          click: () => {
            console.log("点击事件");
          }
        }
      }
    });
```

:::warning
1-1、注意，能用 click 是子组件\$emit('click')才能够使用，因为 click 是直接绑定在组件上无法生效，'click.native'也无法生效
:::
**_优点_**：使用比其他组件方便，灵活性高
