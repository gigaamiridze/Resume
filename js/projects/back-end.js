const backProjectItems = [
  {
    img: "./img/projects/paradise.png",
    className: "paradise",
    name: "Paradise",
    date: "september, 2022",
  },
  {
    img: "./img/projects/hortensia.png",
    className: "hortensia",
    name: "Hortensia",
    date: "september, 2022",
  },
  {
    img: "./img/projects/vaccine.jpg",
    className: "vaccine",
    name: "Vaccination API",
    date: "May, 2022",
  },
  {
    img: "./img/projects/manager.png",
    className: "manager",
    name: "Magazine Manager API",
    date: "May, 2022",
  },
  {
    img: "./img/projects/genius.png",
    className: "genius",
    name: "Genius API",
    date: "May, 2022",
  },
]

const backProjects = document.querySelector('.backend-projects');
let backBoxContent = '';
for (let item of backProjectItems) {
  backBoxContent += `
                <div class="project-box">
                  <div class="project-img">
                    <img class="${item.className}" src="${item.img}" alt="${item.className}">
                  </div>
                  <h2 class="project-name">${item.name}</h2>
                  <span class="project-date">${item.date}</span>
                </div>`;
}
backProjects.innerHTML = backBoxContent;