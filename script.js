const mediaQuery = window.matchMedia("(min-width: 500px)");

let shareBtn = document.querySelectorAll(".btn");
let shareDisplay = document.querySelector(".card-socials-container");
let cardAuthor = document.querySelector(".card-author");
let shareBtnInside = document.querySelector(".card-socials-share");
let authorShareBtn = document.querySelector(".card-author-share");
let diamond = document.querySelector(".card-socials-diamond");
// let showSocialsDesktop = false;
// let showSocialsMobile = false;

function toggleSocialsMobile() {
  shareDisplay.classList.toggle("hidden");
  cardAuthor.classList.toggle("hidden");
}

function toggleSocialsDesktop() {
  shareDisplay.classList.toggle("hidden");
  shareBtnInside.classList.toggle("hidden");
  authorShareBtn.classList.toggle("dark");
  diamond.classList.toggle("hidden");
}

// function toggleSocialsMobile(){
//   shareDisplay.classList.add("hidden");
//   cardAuthor.classList.remove("hidden");
//   shareBtnInside.classList.remove("hidden");
//   if(!showSocialsMobile){
//     shareDisplay.classList.remove("hidden");
//     cardAuthor.classList.add("hidden");

//     showSocialsMobile = true;
//   }else{
//     shareDisplay.classList.add("hidden");
//     cardAuthor.classList.remove("hidden");

//     showSocialsMobile = false;
//   }
// }

// function toggleSocialsDesktop(){
//   shareDisplay.classList.add("hidden");
//   shareBtnInside.classList.remove("hidden");
//   cardAuthor.classList.remove("hidden");
//   if (!showSocialsDesktop) {
//     shareDisplay.classList.remove("hidden");
//     shareBtnInside.classList.add("hidden");

//     showSocialsDesktop = true;
//   } else {
//     shareDisplay.classList.add("hidden");
//     shareBtnInside.classList.remove("hidden");

//     showSocialsDesktop = false;
//   }
// }

function handleChange(e) {
  if (e.matches) {
    if(cardAuthor.classList.contains("hidden")){
      cardAuthor.classList.remove("hidden");
      shareBtnInside.classList.add("hidden");
      authorShareBtn.classList.add("dark");
    }
    shareBtn.forEach(function (item) {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        toggleSocialsDesktop();
      });
    });
  } else {
    if(shareBtnInside.classList.contains("hidden")){
      shareBtnInside.classList.toggle("hidden");
      cardAuthor.classList.toggle("hidden");
      authorShareBtn.classList.remove("dark");
    }
    shareBtn.forEach(function (item) {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        toggleSocialsMobile();
      });
    });
  }
}

handleChange(mediaQuery);
mediaQuery.addEventListener("change", handleChange);

// hide last child
//cardAuthor.lastElementChild.classList.add("hidden");
