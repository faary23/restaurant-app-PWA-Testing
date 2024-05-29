import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantLikeTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="hero">
    <picture>
    <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
    <img src="./images/heros/hero-image_2-large.jpg" alt="Restaurant Catalog">
    </picture>
        <div class="hero-position"></div>
    </section>

    <!-- Restaurant List -->
    <section class="restaurant">
    <h2 class="list-title">Your Like Restaurant</h2>
        <div class="restaurant-container">
        <div id="restaurants" class="restaurants">
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restaurants');

    if (restaurant.length === 0) {
      restoContainer.innerHTML = `
        <div class="restaurant-item__content">
          <p class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</p>
        </div>
      `;
    } else {
      // eslint-disable-next-line no-shadow
      restaurant.forEach((restaurant) => {
        restoContainer.innerHTML += createRestaurantLikeTemplate(restaurant);
      });
    }
  },
};

export default Like;
