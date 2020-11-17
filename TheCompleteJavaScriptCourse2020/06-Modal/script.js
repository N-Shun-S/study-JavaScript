'use strict';

//button押下
//modal window 表示

const elBtn = document.querySelectorAll('.show-modal');
const elCloseBtn = document.querySelector('.close-modal');
const elModal = document.querySelector('.modal');
const elOverlay = document.querySelector('.overlay');

//showmodalボタン押下
elBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    elModal.classList.toggle('hidden');
  });
});

//✖️ボタン押下
elCloseBtn.addEventListener('click', function () {
  elModal.classList.toggle('hidden');
});
