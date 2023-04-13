const addBtns = document.querySelectorAll(".js-modal-add");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-container");
const modalClose = document.querySelector(".js-i-close");
// const modalUpload = document.querySelector(".modal-add-btn")

// hàm mở/đóng của modal
function openModal() {
  modal.classList.add("open");
}
function closeModal() {
  modal.classList.remove("open");
}

// hàm xử chi tiết
for (const addBtn of addBtns) {
  addBtn.addEventListener("click", openModal);
}
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

//modal giao diện add btn video
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var name = input.files[0].name;
      if ( name.slice(-4) == ".mp4" || name.slice(-4) == ".mkv" || name.slice(-4) == ".wmv"
      ) {
        $(".video-upload-wrap").hide();
        $(".file-upload-video").attr("src", e.target.result);
        $(".file-upload-content").show();

      } else {
        removeUpload();
        $('video').attr("src", "#");
        alert("Phải là video");
      }
    };
    $('video').attr("src", "#");
    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

// giao diện chức năng modal
function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".video-upload-wrap").show();
  $('video').attr("src", "#");
}
$(".video-upload-wrap").bind("dragover", function () {
  $(".video-upload-wrap").addClass("video-dropping");
});
$(".video-upload-wrap").bind("dragleave", function () {
  $(".video-upload-wrap").removeClass("video-dropping");
});
