const allProjectItems = [
  {
    img: '../img/projects/img-1.jpg',
    imgAlt: 'Image',
    name: 'Shop web app "Patty"',
    date: 'june, 2022',
  },
]

const allProjects = document.querySelector('.all-projects');
let boxContent = '';
for (item of allProjectItems) {
  boxContent += `
                <div class="project-box">
                  <div class="project-img">
                    <img src="${item.img}" alt="${item.imgAlt}">
                  </div>
                  <h2 class="project-name">${item.name}</h2>
                  <span class="project-date">${item.date}</span>
                </div>`;
}
allProjects.innerHTML = boxContent;