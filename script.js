const list = document.querySelectorAll('.list');
const pages = document.querySelectorAll('.page');

function activeLink() {
    // メニューのactiveクラスを切り替え
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');

    // 表示するページを切り替え
    const targetId = this.getAttribute('data-target');
    pages.forEach((page) => {
        page.classList.remove('active');
        if (page.id === targetId) {
            page.classList.add('active');
        }
    });
}

list.forEach((item) => item.addEventListener('click', activeLink));
