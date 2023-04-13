//nhập xuất dữ liệu database
function queryDataPost(url, dataSend, callback) {
  $.ajax({
    type: "POST",
    url: url,
    data: dataSend,
    async: true,
    dataType: "json",
    success: callback,
  });
}

function queryDataGet(url, dataSend, callback) {
  $.ajax({
    type: "GET",
    url: url,
    data: dataSend,
    async: true,
    dataType: "json",
    success: callback,
  });
}
