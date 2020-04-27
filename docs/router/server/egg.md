# egg 基础

## 设置跨域
1、npm i egg-cors
2、在config的plugins设置
```js
"egg-cors": {
        enable: true,
        package: 'egg-cors'
    }
```
3、在config下的config.default.ts设置
```js
config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ '*' ]
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
```