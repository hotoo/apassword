# spassword

---

支付宝无线端密码组件。

![snipshot](snipshot.png)

---

## 使用说明

* `maxlength` 定义了密码长度，默认长度为 6。
* 为了表单校验，建议同时设置 `minlength`。
* 可以通过 `patterm` 和 `type` 属性控制键盘响应。

```html
<input type="password" class="spassword"
    pattern="\d*"
    minlength="6" maxlength="6" />

<script>
seajs.use("spassword", function(spassword){

  var spwd = new spassword("input.spassword").on("complete", function(value){
    alert(value);
  }).render();

});
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
