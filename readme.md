Dự án Play All: trình chiếu và phát video

- Giới thiệu: dự án Play All được khởi tạo để chạy các video để theo thứ tự với mục đính giới thiệu, quảng cáo về đối tượng theo góc độ nghe nhìn, dễ tăng độ chú ý cho màn giới thiệu.

- Các chức năng của trang web:
    + Chức năng đăng nhập.
    + Chức năng up và thay đổi ảnh logo.
    + Chức năng up và hiển thị video
    + Chức năng thay đổi vị trí video trong danh sách
    + Chức năng play toàn bộ video theo thứ tự trong danh sách

- Cách sử dụng:
Vào trang đăng nhập, nhập thông tin vào trong form bao gồm tên đăng nhập và mật khẩu đã đăng kí rồi bấm đăng nhập [tài khoản có sẵn: tài khoản: minh và mật khẩu: 1234]. Nếu đăng nhập thành công thì sẽ qua trang có danh sách video và logo của người dùng. Có thể thay đổi hình logo bằng cách nhấn vào hình logo mặt định và chọn hình muốn thay đổi. Thêm video vào danh sách thì nhấn vào nút dấu cộng ở bên dưới tay phải để thêm video. Khi đã có video thì có 2 nút có hình thùng rác dùng để xóa video hiện tại và hình 2 mũi tên xoay vòng thì dùng để thay đổi vị trí hiện tại của video trong danh sách video. 

- Hướng dựng sửa web:
    - Đường dẫn: (SQL, config):
        - Path file (*.sql):
            + ./sql/users.sql: cơ sở dữ liệu cho người dùng và logo
            + ./sql/videos.sql: cơ sở dữ liệu cho video
        - Path file (config.php):
            + ./php/config.php: liên kết với CSDL
            + ./php/api.php: nhập xuất dữ liệu giữa trang web và CSDL
            + ./php/logo.php: di chuyển hình ảnh từ thư mục gốc sang thư mục images
            + ./php/pathVideo.php: di chuyển video từ thư mục gốc sang thư mục videos

- Dự án được xây dụng và hoàn thành bỡi công ty Tech For Business (TFB) và nhóm support OkNguyen