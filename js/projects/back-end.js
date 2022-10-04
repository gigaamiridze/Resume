const backProjectItems = [
  {
    img: "./img/projects/paradise/paradise.png",
    className: "paradise",
    name: "Paradise",
    date: "september, 2022",
    modalID: "paradise-back",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Jinja2, Werkzeug, Flask-Login, Flask-Migrate, Flask-WTF, WTForms, HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/paradise/signin.png",
      secondImg: "./img/projects/paradise/add-music.png",
      url: "https://github.com/gigaamiridze/Paradise",
    }
  },
  {
    img: "./img/projects/hortensia/hortensia.png",
    className: "hortensia",
    name: "Hortensia",
    date: "september, 2022",
    modalID: "hortensia-back",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Jinja2, Werkzeug, Flask-Login, Flask-Admin, Flask-WTF, WTForms, HTML, SCSS/CSS, JavaScript.",
      firstImg: "./img/projects/hortensia/intro.png",
      secondImg: "./img/projects/hortensia/statistic.png",
      url: "https://ai-hortensia.herokuapp.com/",
    }
  },
  {
    img: "./img/projects/vaccine-api/vaccine.jpg",
    className: "vaccine",
    name: "Vaccination API",
    date: "May, 2022",
    modalID: "vaccine-back",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/vaccine-api/register.png",
      secondImg: "./img/projects/vaccine-api/post.png",
      url: "https://github.com/gigaamiridze/Vaccination-API",
    }
  },
  {
    img: "./img/projects/genius-api/genius.png",
    className: "genius",
    name: "Genius API",
    date: "May, 2022",
    modalID: "genius-back",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/genius-api/artist.png",
      secondImg: "./img/projects/genius-api/song.png",
      url: "https://github.com/gigaamiridze/Genius-API",
    }
  },
  {
    img: "./img/projects/manager-api/manager.png",
    className: "manager",
    name: "Magazine Manager API",
    date: "May, 2022",
    modalID: "manager-back",
    moreInfo: {
      description: "",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/manager-api/register.png",
      secondImg: "./img/projects/manager-api/post.png",
      url: "https://github.com/gigaamiridze/Manager-API",
    }
  },
]

const backProjects = document.querySelector('.backend-projects');
let backBoxContent = '';
for (let item of backProjectItems) {
  backBoxContent += `
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
                          <a href="${item.moreInfo.firstImg}" data-lightbox="mygallery">
                            <img src="${item.moreInfo.firstImg}" alt="${item.className}">
                          </a>
                          <a href="${item.moreInfo.secondImg}" data-lightbox="mygallery">
                            <img src="${item.moreInfo.secondImg}" alt="${item.className}">
                          </a>
                        </div>
                        <div class="modal-btns">
                          <a class="btn" href="${item.moreInfo.url}" target="_blank">visit website</a>
                          <button type="button" class="btn close-btn">back to portfolio</button>
                        </div>
                      </div>
                    </div>`;
}
backProjects.innerHTML = backBoxContent;