const frontProjectItems = [
  {
    img: "./img/projects/sandro's-book/book.svg",
    className: "book",
    name: "Sandro's Book",
    date: "july, 2022",
    modalID: "book-front",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      firstImg: "./img/projects/sandro's-book/menu.png",
      secondImg: "./img/projects/sandro's-book/audio.png",
      url: "https://nokak.github.io/Web-edition-of-Sandro-s-book/",
    }
  },
  {
    img: "./img/projects/photolens/photolens.png",
    className: "photolens",
    name: "Photolens",
    date: "may, 2022",
    modalID: "photolens-front",
    moreInfo: {
      description: "",
      tools: "Python, Flask, HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/photolens/home.png",
      secondImg: "./img/projects/photolens/shop-route.png",
      url: "https://github.com/gigaamiridze/Photolens",
    }
  },
  {
    img: "./img/projects/ecommerce/ecommerce.png",
    className: "ecommerce",
    name: "Shopping Cart",
    date: "april, 2022",
    modalID: "ecommerce-front",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/ecommerce/cart-1.png",
      secondImg: "./img/projects/ecommerce/cart-2.png",
      url: "https://gigaamiridze.github.io/Shopping-Cart/",
    }
  },
  {
    img: "./img/projects/tic-tac-toe/tic-tac-toe.png",
    className: "tic-tac-toe",
    name: "Tic Tac Toe",
    date: "august, 2022",
    modalID: "tic-tac-toe-front",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript.",
      firstImg: "./img/projects/tic-tac-toe/empty.png",
      secondImg: "./img/projects/tic-tac-toe/filled.png",
      url: "https://gigaamiridze.github.io/tic-tac-toe/",
    }
  },
  {
    img: "./img/projects/portfolio/portfolio.png",
    className: "portfolio",
    name: "Portfolio",
    date: "june, 2020",
    modalID: "my-portfolio-front",
    moreInfo: {
      description: "",
      tools: "HTML, CSS, JavaScript.",
      firstImg: "./img/projects/portfolio/home.png",
      secondImg: "./img/projects/portfolio/contact.png",
      url: "https://gigaamiridze.github.io/Portfolio/",
    }
  },
  {
    img: "./img/projects/travel/travel.png",
    className: "travel",
    name: "Travel",
    date: "june, 2022",
    modalID: "travel-front",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/travel/section-1.png",
      secondImg: "./img/projects/travel/section-2.png",
      url: "https://gigaamiridze.github.io/Unilab-Project/",
    }
  },
  {
    img: "./img/projects/delux/delux.png",
    className: "delux",
    name: "Delux",
    date: "july, 2022",
    modalID: "delux-front",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/delux/agenda.png",
      secondImg: "./img/projects/delux/contact.png",
      url: "https://gigaamiridze.github.io/Delux/",
    }
  },
  {
    img: "./img/projects/tokyo/tokyo.png",
    className: "tokyo",
    name: "Tokyo",
    date: "February, 2022",
    modalID: "tokyo-front",
    moreInfo: {
      description: "",
      tools: "HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/tokyo/home.png",
      secondImg: "./img/projects/tokyo/about.png",
      url: "https://gigaamiridze.github.io/Tokyo/",
    }
  },
]

const frontProjects = document.querySelector('.frontend-projects');
let frontBoxContent = '';
for (let item of frontProjectItems) {
  frontBoxContent += `
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
                            <img src="${item.moreInfo.firstImg}" alt="${item.className}">
                            <img src="${item.moreInfo.secondImg}" alt="${item.className}">
                          </div>
                          <div class="modal-btns">
                            <a class="btn" href="${item.moreInfo.url}" target="_blank">visit website</a>
                            <button type="button" class="btn close-btn">back to portfolio</button>
                          </div>
                        </div>
                      </div>`;
}
frontProjects.innerHTML = frontBoxContent;