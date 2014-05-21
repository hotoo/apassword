
# 演示文档

---

<meta name="format-detection" content="telephone=no"/>
<meta name="format-detection" content="email=no"/>
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>

<input type="tel" name="spwd" autocomplete="off"
    pattern="[0-9]*"
    minlength="6" maxlength="6" />


````javascript
seajs.use('../spassword', function(spassword){

    new spassword("input[name=spwd]").on("complete", function(value){
        var ME = this;
        window.setTimeout(function(){
            ME.clear();
        }, 500);
    }).render();

});
````

----

扫描二维码访问当前页面

![二维码](example-url.png)
