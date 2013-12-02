# spassword

---

支付宝无线端密码组件。

---

## 使用说明

```html
<input type="password" class="spassword" />

<script>
seajs.use("spassword", function(spassword){

  var spwd = new spassword("#spwd", {
    length: 6
  }).on("complete", function(value){
    alert(value);
  });

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

### input

输入过程中触发 `input` 事件。

### focus

密码控件活动焦点时触发 `focus` 事件。

### blur

密码控件失去焦点时触发 `blur` 事件。
