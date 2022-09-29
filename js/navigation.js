const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((nav) => {
    nav.classList.remove("active");
    if (nav.classList.contains(current)) {
      nav.classList.add("active");
    }
  });
});


// li buttons
const allProjectsLi = document.querySelector('.all-projects-li');
const frontendLi = document.querySelector('.frontend-li');
const backendLi = document.querySelector('.backend-li');

// Projects
const allProject = document.querySelector('.all-projects');
const backendProjects = document.querySelector('.backend-projects');
const frontendProjects = document.querySelector('.frontend-projects');

// Functionality
backendProjects.classList.add('dn');
frontendProjects.classList.add('dn');

allProjectsLi.addEventListener('click', () => {
  allProject.classList.add('active');
  allProject.classList.remove('dn');

  backendProjects.classList.add('dn');
  backendProjects.classList.remove('active');

  frontendProjects.classList.add('dn');
  frontendProjects.classList.remove('active');

  // li functionality
  allProjectsLi.classList.add('active');
  backendLi.classList.remove('active');
  frontendLi.classList.remove('active');
})

backendLi.addEventListener('click', () => {
  allProject.classList.add('dn');
  allProject.classList.remove('active');

  backendProjects.classList.add('active');
  backendProjects.classList.remove('dn');

  frontendProjects.classList.add('dn');
  frontendProjects.classList.remove('active');

  // li functionality
  allProjectsLi.classList.remove('active');
  backendLi.classList.add('active');
  frontendLi.classList.remove('active');
})

frontendLi.addEventListener('click', () => {
  allProject.classList.add('dn');
  allProject.classList.remove('active');

  backendProjects.classList.add('dn');
  backendProjects.classList.remove('active');

  frontendProjects.classList.add('active');
  frontendProjects.classList.remove('dn');

  // li functionality
  allProjectsLi.classList.remove('active');
  backendLi.classList.remove('active');
  frontendLi.classList.add('active');
})