export default function initToggleNavBar() {
    const navTrack = document.querySelector('.nav-menu');
    let hideNavBar = window.pageYOffset;
    function toggleNavBar(){
        let showNavBar = window.pageYOffset;
        if(showNavBar > hideNavBar) {
            navTrack.classList.add('hidden');
        } else {
            navTrack.classList.remove('hidden');
        }
        hideNavBar = showNavBar;
    }
    window.addEventListener('scroll', toggleNavBar);
}