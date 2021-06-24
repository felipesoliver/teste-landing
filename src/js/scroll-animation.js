export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-aos]');
  const windowMetade = window.innerHeight * 0.8;

  function AOS() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('animate');
      } else if (section.classList.contains('animate')) {
        section.classList.remove('animate');
      }
    });
  }
  if (sections.length) {
    AOS();
    window.addEventListener('scroll', AOS);
  }
}
