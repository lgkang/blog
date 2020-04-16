# 进阶技能

### react-native 的进阶技能的使用及在业务中的应用

#### 基础组件
##### StatusBar的基本使用
```javascript
<StatusBar 
     backgroundColor="blue"
     barStyle="dark-content"
   />
```
backgroundColor:设置背景颜色  

hidden:是否隐藏状态栏

translucent:指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”)

barStyle:  
|  值   | 描述  |
|  ----  | ----  |
| default  | 默认状态栏样式（适用于iOS的黑暗，Android适用的光源） |
| light-content  | 黑暗的背景，白色文本和图标 |
| dark-content  | 浅色背景，黑暗的文本和图标 |  

###### 详细操作 [StatusBar](https://cloud.tencent.com/developer/section/1373709)
---
