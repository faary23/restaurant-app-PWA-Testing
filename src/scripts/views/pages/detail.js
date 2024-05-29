import RestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
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
        <h2 class="list-title">Detail Page</h2>
        <div class="restaurant-container">
        <section class="list-resto" id="listResto"></section>
        <div id="likeButtonContainer"></div>
        </div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDbSource.detailResto(url.id);
    const restoDetailContainer = document.querySelector('#listResto');
    restoDetailContainer.innerHTML = createRestoDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
