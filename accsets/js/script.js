window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var menuContainer = document.getElementById('menu-container');
    var headerHeight = header.offsetHeight;

    if (window.scrollY >= headerHeight) {
        menuContainer.classList.add('fixed-menu');
    } else {
        menuContainer.classList.remove('fixed-menu');
    }
});


// Lấy tất cả các biểu tượng trái tim theo class "heart-icon"
const heartIcons = document.querySelectorAll(".heart-icon");

// Thêm sự kiện click cho tất cả biểu tượng trái tim
heartIcons.forEach((icon) => {
  icon.addEventListener("click", function() {
    if (this.style.color !== "rgba(255, 0, 0, 0.8)") {
      this.style.color = "rgba(255, 0, 0, 0.8)"; // Nếu màu không phải đỏ, thay đổi màu thành đỏ
    } else {
      this.style.color = "rgba(221, 206, 206, 0.5)"; // Nếu màu đã là đỏ, đổi lại thành màu ban đầu
    }
  });
});


