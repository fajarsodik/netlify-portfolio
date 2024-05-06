let portfolios = [
  {
    id: 1,
    name: "Pekerja Migran Indonesia",
    description:
      "Android application for guiding Pekerja Migran Indonesia, \n i built this application using jetpack compose",
    icon: ["fab fa-android", "fab fa-firefox-browser"],
  },
  {
    id: 2,
    name: "Cloud Storage For Indihome Android App",
    description: "Cloudstorage Android application for indihome user",
    icon: ["fab fa-android"],
  },
  {
    id: 3,
    name: "Cloudstorage For Indihome Android TV App",
    description: "Cloudstorage Android TV application for indihome user",
    icon: ["fab fa-android"],
  },
  {
    id: 4,
    name: "clouda.id",
    description:
      "Clouda.id is a cloud services that build for business and customer",
    icon: ["fab fa-firefox-browser"],
  },
  {
    id: 5,
    name: "Floudrive",
    description: "I build this using wordpress with plugin elementor",
    icon: ["fab fa-firefox-browser"],
  },
  {
    id: 6,
    name: "Floudashboard",
    description: "I build this using wordpress with plugin elementor",
    icon: ["fab fa-firefox-browser"],
  },
];

function createIcon(iconName) {
  return `<i class="${iconName}"></i>`;
}

function createCardPortfolios() {
  let itemsContainer = document.getElementById("itemsContainer");
  portfolios.forEach(function (item) {
    let card = document.createElement("section");
    let cardTitle = document.createElement("div");
    let cardHeader = document.createElement("h4");
    let cardContent = document.createElement("div");
    let cardDetail = document.createElement("p");

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    let fragment = document.createDocumentFragment();

    cardContent.classList.add("card-content");
    cardTitle.classList.add("card-title");
    card.classList.add("card");
    cardHeader.textContent = item.name;
    card.addEventListener("click", function () {
      openModal(item);
    });
    itemsContainer.appendChild(card);
    card.appendChild(cardTitle);
    cardTitle.appendChild(cardHeader);
    card.appendChild(cardContent);
    cardDetail.textContent = item.description;
    item.icon.forEach((iconName) => {
      let iconHtml = createIcon(`${iconName}`);
      let iconElement = document.createElement("span");
      console.log("test" + item.icon);
      iconElement.innerHTML = iconHtml;
      fragment.appendChild(iconElement);
    });
    iconContainer.appendChild(fragment);
    cardContent.appendChild(cardDetail);
    cardContent.appendChild(iconContainer);
  });
}

createCardPortfolios();

function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var target = this.getAttribute("href");
    smoothScroll(target, 1000);
  });
});