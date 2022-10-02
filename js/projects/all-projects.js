const allProjectItems = [
  {
    img: "./img/projects/paradise.png",
    className: "paradise",
    name: "Paradise",
    date: "september, 2022",
    modalID: "paradise",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Jinja2, Werkzeug, Flask-Login, Flask-Migrate, Flask-WTF, WTForms, HTML, SCSS/CSS, JavaScript, Gulp.",
      url: "https://github.com/gigaamiridze/Paradise",
    }
  },
  {
    img: "./img/projects/hortensia.png",
    className: "hortensia",
    name: "Hortensia",
    date: "september, 2022",
    modalID: "hortensia",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Jinja2, Werkzeug, Flask-Login, Flask-Admin, Flask-WTF, WTForms, HTML, SCSS/CSS, JavaScript.",
      url: "https://ai-hortensia.herokuapp.com/",
    }
  },
  {
    img: "./img/projects/vaccine.jpg",
    className: "vaccine",
    name: "Vaccination API",
    date: "May, 2022",
    modalID: "vaccine",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      url: "https://github.com/gigaamiridze/Vaccination-API",
    }
  },
  {
    img: "./img/projects/manager.png",
    className: "manager",
    name: "Magazine Manager API",
    date: "May, 2022",
    modalID: "manager",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      url: "https://github.com/gigaamiridze/Manager-API",
    }
  },
  {
    img: "./img/projects/book.svg",
    className: "book",
    name: "Sandro's Book",
    date: "july, 2022",
    modalID: "book",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      url: "https://nokak.github.io/Web-edition-of-Sandro-s-book/",
    }
  },
  {
    img: "./img/projects/photolens.png",
    className: "photolens",
    name: "Photolens",
    date: "may, 2022",
    modalID: "photolens",
    moreInfo: {
      description: "",
      tools: "Python, Flask, HTML, SCSS/CSS, JavaScript.",
      url: "https://github.com/gigaamiridze/Photolens",
    }
  },
  {
    img: "./img/projects/ecommerce.png",
    className: "ecommerce",
    name: "Shopping Cart",
    date: "april, 2022",
    modalID: "ecommerce",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      url: "https://gigaamiridze.github.io/Shopping-Cart/",
    }
  },
  {
    img: "./img/projects/genius.png",
    className: "genius",
    name: "Genius API",
    date: "May, 2022",
    modalID: "genius",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      url: "https://github.com/gigaamiridze/Genius-API",
    }
  },
  {
    img: "./img/projects/tic-tac-toe.png",
    className: "tic-tac-toe",
    name: "Tic Tac Toe",
    date: "august, 2022",
    modalID: "tic-tac-toe",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      url: "https://gigaamiridze.github.io/tic-tac-toe/",
    }
  },
  {
    img: "./img/projects/portfolio.png",
    className: "portfolio",
    name: "Portfolio",
    date: "june, 2020",
    modalID: "my-portfolio",
    moreInfo: {
      description: "",
      tools: "HTML, CSS, JavaScript.",
      url: "https://gigaamiridze.github.io/Portfolio/",
    }
  },
  {
    img: "./img/projects/travel.png",
    className: "travel",
    name: "Travel",
    date: "june, 2022",
    modalID: "travel",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      url: "https://gigaamiridze.github.io/Unilab-Project/",
    }
  },
  {
    img: "./img/projects/delux.png",
    className: "delux",
    name: "Delux",
    date: "july, 2022",
    modalID: "delux",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      url: "https://gigaamiridze.github.io/Delux/",
    }
  },
  {
    img: "./img/projects/tokyo.png",
    className: "tokyo",
    name: "Tokyo",
    date: "February, 2022",
    modalID: "tokyo",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      url: "https://gigaamiridze.github.io/Tokyo/",
    }
  },
]

const allProjects = document.querySelector('.all-projects');
let boxContent = '';
for (let item of allProjectItems) {
  boxContent += `
                <div class="project-content">
                  <div class="project-box" data-modal="${item.modalID}">
                    <div class="project-img">
                      <img class="${item.className}" src="${item.img}" alt="${item.className}">
                    </div>
                    <h2 class="project-name">${item.name}</h2>
                    <span class="project-date">${item.date}</span>
                  </div>
                  <div class="modal" id="${item.modalID}">
                    <h2 class="title">${item.name}<span class="blue-point">.</span></h2>
                    <p class="description">${item.moreInfo.description}</p>
                    <div class="info">
                      <div class="info-box">
                        <h5>stack</h5>
                        <span>${item.moreInfo.tools}</span>
                      </div>
                      <div class="info-box">
                        <h5>date</h5>
                        <span>${item.date}</span>
                      </div>
                    </div>
                    <div class="images">
                      <img src="" alt="">
                      <img src="" alt="">
                    </div>
                    <div class="modal-btns">
                      <a class="btn" href="${item.moreInfo.url}" target="_blank">visit website</a>
                      <button type="button" class="btn close-btn">back to portfolio</button>
                    </div>
                  </div>
                </div>`;
}
allProjects.innerHTML = boxContent;