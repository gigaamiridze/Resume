const allProjectItems = [
  {
    img: "./img/projects/paradise/paradise.png",
    className: "paradise",
    name: "Paradise",
    date: "september, 2022",
    modalID: "paradise",
    moreInfo: {
      description: "Paradise is a music streaming website where users can register, login and add music if they want or listen to music added by others. Users can also view their statistics on the page. For example, how much music he listened to or uploaded. The website is under development.",
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
    modalID: "hortensia",
    moreInfo: {
      description: "Hortensia is a text classification website that offers its users flashcards featuring random sentences pulled from a common text repository. Under the card, there is a graphic selector of the emotional wheel, according to which the customer chooses what emotion the data displayed on the card causes in him. The card marked by the user is stored in the database.",
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
    modalID: "vaccine",
    moreInfo: {
      description: "Using this api one can register, login, add data, read, update and delete. If a person has been vaccinated, he will enter data on what kind of vaccine he received and how many doses. The data of vaccinated people are stored in the database.",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/vaccine-api/register.png",
      secondImg: "./img/projects/vaccine-api/post.png",
      url: "https://github.com/gigaamiridze/Vaccination-API",
    }
  },
  {
    img: "./img/projects/manager-api/manager.png",
    className: "manager",
    name: "Magazine Manager API",
    date: "May, 2022",
    modalID: "manager",
    moreInfo: {
      description: "Using this app one can register, login, add data, read, update and delete. A person will enter data about the product, the data of which will be stored in the database.",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/manager-api/register.png",
      secondImg: "./img/projects/manager-api/post.png",
      url: "https://github.com/gigaamiridze/Manager-API",
    }
  },
  {
    img: "./img/projects/react-form/registration.png",
    className: "react-form",
    name: "React Registration Form",
    date: "december, 2022",
    modalID: "react-form",
    moreInfo: {
      description: "React registration form with validation using the React Hook Form library",
      tools: "React, React Hook Form, JavaScript, HTML, CSS",
      firstImg: "./img/projects/react-form/validation.png",
      secondImg: "./img/projects/react-form/with-data.png",
      url: "https://gigaamiridze.github.io/react-registration-form/",
    }
  },
  {
    img: "./img/projects/sandro's-book/book.svg",
    className: "book",
    name: "Sandro's Book",
    date: "july, 2022",
    modalID: "book",
    moreInfo: {
      description: "This book is an online edition of the book. The stories told in this book are about technology and the magical abilities of modern man. There is no printed version of this book, the stories told in the book can be read and heard only thanks to technology.",
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
    modalID: "photolens",
    moreInfo: {
      description: "Photolens is a photographer and video maker portfolio website with information about him, contact information and his many photos by category. The user can also add the photo he likes to the cart and buy it.",
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
    modalID: "ecommerce",
    moreInfo: {
      description: "This is a landing page website where various products are placed. The user can add the product to the cart, if desired, increase its quantity and dynamically understand the current price of the product.",
      tools: "HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/ecommerce/cart-1.png",
      secondImg: "./img/projects/ecommerce/cart-2.png",
      url: "https://gigaamiridze.github.io/Shopping-Cart/",
    }
  },
  {
    img: "./img/projects/genius-api/genius.png",
    className: "genius",
    name: "Genius API",
    date: "May, 2022",
    modalID: "genius",
    moreInfo: {
      description: "Using the Genius api, an artist can add, read, update, and delete data. The artist will enter data with music-specific data that will be stored in the database.",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/genius-api/artist.png",
      secondImg: "./img/projects/genius-api/song.png",
      url: "https://github.com/gigaamiridze/Genius-API",
    }
  },
  {
    img: "./img/projects/tic-tac-toe/tic-tac-toe.png",
    className: "tic-tac-toe",
    name: "Tic Tac Toe",
    date: "august, 2022",
    modalID: "tic-tac-toe",
    moreInfo: {
      description: "This is a tic tac toe game that anyone can see and play. Built into it is the game logic to find out which player has won the game.",
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
    modalID: "my-portfolio",
    moreInfo: {
      description: "This is my photography portfolio website, where I have information about myself, a gallery of my work, information about my camera and photos, and contact information.",
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
    modalID: "travel",
    moreInfo: {
      description: "A travel website featuring photos and information about various places. This website is a test assignment for an internship. Also located on the page is the products page, from which I fetched information from the api located in the online space.",
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
    modalID: "delux",
    moreInfo: {
      description: "This is a landing page website that provides information about a delux company. The website contains information about the company, employees, agenda and contact information.",
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
    modalID: "tokyo",
    moreInfo: {
      description: "This is an article-type website that contains information about various people and their photos.",
      tools: "HTML, SCSS/CSS, JavaScript, Gulp.",
      firstImg: "./img/projects/tokyo/home.png",
      secondImg: "./img/projects/tokyo/about.png",
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
allProjects.innerHTML = boxContent;