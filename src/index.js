import './style.css';
import landingPage from './landing-page.js';
import menuPage from './menu.js';
import aboutPage from './about.js';

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const home = document.getElementById('home');
    const menu = document.querySelector('.menuButton');
    const about = document.getElementById('about');

    // initial load
    landingPage(content)
    home.classList.add('active-page')
    content.className = ''


    home.addEventListener('click', function () {
        content.innerHTML = ''; // empty content div
        content.className = ''
        landingPage(content)
        home.classList.add('active-page')
        menu.classList.remove('active-page')
        about.classList.remove('active-page')
    })

    menu.addEventListener('click', function () {
        content.innerHTML = '';
        content.className = 'menuContent'
        menuPage(content)
        menu.classList.add('active-page')
        home.classList.remove('active-page')
        about.classList.remove('active-page')
    })

    about.addEventListener('click', function () {
        content.innerHTML = '';
        content.className = 'aboutContent'
        aboutPage(content)
        about.classList.add('active-page')
        home.classList.remove('active-page')
        menu.classList.remove('active-page')
    })
})