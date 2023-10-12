const log_btn=document.querySelector('#reg_b5');
const log_page=document.querySelector('.loging');
const main_page=document.querySelector('.main_page');
const header=document.querySelector('.head');
const btn=document.querySelector('#log_pge_btn');
const packages=document.querySelector('.packages');
const description=document.querySelector('.discription');
const gallery=document.querySelector('.gallery');
const close=document.querySelector('.icon-close');
const home=document.querySelector('#reg_b1');

log_btn.addEventListener('click',()=>{
    log_page.style.display="block"
    main_page.style.display="none"
    packages.style.display="none"
    // description.style.display="none"
    // gallery.style.display="none"
    // header.style.display="none"
})
close.addEventListener('click',()=>{
    log_page.style.display="none"
    main_page.style.display="block"
    // description.style.display="block"
    // gallery.style.display="block"
    // header.style.display="none"
})
btn.addEventListener('click',()=>{
    packages.style.display="block"
    log_page.style.display="none"
    description.style.display="none"
    gallery.style.display="none"
    // header.style.display="none"
})
home.addEventListener('click',()=>{

    packages.style.display="none"
    log_page.style.display="none"
    description.style.display="block"
    gallery.style.display="block"
    main_page.style.display="block"

    // header.style.display="none"
})