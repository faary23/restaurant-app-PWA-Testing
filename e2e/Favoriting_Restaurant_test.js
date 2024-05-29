/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('menampilkan restoran yang disukai kosong', ({ I }) => {
  I.seeElement('.restaurant-item__not__found');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  // Verifikasi halaman favorit kosong
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  // Pastikan elemen kartu restoran ada
  I.seeElement('.card-title a');

  // Lokasi restoran pertama dan ambil judulnya
  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Klik tautan restoran pertama untuk menuju halaman detail
  I.click(firstRestaurant);

  // Pastikan tombol suka ada dan klik
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');

  // Tambahkan waktu tunggu eksplisit
  I.wait(5); // Tunggu 5 detik untuk memastikan elemen muncul

  // Pastikan elemen restoran favorit ada
  I.seeElement('.restaurant-item');

  // Ambil judul restoran favorit dan bandingkan
  const favoritedCardRestaurant = await I.grabTextFrom('.card_title');

  // Membandingkan judul restoran pertama dengan judul restoran favorit
  assert.strictEqual(firstRestaurantTitle, favoritedCardRestaurant);
});
