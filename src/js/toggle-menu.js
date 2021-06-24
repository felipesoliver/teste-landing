export default function initToggleNavBar() {
    const navTrack = document.querySelector('.nav-menu');
    let hideNavBar = window.pageYOffset;
    function toggleNavBar(){
        let showNavBar = window.pageYOffset;
        if(showNavBar > hideNavBar && window.innerWidth > 768) {
            navTrack.style.transform = 'translateY(-100%)';
        } else {
            navTrack.style.transform = 'translateY(0)';
        }
        hideNavBar = showNavBar;
    }
    window.addEventListener('scroll', toggleNavBar);
}