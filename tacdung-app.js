// Lấy phần tử hamburger từ DOM
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// Lấy phần tử menu di động từ DOM
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// Lấy tất cả các mục menu từ DOM
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// Lấy phần tử header từ DOM
const header = document.querySelector('.header.container');

// Thêm sự kiện click cho phần tử hamburger
hamburger.addEventListener('click', () => {
	// Chuyển đổi lớp 'active' cho hamburger
	hamburger.classList.toggle('active');
	// Chuyển đổi lớp 'active' cho menu di động
	mobile_menu.classList.toggle('active');
});

// Thêm sự kiện scroll cho toàn bộ tài liệu
document.addEventListener('scroll', () => {
	// Lấy vị trí cuộn hiện tại của cửa sổ
	var scroll_position = window.scrollY;
	// Kiểm tra nếu vị trí cuộn lớn hơn 250
	if (scroll_position > 250) {
		// Đặt màu nền của header thành màu xám đậm
		header.style.backgroundColor = '#29323c';
	} else {
		// Đặt màu nền của header thành trong suốt
		header.style.backgroundColor = 'transparent';
	}
});

// Thêm sự kiện click cho từng mục menu
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		// Chuyển đổi lớp 'active' cho hamburger
		hamburger.classList.toggle('active');
		// Chuyển đổi lớp 'active' cho menu di động
		mobile_menu.classList.toggle('active');
	});
});