const mediaQuery = window.matchMedia('(min-width: 500px)')

let shareBtn = document.querySelectorAll(".btn");
let shareDisplay = document.querySelector(".card-socials-container");
let cardAuthor = document.querySelector(".card-author");
let showSocials = false;

function toggleSocials(){
  let showSocials = false;
  if(!showSocials){
    shareDisplay.classList.remove("hidden");
    cardAuthor.classList.add("hidden");

    showSocials = true;
  }else{
    shareDisplay.classList.add("hidden");
    cardAuthor.classList.remove("hidden");

    showSocials = false;
  }
}

if(mediaQuery.matches){
  
}else{
  shareBtn.forEach(function(item){
    item.addEventListener("click",function(event){
      event.preventDefault();
    if(!showSocials){
      shareDisplay.classList.remove("hidden");
      cardAuthor.classList.add("hidden");
  
      showSocials = true;
    }else{
      shareDisplay.classList.add("hidden");
      cardAuthor.classList.remove("hidden");
  
      showSocials = false;
    }
    });
  });
}


// hide last child
//cardAuthor.lastElementChild.classList.add("hidden");