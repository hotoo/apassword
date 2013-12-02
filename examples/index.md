# 演示文档

---

<input type="password" name="spwd" autocomplete="off" pattern="[0-9]{6}"
    minlength="6" maxlength="6" />


````javascript
seajs.use('spassword', function(spassword){

    new spassword("input[name=spwd]").on("complete", function(value){
        alert(value);
    }).render();

});
````
