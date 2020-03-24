"use strict"

import
galleryItems
from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.js-lightbox');
const closeModalBnt = document.querySelector('.lightbox__button');


//create gallery
let galleryString = '';
galleryItems.forEach((item) => {
    galleryString += `<li class = "gallery__item"><img class = "gallery__image" src="${item.preview}" data-original = "${item.original}" alt="${item.description}"></li>`;
})
gallery.insertAdjacentHTML('beforeend', galleryString)

//gallery listener
gallery.addEventListener('click', hendleClick);
closeModalBnt.addEventListener('click', handleCloseModal);

function hendleClick(event) {
    if (event.target === event.currentTarget) return;

    event.target.parentNode.classList.add('js_active');
    isActive();
}

function handleCloseModal() {
    lightbox.classList.remove('is-open');
    document.querySelector('.lightbox__image').setAttribute('src', '');
    document.querySelector('.lightbox__image').setAttribute('alt', '');
    lightbox.removeEventListener('click', handleBackdropClick);
    window.removeEventListener('keyup', handleKeyPress);
};

function handleBackdropClick(event) {
    if (event.target !== document.querySelector('.lightbox__image')) handleCloseModal();
};

function handleKeyPress(event) {
    if (event.code === 'Escape') handleCloseModal();
    if (event.code === 'ArrowLeft') setActiveItem(true);
    if (event.code === 'ArrowRight') setActiveItem(false);
}

function isActive() {
    const active = document.querySelector('.js_active img');

    document.querySelector('.lightbox__image').setAttribute('src', active.dataset.original);
    document.querySelector('.lightbox__image').setAttribute('alt', active.alt);
    lightbox.classList.add('is-open');
    lightbox.addEventListener('click', handleBackdropClick);
    window.addEventListener('keyup', handleKeyPress);
}

function setActiveItem(isleft) {
    const active = document.querySelector('.js_active');

    if (isleft && active.previousElementSibling) {
        active.previousElementSibling.classList.add('js_active');
        active.classList.remove('js_active');
    }

    if (!isleft && active.nextElementSibling) {
        active.nextElementSibling.classList.add('js_active');
        active.classList.remove('js_active');
    }

    isActive();
}