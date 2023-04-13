// lấy dữ liệu
function upload() {
  var formData = new FormData();
  var files = $("#input-video")[0].files[0];
  formData.append("file", files);

  $.ajax({
    url: "php/pathVideo.php",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function (response) {
      if (response != 0) {
        insertData(response);
      }
    },
  });
}

//upload file on database
function insertData(dataResponse) {
  var input = document.getElementById("input-video");
  var dataclient = {
    event: "upVideoData",
    fileName: input.files[0].name,
    fileSize: input.files[0].size,
    ThumbVideo: dataResponse,
    time: $("#ItemVideo")[0].duration,
  };

  queryDataPost("php/api.php", dataclient, function (res) {
    console.log(res);
    if (res.success == 1) {
      alert("Thêm thành công");
      location.reload();
      showdata();
      resetData();
    } else {
      alert("Thêm thất bại");
    }
  });
}

//xóa video
function deleteVideo(nameVideo) {
  var dataclient = {
    event: "deleteVideo",
    name: nameVideo,
  };
  // console.log("dataclient:", dataclient);
  queryDataPost("php/api.php", dataclient, function (res) {
    // console.log(res);
    if (res.success == 1) {
      alert("Xóa thành công");
      showdata();
    } else {
      alert("Xóa thất bại");
    }
  });
}

//hiện danh sách video
function showdata() {
  var showData = {
    event: "showData",
  };
  queryDataPost("php/api.php", showData, function (res) {
    var data = res.items;
    // console.log(data);
    var htmls = "";
    var count = 0;
    for (var x in data) {
      var list = data[x];
      htmls +=
        "" + 
        '<div class="col-lg-3 col-md-4 col-sm-12 p-2" >' + 
        '<div class="card">' + 
        '<div class="file" id="file_new_' +  count +  '">' + //đổi màu ở đây 
        '<a href="javascript:void(0);">' +  
        '<div class="hover">' +  
        '<button type="button" id="changeVideo" class="btn btn-icon btn-primary m-1"' + 
        // 'onclick="changeItems(`' +  list.id +  "`,`" +  list.sort +  "`); changeColorForObj(`file_new_" +  count +  '`);">' +
        'onclick="changeItems(`' +  list.id +  '`,`' +  list.sort +  '` , `file_new_' +  count + '`);">' +
        '<i class="fa fa-refresh"></i>' +  "</button>" +  
        '<button type="button" id="deleteVideo" class="btn btn-icon btn-danger"' +  'onclick="deleteVideo(`' +  list.name +  '`)">' +  
        '<i class="fa fa-trash"></i>' +  "</button>" +  "</div>" +  
        '<div class="icon">' +  
        '<video id="' +  list.id +  '" src="videos/' +  list.name +  '" width="250px" height="141px" controls></video>' +  "</div>" +  
        '<div class="file-name" title="' +  list.name +  '">' +  
        '<p class="m-b-5 text-muted">' +  list.name +  "</p>" +  "<small>Size: " +  list.size +  
        '<span class="date text-muted">' +  list.time +  " s</span></small>" + 
        "</div>" +  "</a>" +  "</div>" +  "</div>" +  "</div>";
      count++;
    }
    // console.log(htmls);
    $(".showListData").html(htmls);
    thongke();
  });
}

showdata();

function resetData() {
  $("video").attr("src", "#");
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".video-upload-wrap").show();
}

function thongke() {
  var dataclient = {
    event: "statistical",
  };
  queryDataPost("php/api.php", dataclient, function (res) {
    var data = res;
    // console.log(data);
    var files = parseInt(data[0]);
    var element = document.getElementById("soLuongFiles");
    element.innerHTML = "" + files + " video";
    // console.log(element.innerHTML)
    var check = data[1];
    // consolek.log(number)
    if (check != null) {
      var number = parseInt(data[1]);
      var mi = Math.floor(number / 60);
      var sec = Math.floor(number % 60);
      var h = Math.floor(mi / 60);

      var elements = document.getElementById("tongThoiLuong");

      // console.log(h);
      if (h > 0) {
        if (mi > 60) {
          var hour = h + Math.floor(mi / 60);
          var min = Math.floor(mi % 60);
          console.log(hour + "--" + min);
          elements.innerHTML =
            " " + hour + " hour " + min + " min " + sec + " sec ";
        } else {
          elements.innerHTML =
            " " + h + " hour " + mi + " min " + sec + " sec ";
        }
      } else {
        elements.innerHTML = " " + mi + " min " + sec + " sec ";
      }
    } else {
      var elements = document.getElementById("tongThoiLuong");
      elements.innerHTML = "0 phút";
    }
  });
}
thongke();

//chức năng đổi vị trí
var clicks = [];
var changeColor = false;
function changeItems(id, vitri,dem) {
  var thongtin = { id: id, sort: vitri };
  clicks.push(thongtin);

  //giới hạn mảng có trong danh sách (0 - 1) => 2 mảng là tối đa
  for (var x in clicks) {
    if (x > 1) {
      clicks.shift();
    } else{
      var choice = document.getElementById(dem);
      // console.log(choice);
      if (x < 1) {

        // alert('mời chọn tiếp')
        if (!changeColor) {
          choice.classList.add("ob1-bg-color");
          changeColor = true;
        } else {
          choice.classList.add("ob2-bg-color");
          changeColor = false;
        }
      } else if (x == 1) {
        var dataclient = {
          event: "changeVideo",
          objID1: clicks[0].id,
          objSort1: clicks[0].sort,
          objID2: clicks[1].id,
          objSort2: clicks[1].sort,
        };
        // console.log(dataclient);
  
        queryDataPost("php/api.php", dataclient, function (res) {
          var result = confirm(" Bạn có muốn đổi vị trí không");
          if (result) {
            // console.log(res);
              if (res.success == 1) {
                showdata();
                resetChangeItem(dataclient);
                alert("Thay đổi thành công");
              } else {
                alert("Thay đổi thất bại");
                resetChangeItem(dataclient);
              }
          }else {
            alert("Hủy thay đổi");
            resetChangeItem(dataclient);
          }
        });

      }
    }
    
  }

  
}

function resetChangeItem(dataclient) {
  clicks = [];
  dataclient = {
    objID1: "",
    objID2: "",
    objSort1: "",
    objSort2: ""
  }
  $(".file").attr('class', 'file')
}

// chức năng chạy tất cả
// function PlayAll() {
//   var dataclient={
//     event: 'PlayAll',
//     video: 
//   }


//   const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
//   // document.getElementById("13").onloadedmetadata = function () {
//   function playVideo() {
//   // loop = false;
//   document.getElementById("13").play();
//   console.log($("#13")[0].duration);
//   sleep($("#13")[0].duration * 100).then(() => {
//     document.getElementById("14").play();
//     console.log($("#14")[0].duration);
//     //     sleep($("#video2")[0].duration * 1000).then(() => {
//     //       document.getElementById("video3").play();
//     //       console.log($("#video3")[0].duration);
//     //       sleep($("#video3")[0].duration * 1000).then(() => {
//     // abc();
//     //       });
//     //     });
//   });
//   // }

//   playVideo();
//   };
// }
