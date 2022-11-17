const projectsInfo = [
  {
    id: 'first-project',
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'Media/First-project.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://oscar-espinoza.github.io/Portfolio-page/',
    linkSource: 'https://github.com/Oscar-Espinoza/Portfolio-page',
  },
  {
    id: 'second-project',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: '/Media/IMG-first.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://oscar-espinoza.github.io/Portfolio-page/',
    linkSource: 'https://github.com/Oscar-Espinoza/Portfolio-page',
  }, {
    id: 'third-project',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: '/Media/IMG-second.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://oscar-espinoza.github.io/Portfolio-page/',
    linkSource: 'https://github.com/Oscar-Espinoza/Portfolio-page',
  }, {
    id: 'fourth-project',
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: '/Media/IMG-third.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://oscar-espinoza.github.io/Portfolio-page/',
    linkSource: 'https://github.com/Oscar-Espinoza/Portfolio-page',
  }, {
    id: 'fifth-project',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: '/Media/IMG-first.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://oscar-espinoza.github.io/Portfolio-page/',
    linkSource: 'https://github.com/Oscar-Espinoza/Portfolio-page',
  }, {
    id: 'sixth-project',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: '/Media/IMG-second.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://oscar-espinoza.github.io/Portfolio-page/',
    linkSource: 'https://github.com/Oscar-Espinoza/Portfolio-page',
  }, {
    id: 'seventh-project',
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: '/Media/IMG-third.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://oscar-espinoza.github.io/Portfolio-page/',
    linkSource: 'https://github.com/Oscar-Espinoza/Portfolio-page',
  },
];

let formInfo = {
  'full-name': '',
  'email-address': '',
  message: '',
};

if (localStorage.getItem('formInfo') != null) {
  formInfo = JSON.parse(localStorage.getItem('formInfo'));
}

document.querySelectorAll('.menu-btn').forEach((item) => {
  item.addEventListener('click', () => {
    const menu = document.getElementById('menu-mobile');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  });
});

document.querySelectorAll('.see-project').forEach((item) => {
  item.addEventListener('click', (e) => {
    const popUp = document.getElementById('pop-up');
    const project = projectsInfo.filter((item) => item.id === e.currentTarget.parentNode.id)[0];
    const title = popUp.querySelector('#pop-up-title');
    const description = popUp.querySelector('#description-text');
    const technologiesList = popUp.querySelector('#pop-up-technologies');
    const img = popUp.querySelector('#pop-up-img');
    const seeLive = popUp.querySelector('#see-live');
    const seeSource = popUp.querySelector('#see-source');

    title.textContent = project.name;
    description.textContent = project.description;
    if (technologiesList.hasChildNodes()) {
      Array.from(technologiesList.children).forEach((child) => {
        technologiesList.removeChild(child);
      });
    }
    project.technologies.forEach((technology) => {
      technologiesList.appendChild(document.createElement('li')).textContent = technology;
    });

    img.src = project.image;
    seeLive.href = project.linkLive;
    seeSource.href = project.linkSource;
    popUp.classList.add('active');
  });
});

document.getElementById('close-window').addEventListener('click', () => {
  document.getElementById('pop-up').classList.remove('active');
});

document.getElementById('error-close-btn').addEventListener('click', (e) => {
  e.currentTarget.parentNode.classList.remove('active');
});

window.addEventListener('load', () => {
  document.querySelectorAll('[required]'.forEach((formField) => {
    formField.value = formInfo[formField.id];
  }));
});

document.getElementById('contact_form').addEventListener('submit', (e) => {
  const emailInput = document.getElementById('email-address');
  const emailRegEx = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+/;
  if (!emailRegEx.test(emailInput.value)) {
    document.getElementById('error-msg').classList.add('active');
    e.preventDefault();
  }
});

document.getElementById('contact_form').addEventListener('input', (e) => {
  const targetId = e.target.id;
  formInfo[targetId] = e.target.value;
  localStorage.setItem('formInfo', JSON.stringify(formInfo));
});