import RestoDbSource from '../../data/restodb-source';
import { createHomePageTemplate } from '../templates/template-creator';

const Home = {
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
        <h2 class="list-title">Restaurant List</h2>
        <div class="restaurant-container">
        <section class="list-resto" id="listResto"></section>
        </div>
    </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestoDbSource.homePage();
    const listRestoContainer = document.querySelector('#listResto');
    restaurants.forEach((restaurant) => {
      listRestoContainer.innerHTML += createHomePageTemplate(restaurant);
    });
  },
};

export default Home;
