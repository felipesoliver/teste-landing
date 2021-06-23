export default function initBurgerBtn() {
    const button = document.querySelector('[data-burger-btn]');
    const menuList = document.querySelector('[data-menu-list]');
    const menuListItems = document.querySelectorAll('[data-menu-list] a');

    button.addEventListener('click', () => {
        if(button) {
            button.classList.toggle('is-active');
            menuList.classList.toggle('is-active');
        }
    });

    menuListItems.forEach((e) => {
        e.preventDefault
        e.addEventListener('click', () => {
            button.classList.remove('is-active');
            menuList.classList.remove('is-active');
        });
    });
}