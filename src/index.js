import './style.css';
import landingPage from './landing-page.js';
import menuPage from './menu.js';
import aboutPage from './about.js';

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const about = document.getElementById('about');

    // initial load
    landingPage(content)
    home.classList.add('active-page')


    home.addEventListener('click', function () {
        content.innerHTML = ''; // empty content div
        landingPage(content)
        home.classList.add('active-page')
        menu.classList.remove('active-page')
        about.classList.remove('active-page')
    })

    menu.addEventListener('click', function () {
        content.innerHTML = '';
        menuPage(content)
        menu.classList.add('active-page')
        home.classList.remove('active-page')
        about.classList.remove('active-page')
    })

    about.addEventListener('click', function () {
        content.innerHTML = '';
        aboutPage(content)
        about.classList.add('active-page')
        home.classList.remove('active-page')
        menu.classList.remove('active-page')
    })
})