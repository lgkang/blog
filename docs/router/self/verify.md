# 链式验证库

github [链式验证库](https://www.runoob.com)

**说明**：基于 jq 的灵感，把每一个方法返回当前的 this，用于验证 form 表单

**_优势_**:

1、体积小，容易拓展，可读性强

2、可以自定义验证方法

3、验证不通过直接抛出第一个错误，省略不该有的判断

```js
// 可通过上面的github下载（给个star），不通过npm是因为可以自己方便修改里面的方法
//使用方法
import Schema from "../utils/Schema";

//登录例子
 validData() {
    //初始化验证库
    const validator = new Schema();
    const {phone, password} = this.form;
    validator.getData(phone)
    .isRequired() //是否必须
    .pattern(/^1\d{10}$/, "请输入正确的手机号码"); //正则验证

    validator.getData(password)
    .isRequired() //是否必须
    .minLength(6, "至少输入6位的密码") //最小长度
    .maxLength(18, "密码不能超过18位") // 最大长度
    .getExpress(/^\d{1,}$/.test(password), "密码必须包含字母") //自定义验证方法，左边true，弹右边的消息
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/, "不符合格式");
    //进行验证
    validator.isVerify();
},
async login() {
    try{
        validData();
        await this.$apis.login();
        //验证库验证失败和后端验证错误信息都是e.message
    }catch(e) {
        /** 验证库验证失败
         * @params {message: '第一个错误信息', errors: []}
         */
        toast(e.message)
    }
}

```

更多用法在源码中
