let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');


menu.onclick = () =>{
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
}