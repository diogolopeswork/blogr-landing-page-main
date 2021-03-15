const menuMobile = document.querySelector('.menu-mobile');
const hamburguer = document.querySelector('.hamburguer');
const dropItems = document.querySelectorAll(".drop-item-mobile");
const arrows = document.querySelectorAll(".arrow-mobile");

const openMenu = () =>{
    menuMobile.classList.toggle('open');
}

dropItems.forEach((item, index) => {
  item.addEventListener("click", function(){
    arrows[index].classList.toggle('arrow-mobile-turned');
    item.childNodes[3].classList.toggle('drop-menu-open');
  }, false);
});

