// Đợi cho toàn bộ nội dung của tài liệu được tải xong
document.addEventListener("DOMContentLoaded", () => {
    // Lấy phần tử video chính từ DOM
    const video = document.getElementById("main-video");
    // Lấy nút play/pause từ DOM
    const playPauseButton = document.getElementById("play-pause");
    // Lấy nút mute từ DOM
    const muteButton = document.getElementById("mute");
    // Lấy nút toàn màn hình từ DOM
    const fullScreenButton = document.getElementById("full-screen");
    // Lấy thanh tìm kiếm từ DOM
    const seekBar = document.getElementById("seek-bar");
    // Lấy thanh âm lượng từ DOM
    const volumeBar = document.getElementById("volume-bar");
  
    // Thêm sự kiện click cho nút play/pause
    playPauseButton.addEventListener("click", () => {
      // Kiểm tra nếu video đang tạm dừng
      if (video.paused) {
        video.play(); // Phát video
        playPauseButton.textContent = "Pause"; // Đổi chữ thành "Pause"
      } else {
        video.pause(); // Tạm dừng video
        playPauseButton.textContent = "Play"; // Đổi chữ thành "Play"
      }
    });
  
    // Thêm sự kiện click cho nút mute
    muteButton.addEventListener("click", () => {
      // Kiểm tra nếu video đang bị tắt tiếng
      if (video.muted) {
        video.muted = false; // Bỏ tắt tiếng
        muteButton.textContent = "Mute"; // Đổi chữ thành "Mute"
      } else {
        video.muted = true; // Tắt tiếng
        muteButton.textContent = "Unmute"; // Đổi chữ thành "Unmute"
      }
    });
  
    // Thêm sự kiện click cho nút toàn màn hình
    fullScreenButton.addEventListener("click", () => {
      // Kiểm tra và yêu cầu chế độ toàn màn hình
      if (video.requestFullscreen) {
        video.requestFullscreen(); // Yêu cầu toàn màn hình
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Yêu cầu toàn màn hình cho Firefox
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Yêu cầu toàn màn hình cho Chrome/Safari
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // Yêu cầu toàn màn hình cho IE/Edge
      }
    });
  
    // Thêm sự kiện change cho thanh tìm kiếm
    seekBar.addEventListener("change", () => {
      // Tính toán thời gian video dựa trên giá trị của thanh tìm kiếm
      const time = video.duration * (seekBar.value / 100);
      video.currentTime = time; // Đặt thời gian hiện tại của video
    });
  
    // Thêm sự kiện timeupdate cho video
    video.addEventListener("timeupdate", () => {
      // Tính toán giá trị của thanh tìm kiếm dựa trên thời gian hiện tại của video
      const value = (100 / video.duration) * video.currentTime;
      seekBar.value = value; // Cập nhật giá trị của thanh tìm kiếm
    });
  
    // Thêm sự kiện change cho thanh âm lượng
    volumeBar.addEventListener("change", () => {
      video.volume = volumeBar.value; // Đặt âm lượng của video theo giá trị của thanh âm lượng
    });
  });