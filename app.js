const featureTab = document.querySelector("#feature-list");
const featureMenu = [
  {
    img: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    img: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    img: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send atthe click of a button.",
  },
];
const featureLists = featureTab.querySelectorAll("li");
let activeTab = 0;
featureLists.forEach((li, index) => {
  li.addEventListener("click", () => {
    let parent = li.parentElement;
    let lis = parent.querySelectorAll("li");
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    li.classList.add("active");
    activeTab = index;

    showFeatureItem();
  });
});

// Feature Box
const showFeatureItem = () => {
  const featureBox = document.getElementById("feature-box");
  if (featureBox.hasChildNodes()) {
    featureBox.innerHTML = "";
    featureBox.innerHTML += `
    <div class="feature-img">
        <img
            src="${featureMenu[activeTab].img}"
            alt="feature-image"
        />
    </div>
    <div class="feature-text">
        <h1> ${featureMenu[activeTab].title}</h1>
        <p>
            ${featureMenu[activeTab].text}
        </p>
        <button class="btn">More Info</button>
    </div>
    `;
  } else {
    featureBox.innerHTML += `
    <div class="feature-img">
        <img
            src="${featureMenu[activeTab].img}"
            alt="feature-image"
        />
    </div>
    <div class="feature-text">
        <h1> ${featureMenu[activeTab].title}</h1>
        <p>
            ${featureMenu[activeTab].text}
        </p>
        <button class="btn">More Info</button>
    </div>
    `;
  }
};
showFeatureItem();

// FAQ Javascript
const faqContainer = document.getElementById("faq-container");
const faqItems = [
  {
    title: "What is Bookmark?",
    content: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aspernatur amet labore ut fugiat vel? Ut, eos facilis voluptates
        modi enim eveniet voluptate corporis, accusamus pariatur
        dignissimos non ullam. Officiis, dolorum.`,
  },
  {
    title: "How can I request a new browser?",
    content: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aspernatur amet labore ut fugiat vel? Ut, eos facilis voluptates
        modi enim eveniet voluptate corporis, accusamus pariatur
        dignissimos non ullam. Officiis, dolorum.`,
  },
  {
    title: "Is there a mobile app?",
    content: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aspernatur amet labore ut fugiat vel? Ut, eos facilis voluptates
        modi enim eveniet voluptate corporis, accusamus pariatur
        dignissimos non ullam. Officiis, dolorum.`,
  },
  {
    title: "What about other Chromium browsers?",
    content: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aspernatur amet labore ut fugiat vel? Ut, eos facilis voluptates
        modi enim eveniet voluptate corporis, accusamus pariatur
        dignissimos non ullam. Officiis, dolorum.`,
  },
];
let selectedFaq;
const showFaq = () => {
  faqItems.forEach((item) => {
    faqContainer.innerHTML += `
        <div class="faq-items">
            <div class="faq-content">
            <div>
                <h1> ${item.title} </h1>
            </div>
            <div>
                <span class="chevron bottom"></span>
            </div>
            </div>
    
            <div class="faq-text">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur amet labore ut fugiat vel? Ut, eos facilis voluptates
                    modi enim eveniet voluptate corporis, accusamus pariatur
                    dignissimos non ullam. Officiis, dolorum.
                </p>
            </div> 
        </div>
        `;
    openFaq();
  });
};

const openFaq = () => {
  const cheaverons = document.querySelectorAll(".chevron");
  cheaverons.forEach((chaveron) => {
    chaveron.addEventListener("click", () => {
      let parent = chaveron.parentNode.parentNode.parentElement;
      let faqTextContiner = parent.querySelector(".faq-text");
      faqTextContiner.classList.toggle("active");
    });
  });
};

showFaq();

// Hamburger Menu

const hamburgerMenuFunc = () => {
  const body = document.querySelector("body");
  const hamburgetMenu = document.querySelector("#hamburger");
  const closeMenuHeader = document.querySelector("#menu-close-div");
  const menuContainer = document.querySelector("#menu-container");
  const closeBtn = document.querySelector("#close-menu-btn");

  hamburgetMenu.addEventListener("click", () => {
    menuContainer.classList.add("active");
    closeMenuHeader.classList.add("active");
    body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    menuContainer.classList.remove("active");
    closeMenuHeader.classList.remove("active");
    body.style.overflow = "visible";
  });
};

hamburgerMenuFunc();
