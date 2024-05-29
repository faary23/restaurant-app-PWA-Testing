/* eslint-disable no-undef */
Feature('Unliking restaurant');

Scenario('unfavoriting one restaurant', async ({ I }) => {
  // Buka halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan judul "Favorit Restaurant" ada di halaman favorit
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  // Kembali ke halaman utama
  I.amOnPage('/');

  // Tunggu hingga elemen ".restaurant_title" muncul dan klik restoran pertama
  I.waitForElement('.card-title', 20); // Menunggu 20 detik
  I.click(locate('.card-title a').first());

  // Tunggu hingga tombol suka (like button) muncul di halaman detail restoran
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');

  // Klik tombol suka untuk membatalkan menyukai restoran
  I.click('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan judul "Favorit Restaurant" tidak muncul lagi di halaman favorit
  I.dontSee('Tidak ada restoran untuk ditampilkan', '.restaurant-item');

  // Tunggu hingga elemen ".restaurant_title" muncul dan klik restoran pertama lagi
  I.waitForElement('.card_content', 20); // Menunggu 20 detik
  I.click(locate('.restaurant-item__content a').first());

  // Tunggu hingga tombol suka (like button) muncul di halaman detail restoran
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');

  // Klik tombol suka untuk batal menyukai restoran
  I.click('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan elemen ".restaurant-title" tidak muncul di halaman favorit
  I.dontSeeElement('.restaurant-title');
});
