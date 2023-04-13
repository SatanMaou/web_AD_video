//chuyển mật khẩu từ chấm sang ký tự
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

//kiểm tra thông tin đăng nhập
function CheckInput(){
    var dataclient = {
        event: "CheckInputData",
        Name: $("#Username").val(),
        Pass: $("#Password").val()
    }
    // console.log(dataclient);

    queryDataPost("php/api.php", dataclient, function(res){
        console.log(res)
        if(res.success == 1){
            localStorage.setItem("User",dataclient.Name);
            localStorage.setItem("MK",dataclient.Pass);
            location.href="watch.html";
        }else if(res.success == 0){
            alert('Đăng nhập thất bại');
            document.getElementById("form-login").reset();
            // localStorage.clear();
        }
    })
}