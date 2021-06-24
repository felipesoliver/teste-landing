export default function initBurgerBtn() {
    const button = document.querySelector('[data-burger-btn]');
    const infoBtn = document.querySelector('[data-purple-btn]')
    const menuList = document.querySelector('[data-menu-list]');
    const menuListItems = document.querySelectorAll('[data-menu-list] a');
    const className = 'is-active';

    button.addEventListener('click', () => {
        if(button) {
            button.classList.toggle(className);
            menuList.classList.toggle(className);
            infoBtn.classList.toggle(className);
        }
    });

    menuListItems.forEach((e) => {
        e.preventDefault
        e.addEventListener('click', () => {
            button.classList.remove(className);
            menuList.classList.remove(className);
            infoBtn.classList.remove(className);
        });
    });
}