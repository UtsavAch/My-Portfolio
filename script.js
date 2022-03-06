"use strict";

////////////////////////////////////////////////////////////
////////////////////HANDLING PROJECT-DATA///////////////////////////
const projectObject = [
  {
    projectName: "Interesting project",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam illum nihil quisquam suscipit repellat commodi iure",
    projectPictureSrc: "imgs/project1.png",
    projectCodeLink: "#",
    projectViewLink: "#",
  },
  {
    projectName: "Wonderful project",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam illum nihil quisquam suscipit repellat commodi iure",
    projectPictureSrc: "imgs/project2.png",
    projectCodeLink: "#",
    projectViewLink: "#",
  },
  {
    projectName: "Magnificent project",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam illum nihil quisquam suscipit repellat commodi iure",
    projectPictureSrc: "imgs/project3.png",
    projectCodeLink: "#",
    projectViewLink: "#",
  },
];

const projectContainer = document.querySelector(".project__container");

const addProjectContentEl = function (object, n) {
  const htmlProject1 = `<div  class="project project__one">
          <div class="project__text">
            <p class="project__name">${object.projectName}</p>
            <p class="project__description">
              ${object.projectDescription}
            </p>
            <div class="project__links">
              <a href=${object.projectCodeLink} class="project__link gitHub__link">
                code <i class="project__link-icon uil uil-github-alt"></i>
              </a>
              <a href=${object.projectViewLink} class="project__link page__link">
                visit <i class="project__link-icon uil uil-eye"></i
              ></a>
            </div>
            <span class="project__number">${n}</span>
          </div>
          <div class="project__picture">
            <img
              class="project__pic"
              src=${object.projectPictureSrc}
              alt="Project picture"
            />
          </div>
        </div>`;

  const htmlProject2 = `<div class="project project__two">
          <div class="project__picture">
            <img
              class="project__pic"
              src=${object.projectPictureSrc}
              alt="Project picture"
            />
          </div>
          <div class="project__text">
            <p class="project__name">${object.projectName}</p>
            <p class="project__description">
            ${object.projectDescription}
            </p>
            <div class="project__links">
              <a href=${object.projectCodeLink} class="project__link gitHub__link">
                code <i class="project__link-icon uil uil-github-alt"></i>
              </a>
              <a href=${object.projectViewLink} class="project__link page__link">
                visit <i class="project__link-icon uil uil-eye"></i
              ></a>
            </div>
            <span class="project__number">${n}</span>
          </div>
        </div>`;

  if (n % 2 === 1) {
    projectContainer.insertAdjacentHTML("beforeend", htmlProject1);
  } else if (n % 2 === 0) {
    projectContainer.insertAdjacentHTML("beforeend", htmlProject2);
  }
};

projectObject.forEach((item, index) => {
  addProjectContentEl(item, index + 1);
});
////////////////////////////////////////////////////////////
////////////////////HANDLING ABOUT-DATA///////////////////////////

/*****************Array for storing questions answers for about section**** */
const aboutObject = [
  {
    question: "What is your favourite animal?",
    answer:
      "Once in my life I would love to see a real penguin. I love every animals except flies and mosquitoes.",
  },
  {
    question: "What do you like to do the most?",
    answer:
      "Programming. And travelling, not most adventerous one not least adventerous one, the medium one.",
  },
  {
    question: "What do you want to achieve in your life?",
    answer:
      "Happiness by becoming a good web developer now. And later more happiness by learning to play a violin.",
  },
  {
    question: "How did you grow interest in programming?",
    answer:
      "Two positive things happened to me in lockdown. One covid positive and another, interest in programming.",
  },
];

const aboutContainer = document.querySelector(".about__container");

const addAboutContentEl = function (object, n) {
  const htmlAbout = `<div class="about__content">
  <div class="about__question">
    <span class="about__number">${n})</span>
    <p class="about__question-paragraph">
      ${object.question}
    </p>
    <i class="uil uil-angle-down about__icon"></i>
  </div>
  <div class="about__answer">
    <p class="about__answer-paragraph">
      ${object.answer}
    </p>
  </div>
</div>`;
  aboutContainer.insertAdjacentHTML("beforeend", htmlAbout);
};

aboutObject.forEach((item, index) => {
  addAboutContentEl(item, index + 1);
});

////////////////////////
//////COPYRIGHT DATE
const date = new Date();
const year = date.getFullYear();
const copyrightDate = document.querySelector(".copyright__date");
copyrightDate.textContent = year;

////////////////////////
//////SMOOTH SCROLLING
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

////////////////////////////////////////////////////////////
////////////////////NAVBAR SECTION///////////////////////////

////////////////////////
///////STICKY NAVBAR
const header = document.querySelector(".header");
const nav = document.querySelector(".navbar__container");
const navHeight = nav.getBoundingClientRect().height;

const headObserver = new IntersectionObserver(
  function (entries) {
    console.log(entries);
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
      nav.classList.add("navbar__sticky");
    } else if (entry.isIntersecting) {
      nav.classList.remove("navbar__sticky");
    }
  },
  { rootMargin: `-${1}px` }
);
headObserver.observe(header);
////////////////////////////////////////////////////////////
////////////////////ABOUT SECTION///////////////////////////
const aboutQuestions = document.querySelectorAll(".about__question");
const aboutContents = document.querySelectorAll(".about__content");

aboutQuestions.forEach((el) => {
  el.addEventListener("click", function () {
    const parentOfQuestion = el.closest(".about__content");
    let containShow = parentOfQuestion.classList.contains(
      "about__content-show"
    );
    aboutContents.forEach((item) => {
      item.classList.remove("about__content-show");
    });
    if (containShow === false) {
      parentOfQuestion.classList.add("about__content-show");
      containShow = true;
    } else if (containShow === true) {
      parentOfQuestion.classList.remove("about__content-show");
      containShow = false;
    }
  });
});

////////////////////////////////////////////////////////////
////////////////////SLIDER SECTION///////////////////////////
const arrowLeft = document.querySelector(".slider__container-left");
const arrowRight = document.querySelector(".slider__container-right");

arrowLeft.addEventListener("click", () => {
  console.log("clicked1");
});

arrowRight.addEventListener("click", () => {
  console.log("clicked2");
});
