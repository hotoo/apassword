# apassword

---

[![spm package](http://spmjs.io/badge/apassword)](http://spmjs.io/package/apassword)
[![Build Status](https://secure.travis-ci.org/hotoo/apassword.png?branch=master)](https://travis-ci.org/hotoo/apassword)
[![Coverage Status](https://coveralls.io/repos/hotoo/apassword/badge.png?branch=master)](https://coveralls.io/r/hotoo/apassword)

移动端密码控件。

![snipshot](snipshot.png)

---

## 使用说明

* `maxlength` 定义了密码长度，默认长度为 6。
* 为了表单校验，建议同时设置 `minlength`。
* 可以通过 `patterm` 和 `type` 属性控制键盘响应。

```html
<input type="password" class="apassword"
    pattern="\d*"
    minlength="6" maxlength="6" />
```

```js
var APassword = require('apassword');

new APassword("input.apassword")
  .on("complete", function(value){

    alert(value);

}).render();
</script>
```

## API

### val()

获取密码。

### clear()

清空密码。

### focus()

让密码控件获得焦点，该行为会激活显示键盘。

### blur()

让密码控件失去焦点，该行为会隐藏键盘。


## Events

### complete

指定位数的密码输入完成时，触发 `complete` 事件。

### focus

密码控件活动焦点时触发 `focus` 事件。

### blur

密码控件失去焦点时触发 `blur` 事件。


## 参考

* [Controlling which iOS keyboard is shown](http://sja.co.uk/2012/1/4/controlling-which-ios-keyboard-is-shown)
* [Managing the Keyboard](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/KeyboardManagement/KeyboardManagement.html)
