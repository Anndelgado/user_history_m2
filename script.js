
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

const links = document.querySelectorAll(".nav a");

links.forEach(link=>{
  link.addEventListener("click",()=>{
    links.forEach(l=>l.classList.remove("active"));
    link.classList.add("active");
  });
});

/*Para el menu, para que se ajuste al responsive mostrando un icono de tres rayitas horizontales*/

const menu_ = document.getElementById("menu_");
const navLinks = document.getElementById("navLinks");

menu_.addEventListener("click", () => {
  menu_.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menu_.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

const date = new Date()
document.getElementById("year").innerText = date.getFullYear()