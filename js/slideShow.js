// alert('sl_gallery working');

var slideShowImages = [
  'img/slideShow/01_sl_Vilniaus_Vartai_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/02_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/03_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/04_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/05_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/06_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/07_sl_Prince_Edward_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/08_sl_m15_Vilmantas_Rudelis_smallplanet_aerofoto_Foto_Kestutis_Kurienius_img_5900.jpg',
  'img/slideShow/09_sl_13_Austeja_Landsbergiene_KB-2017_IMG_3517_KK.jpg',
  'img/slideShow/10_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/11_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/12_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/13_sl_Foto_Kestutis_Kurienius.jpg',
  'img/slideShow/14_sl_Foto_Kestutis_Kurienius.jpg',
];

var numOfSlideShowImages = 0;
function nextSlideShowPhoto() {
  var slideShowPlace = document.getElementById('slider');
  numOfSlideShowImages++;
  if (numOfSlideShowImages >= slideShowImages.length) {
    numOfSlideShowImages = 0;
  }
  slideShowPlace.src = slideShowImages[numOfSlideShowImages];
}

window.onload = function () {
  setInterval(move, 2500);
  function move() {
    nextSlideShowPhoto();
  }
};
