
// Li con redes sociales
let instagram = document.querySelector(".red1");
let correo = document.querySelector(".red2");
let facebook = document.querySelector(".red3");
let pinterest = document.querySelector(".red4");

// Direcciones de redes sociales
let userNameInstagram = document.querySelector(".redes_ul_li_Instagram");
let userNameMail = document.querySelector(".redes_ul_li_Mail");
let userNameFacebook = document.querySelector(".redes_ul_li_Facebook");
let userNamePinterest = document.querySelector(".redes_ul_li_Pinterest");

// EventListeners
instagram.addEventListener("click", ()=> userNameInstagram.classList.toggle("redesEventListener"));
correo.addEventListener("click", ()=> userNameMail.classList.toggle("redesEventListener"));
facebook.addEventListener("click", ()=> userNameFacebook.classList.toggle("redesEventListener"));
pinterest.addEventListener("click", ()=> userNamePinterest.classList.toggle("redesEventListener"));