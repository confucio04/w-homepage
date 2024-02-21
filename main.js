document.addEventListener('DOMContentLoaded', function(){

let menu = document.getElementById('menu');
let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');
let menuNav = document.querySelector('.w-navigation');

let overlayNav = document.querySelector('.w-overlay');

document.addEventListener('change', function(){

    menuNav.classList.toggle('open-menu');
    overlayNav.classList.toggle('menu-contanier');

    if(menu.checked){
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
       
    }else{
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    }

});



});