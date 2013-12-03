# 演示文档

---

<meta name="format-detection" content="telephone=no"/>
<meta name="format-detection" content="email=no"/>
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>

<input type="password" name="spwd" autocomplete="off" pattern="\d*"
    minlength="6" maxlength="6" autofocus />


````javascript
seajs.use('spassword', function(spassword){

    new spassword("input[name=spwd]").on("complete", function(value){
        console.log("complete:", value);
    }).render();

});
````
