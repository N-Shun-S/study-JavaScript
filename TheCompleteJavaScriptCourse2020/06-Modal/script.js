'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//showmodalボタン押下
btnsOpenModal.forEach(function (el) {
  el.addEventListener('click', openModal);
});
//✖️ボタン押下
btnCloseModal.addEventListener('click', closeModal);

//オーバーレイ押下
overlay.addEventListener('click', closeModal);

//escキー押下
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
