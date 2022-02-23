const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const aboutPage = document.querySelector('#aboutpage');
  const servicePage = document.querySelector('#servicepage');
  const contactPage = document.querySelector('#contactpage');
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  if (window.innerWidth > 960 && scrollPos < 600) {
    aboutPage.classList.add('highlight');
    servicePage.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutPage.classList.remove('highlight');
    servicePage.classList.add('highlight');
    contactPage.classList.remove('highlight');
    return;
  }

  if (element && window.innerWidth < 960 && scrollPos < 600) {
    element.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
