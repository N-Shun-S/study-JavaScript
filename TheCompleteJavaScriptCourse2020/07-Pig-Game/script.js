'use strict';

//Elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

//player
const player = [
  {
    id: 0,
    state: 'active',
    currentScore: 0,
    totalScore: 0,
    elPlayer: document.querySelector('.player--0'),
    elCurrent: document.querySelector('#current--0'),
    elTotalScore: document.querySelector('#score--0'),
  },
  {
    id: 1,
    state: 'non-active',
    currentScore: 0,
    totalScore: 0,
    elPlayer: document.querySelector('.player--1'),
    elCurrent: document.querySelector('#current--1'),
    elTotalScore: document.querySelector('#score--1'),
  },
];

//「CURRENT点数」を0
//「アクティブプレイヤー」の変更
//「PLAYERS背景」を変更
const switchPlayer = function () {
  if (player[0].state === 'active') {
    player[0].state = 'non-active';
    player[1].state = 'active';
    player[0].currentScore = 0;
    player[0].elCurrent.textContent = player[id].currentScore;
  } else {
    player[1].state = 'non-active';
    player[0].state = 'active';
    player[1].currentScore = 0;
    player[1].elCurrent.textContent = player[id].currentScore;
  }
  player[0].elPlayer.classList.toggle('player--active');
  player[1].elPlayer.classList.toggle('player--active');
};

let id;
//「ROLL DICE」ボタン押下
btnRoll.addEventListener('click', function () {
  //アクティブプレーヤーの特定
  id = player[0].state === 'active' ? 0 : 1;

  //ランダム値の生成
  const minDice = 1;
  const maxDice = 6;
  let randomDice =
    Math.floor(Math.random() * (maxDice + 1 - minDice)) + minDice;
  //「サイコロ目」変更
  dice.src = `dice-${randomDice}.png`;
  //「サイコロ目」が1の場合
  if (randomDice === 1) {
    switchPlayer();
  } else {
    //「サイコロ目」を「CURRENT点数」に加算
    player[id].currentScore += randomDice;
    player[id].elCurrent.textContent = player[id].currentScore;
  }
});

//「HOLD」ボタン押下
btnHold.addEventListener('click', function () {
  //アクティブプレーヤーの特定
  id = player[0].state === 'active' ? 0 : 1;
  //「CURRENT点数」を「PLAYERS点数」に加算
  player[id].totalScore += player[id].currentScore;
  player[id].elTotalScore.textContent = player[id].totalScore;
  //「PLAYERS点数」が100以上の場合
  if (player[id].totalScore >= 100) {
    player[id].elPlayer.classList.add('player--winner');
    //ボタン無効化
    btnHold.disabled = 'disabled';
    btnRoll.disabled = 'disabled';
  } else {
    switchPlayer();
  }
});

//「NEW GAME」ボタン押下
btnNew.addEventListener('click', function () {
  player.forEach(function (obj) {
    let id = obj.id;
    //console.log(obj.id);
    player[id].state = player[id].id === 0 ? 'active' : 'non-active';
    player[id].currentScore = 0;
    player[id].totalScore = 0;
    player[id].elCurrent.textContent = player[id].currentScore;
    player[id].elTotalScore.textContent = player[id].totalScore;
    if (player[id].state === 'active') {
      player[id].elPlayer.classList.add('player--active');
    } else {
      player[id].elPlayer.classList.remove('player--active');
    }
    if (player[id].elPlayer.classList.contains('player--winner')) {
      player[id].elPlayer.classList.remove('player--winner');
    }
  });

  //ボタン無効化解除
  btnHold.disabled = '';
  btnRoll.disabled = '';
});
