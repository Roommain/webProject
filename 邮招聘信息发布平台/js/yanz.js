function checkForm() {
    for(var i=0;i<document.form1.elements.length-1;i++)
    {
        if(this.value=="")
        {
            alert("当前表单不能有空项");
            this.focus();
            // return false;
        }else{
            filterCode(this.value);
        }
    }
    var phone = document.getElementById("phone");
    if(phone.value.length != 11){
        alert("请正确输入手机号");
        // return false;
    }
    return true;
}
function filterCode(str){
    //过滤中英文单双引号以及空格(\s)
    var reg = /\\+|\~+|\!+|\@+|\#+|¥+|\￥+|\%+|\^+|\&+|\*+|\(+|\)+|\'+|(\")+|\$+|`+|\“+|\”+|\‘+|\’+|\s+/g;
    var res = str.replace(reg,"");
    alert("请勿输入特殊字符");
    return res;
}

