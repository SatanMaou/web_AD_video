//chỉnh logo cho trang web -- fail
function uploadLogo() {
  var formData = new FormData();
  var files = $("#inputFileLogo")[0].files[0];
  formData.append("file", files);

  $.ajax({
    url: "php/logo.php",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function (response) {
      if (response != 0) {
        insertLogo(response);
      }
    },
  });
}

function insertLogo(dataResponse) {
  // var input = document.getElementById("input-video");
  var dataclient = {
    event: "upLogoData",
    user: localStorage.getItem("User"),
    pass: localStorage.getItem("MK"),
    fileName: dataResponse,
  };
//   console.log(dataclient)
  queryDataPost("php/api.php", dataclient, function (res) {
    // console.log(res);
    if (res[0].success == 1) {
        showLogo();
      alert("Thêm thành công");
      // location.reload();
    } else {
      alert("Thêm thất bại");
    }
  });
}

function showLogo() {
    var dataclient = {
        event: "showLogo",
        user: localStorage.getItem("User"),
        pass: localStorage.getItem("MK"),
    };
    console.log(dataclient);

    queryDataPost("php/api.php", dataclient, function (res) {
        console.log(res[0]);
        var logo = res[0];
        $('#imageLogo').attr('src', 'images/avatar/'+logo);
        // localStorage.clear();
      });

}
showLogo();
