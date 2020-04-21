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

2、函数式组件
```js
//xxx.vue
components: {
    child: {
        functional:true,
        //createElement, context
        render(createElement, context) {
            //TODO
            console.log(context)
        }
    }
}
```
上面简单表述了函数式组件