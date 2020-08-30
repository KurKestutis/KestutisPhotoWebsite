// When the user clicks on the button, open the modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// ------------MODAL CLOSE FUNCTIONS--------------
// Get the <span> element that close the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function () {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// ------------ MODAL GALLERY --------------
var images;

var imagesEvents = [
  'img/events/1_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/2_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/3_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/4_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/5_ren_Foto_Kestutis_Kurienius19_DofE_2018-06-21_KK_img_8069.jpg',
  'img/events/6_ren_Foto_Kestutis_Kurienius_28_DofE_2018-06-21_KK_img_8541.jpg',
  'img/events/7_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/8_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/9_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/10_ren_Foto_Kestutis_Kurienius_050_SAMSUNG-VILNIUS_2017-07-28_IMG_8380_foto_K.Kurienius.jpg',
  'img/events/11_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/12_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/13_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/14_ren_Foto_Kestutis_Kurienius_194_DofE_Lithuania_2018-10-10_IO5A6170_KK.jpg',
  'img/events/15_ren_Foto_Kestutis_Kurienius.jpg',
];

var imagesconferences = [
  'img/conferences/1_konf_Foto_Kestutis_Kurienius.jpg',
  'img/conferences/2_konf_Foto_Kestutis_Kurienius_03_DofE_2018-06-21_KK_img_7264.jpg',
  'img/conferences/3_konf_Foto_Kestutis_Kurienius_IMG_1092.1.jpg',
  'img/conferences/4_konf_Foto_Kestutis_Kurienius_ IMG_1193.jpg',
  'img/conferences/5_konf_Foto_Kestutis_Kurienius_147_Luxembourg_Delegation_In_Lithuania-2017_IMG_8773_KK.jpg',
  'img/conferences/6_konf_Foto_Kestutis_Kurienius_044_Luxembourg_Delegation_In_Lithuania-2017_IMG_7672_KK.jpg',
  'img/conferences/7_konf_Foto_Kestutis_Kurienius_057_DofE_Lithuania_2018-10-10_IO5A5339_KK+.jpg',
  'img/conferences/8_konf_Foto_Kestutis_Kurienius_047_Luxembourg_Delegation_In_Lithuania-2017_IMG_7702_KK.jpg',
  'img/conferences/9_konf_Foto_Kestutis_Kurienius_324_LPK_LT-UA__2019-11-27_MG_6338.jpg',
  'img/conferences/10_konf_Foto_Kestutis_Kurienius_310_LPK_LT-UA__2019-11-27_MG_6376.jpg',
  'img/conferences/11_konf_Foto_Kestutis_Kurienius_311_LPK_LT-UA__2019-11-27_MG_6377.jpg',
  'img/conferences/12_konf_Foto_Kestutis_Kurienius.jpg',
  'img/conferences/13_konf_Foto_Kestutis_Kurienius.jpg',
  'img/conferences/15_konf_Foto_Kestutis_Kurienius_269_LPK_LT-UA__2019-11-27_MG_6141.jpg',
  'img/conferences/16_konf_Foto_Kestutis_Kurienius_0044 SORAINEN Summer days 2017 IMG_1204.jpg',
  'img/conferences/17_konf_Foto_Kestutis_Kurienius_0059 SORAINEN Summer days 2017 IMG_1380.jpg',
  'img/conferences/18_konf_Foto_Kestutis_Kurienius_006_Luxembourg_Delegation_In_Lithuania-2017_IMG_7333_KK.jpg',
  'img/conferences/19_konf_14_sl_Foto_Kestutis_Kurienius.jpg',
];

function galleryNumber(g) {
  if (g == 1) {
    images = imagesEvents;
  } else if (g == 2) {
    images = imagesconferences;
  }
}

var numSlide = 0;

function currentSlide(n) {
  var slideShowPlace = document.getElementById('modalSlider');

  slideShowPlace.src = images[n - 1];
  numSlide = n - 1;
}

function nextModalPhoto() {
  var slideShowPlace = document.getElementById('modalSlider');
  numSlide++;
  if (numSlide >= images.length) {
    numSlide = 0;
  }
  slideShowPlace.src = images[numSlide];
}

function prevModalPhoto() {
  var slideShowPlace = document.getElementById('modalSlider');
  numSlide--;
  if (numSlide < 0) {
    numSlide = images.length - 1;
  }
  slideShowPlace.src = images[numSlide];
}
