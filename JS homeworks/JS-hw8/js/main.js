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
    document.querySelector('.lightbox__image').setAttribute('src', event.target.dataset.original);
    document.querySelector('.lightbox__image').setAttribute('alt', event.target.alt);
    lightbox.classList.add('is-open');
    lightbox.addEventListener('click', handleBackdropClick);
    window.addEventListener('keyup', handleKeyPress);
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

}