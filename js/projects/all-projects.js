const allProjectItems = [
  {
    img: "../img/projects/paradise.png",
    className: "paradise",
    name: "Paradise",
    date: "september, 2022",
  },
  {
    img: "../img/projects/hortensia.png",
    className: "hortensia",
    name: "Hortensia",
    date: "september, 2022",
  },
  {
    img: "../img/projects/vaccine.jpg",
    className: "vaccine",
    name: "Vaccination API",
    date: "May, 2022",
  },
  {
    img: "../img/projects/manager.png",
    className: "manager",
    name: "Magazine Manager API",
    date: "May, 2022",
  },
  {
    img: "../img/projects/book.svg",
    className: "book",
    name: "Sandro's Book",
    date: "july, 2022",
  },
  {
    img: "../img/projects/photolens.png",
    className: "photolens",
    name: "Photolens",
    date: "may, 2022",
  },
  {
    img: "../img/projects/ecommerce.png",
    className: "ecommerce",
    name: "Shopping Cart",
    date: "april, 2022",
  },
  {
    img: "../img/projects/genius.png",
    className: "genius",
    name: "Genius API",
    date: "May, 2022",
  },
  {
    img: "../img/projects/tic-tac-toe.png",
    className: "tic tac toe",
    name: "Tic Tac Toe",
    date: "august, 2022",
  },
  {
    img: "../img/projects/portfolio.png",
    className: "portfolio",
    name: "Portfolio",
    date: "june, 2020",
  },
  {
    img: "../img/projects/travel.png",
    className: "travel",
    name: "Travel",
    date: "june, 2022",
  },
  {
    img: "../img/projects/tokyo.png",
    className: "tokyo",
    name: "Tokyo",
    date: "February, 2022",
  },
  {
    img: "../img/projects/delux.png",
    className: "delux",
    name: "Delux",
    date: "july, 2022",
  },
]

const allProjects = document.querySelector('.all-projects');
let boxContent = '';
for (item of allProjectItems) {
  boxContent += `
                <div class="project-box">
                  <div class="project-img">
                    <img class="${item.className}" src="${item.img}" alt="${item.className}">
                  </div>
                  <h2 class="project-name">${item.name}</h2>
                  <span class="project-date">${item.date}</span>
                </div>`;
}
allProjects.innerHTML = boxContent;