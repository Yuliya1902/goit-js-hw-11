// import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import { handleResponse } from "./js/render-functions";

const form = document.querySelector('#form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
  widthRatio: 0.9,
  scaleImageToRatio: true,
};

loader.style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const userInput = document.getElementById('search').value.trim();

    if (!userInput) {
      return;
    }

    loader.style.display = 'inline-block';
    gallery.innerHTML = '';

    
    fetchImages(userInput)
      .then(data => handleResponse(data, gallery, options, form))
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        loader.style.display = 'none';
      });
  });


});