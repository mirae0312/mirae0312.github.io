const btn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

// 메뉴버튼 click
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
