import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurants) => `
  <h2 class="resto__name">${restaurants.name}</h2>
  <picture>
    <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
    <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" crossorigin="anonymous" />
  </picture>
  <div class="resto__info">
      <h3>Information</h3>
      <h4>Alamat</h4>
      <p>${restaurants.address}</p>
      <h4>Kota</h4>
      <p>${restaurants.city}</p>
      <h4>Deskripsi</h4>
      <p>${restaurants.description}</p>
      <h4>Makanan:</h4>
      <ul>
        ${restaurants.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
      <h4>Minuman:</h4>
      <ul>
        ${restaurants.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
      <h4>Customer Reviews:</h4>
      ${restaurants.customerReviews.map((review) => `
        <div class="review">
          <p><strong>${review.name}</strong></p>
          <p>${review.review}</p>
          <p><em>${review.date}</em></p>
        </div>
      `).join('')}
  </div>
`;

const createHomePageTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="card">
      <picture>
        <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
        <img class="lazyload resto-img" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" crossorigin="anonymous" />
      </picture>
      <div class="card-title">
        <h3 class="resto__title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
        <p>⭐️${restaurants.rating}</p>
      </div>
      <div class="card-body">
        <p>${restaurants.description}</p>
      </div>
    </div>
  </div>
`;

const createRestaurantLikeTemplate = (restaurants) => `
<center><h1>Favorit Restaurant</h1></center>
<div class="restaurant-item">
  <div class="card">
    <div class="card_content">
      <div class="image-container">
        <picture>
          <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
          <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" width="200" height="auto" crossorigin="anonymous" />
        </picture>
      </div>
      <h4 class="card_rate">⭐ ${restaurants.rating}</h4>
      <h2 class="card_title">${restaurants.name}</h2>
      <div class="restaurant-item__content">
        <a href="/#/detail/${restaurants.id}" class="button-detail">Detail</a> 
      </div>
    </div>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createHomePageTemplate,
  createRestoDetailTemplate,
  createRestaurantLikeTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
