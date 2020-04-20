# 进阶技能

## react 的进阶技能的使用及在业务中的应用

### api 应用系列

#### hook

useState 的使用：

需要注意的是，通过 useState 得到的状态 count，在 Counter 组件中的表现为一个常量，每一次通过 setCount 进行修改后，又重新通过 useState 获取到一个新的常

```js
//它传入一个初始值，每次函数执行都能拿到新值
const [count, setCount] = useState(0);
```

useReducer 的使用：

```js
//用行动去控制state的值，比useState更灵活些
function reducer(state, action) {
  switch (action.type) {
    case "up":
      return { count: state.count + 1 };
  }
}
const [state, dispatch] = useReducer(reducer, { count: 1 });
//使用方式
dispatch((type: "up")); //state.count = 2
```
useEffect 的使用
```js
const [count, setCount] = useState(0);

  // => componentDidMount/componentDidUpdate
  useEffect(() => {
    // update 
    document.title = `You clicked ${count} times`;
    // => componentWillUnMount
    return function cleanup() {
    	document.title = 'app';
    }
  }, [count]);
```
---
