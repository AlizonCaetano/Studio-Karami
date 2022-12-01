const menu = document.querySelector('span.icon-menu')
const menuOptions = document.querySelector('nav.menu-options.hide')
const aboutUs = document.querySelector('a.about-us')
const contact = document.querySelector('a.contact')
const projects = document.querySelector('a.projects')



menu.addEventListener('click', ()=>{
    menuOptions.classList.toggle('hide')
})

aboutUs.addEventListener('click', ()=>{
    menuOptions.classList.toggle('hide')
})

contact.addEventListener('click', ()=>{
    menuOptions.classList.toggle('hide')
})

projects.addEventListener('click', ()=>{
    menuOptions.classList.toggle('hide')
})