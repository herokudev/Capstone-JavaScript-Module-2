import Modal from './status.js';

export default class UI {
  static async #privateGetShows() {
    const response = await fetch('https://api.tvmaze.com/shows');
    const data = await response.json();
    return data;
  }
  static async getPopularShows(weight) {
    const allShows = await UI.#privateGetShows();
    const popularShows = await allShows.filter((show) => show.weight < weight);
    return popularShows;
  }
  static imageListener() {
    const images = document.querySelectorAll('.show-image');
    if (images) {
        images.forEach((image) => {
            image.addEventListener('click', () => {
                Modal.displayModal(image.dataset.showId);
            });
        });
    }
  }
  static commentsListener() {
    const comments = document.querySelectorAll('.comments-btn');
    if (comments) {
      comments.forEach((button) => {
        button.addEventListener('click', () => {
          Modal.displayModal(button.dataset.showId);
        });
      });
    }
  }

  static reservationListener() {
    const reservations = document.querySelectorAll('.reservation-btn');
    if (reservations) {
      reservations.forEach((button) => {
        button.addEventListener('click', () => {
          Modal.displayModal(button.dataset.showId);
        });
      });
    }
  }
  
  static async displayShows() {
      const showCardHolder = document.querySelector('#show-card-holder');
      showCardHolder.innerHTML = '';
      const data = await UI.getPopularShows(10);
      data.forEach((show) => {
          showCardHolder.innerHTML += `<div class="col">
        <div class="show-card mt-3 mx-auto">
          <div class="show-image-holder">
            <img src=${show.image.medium} class="show-image" data-show-id=${show.id} >
          </div>
          <div class="d-flex flex-column p-2">
            <div class="mb-3">
              <h3 class="show-title">${show.name}</h3>
              <h4 class="show-title">${show.genres}</h4>
              <h4 class="show-title">Rating: ${show.rating.average}</h4>
              <h4 class="show-title">${show.status}</h4>
              <span></span>
            </div>
            <div class="mb-3 mx-auto">
              <button class="comments-btn mx-auto p-2 button" data-show-id=${show.id} >Comments</button>
            </div>
            <div class="mb-3 mx-auto">
              <button class="reservation-btn mx-auto p-2 button" data-show-id=${show.id} >Reservation</button>
            </div>
          </div>
        </div>
      </div>`;
      });
      UI.imageListener();
      UI.commentsListener();
      UI.reservationListener();
  }
}