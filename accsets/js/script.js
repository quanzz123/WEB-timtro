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

var currentPage = 1;
var totalTabs = 3;

// JavaScript để xử lý sự kiện khi tab được nhấp và chuyển trang
function openTabAndChangePage(tabId, page) {
    // Hiển thị tab được chọn
    openTab(tabId);

    // Chuyển đến trang mới
    changePage(page);
}

// JavaScript để xử lý sự kiện khi chuyển trang
function changePage(page) {
    currentPage = page;
    if (currentPage < 1) {
        currentPage = totalTabs;
    } else if (currentPage > totalTabs) {
        currentPage = 1;
    }

    // Hiển thị trang mới
    openTab('tab' + currentPage);
}

// Hàm cập nhật lớp cho nút phân trang
function updatePagingButtons() {
    var pagingButtons = document.querySelectorAll('.my-paging a');
    for (var i = 0; i < pagingButtons.length; i++) {
        pagingButtons[i].classList.remove('active-button');
    }

    var selectedPagingButton = document.querySelector('.my-paging a:nth-child(' + (currentPage + 1) + ')');
    selectedPagingButton.classList.add('active-button');
}

// JavaScript để xử lý sự kiện khi tab được nhấp
function openTab(tabId) {
    // Ẩn tất cả các tab
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }

    // Hiển thị tab được chọn
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');

    // Thêm và loại bỏ lớp cho nút phân trang
    updatePagingButtons();
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};   