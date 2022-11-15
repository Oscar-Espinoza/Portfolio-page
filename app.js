const projectsInfo = [
  {
    id: '001',
    name: 'project 1',
    description: '1',
    image: '',
    technologies: [],
    linkLive: '',
    linkSource: ''
  },
  {
    id: '002',
    name: 'project 2',
    description: '2',
    image: '',
    technologies: [],
    linkLive: '',
    linkSource: ''
  }
]

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
    const project = projectsInfo.filter(item => item.id === e.currentTarget.id)[0]
    const title = document.getElementById("pop-up-title")
    const description = document.getElementById("pop-up-description")
    const popUp = document.getElementById('pop-up')
    
    title.textContent = project.name
    description.textContent = project.description

    popUp.classList.add('active')
  })
})
