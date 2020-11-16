"use strict";

// guess my number
/*
仕様(画面作成済み)
　1〜20の間で隠された数字を予想する。
　スコア20からスタート。
　テキストボックスに予想値を入力、「Check!」ボタンを押下
-正解の場合
背景色緑
？が正解値に変わる
メッセージ「Correct Number!」に変更
スコアが今までの最高値であれば、High Scoreに表示
-不正解の場合
予想値に応じて、Too low or Too highを表示
スコアが1減る
-Againボタン押下時
テキストボックス[予想値]が空白
スコア20に
メッセージ「Start guessing...」を表示
正解値変更
*/

//正解値を設定
//0~20
//let correctNum = Math.floor(Math.random() * 21);
//1~20 jonas
//let correctNum = Math.trunc(Math.random() * 20) + 1;
//1~20 整数を得たいのでmath.floorで切り捨てる
const min = 1;
const max = 20;
let correctNum = Math.floor(Math.random() * (max + 1 - min)) + min;
let score = 20;
let highScore = 0;
//elementの取得
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const eleGuessNum = document.querySelector(".guess");
const eleScore = document.querySelector(".score");
const eleMessage = document.querySelector(".message");
const eleBody = document.body;
const eleNumber = document.querySelector(".number");
const eleHighScore = document.querySelector(".highscore");

//「Check!」ボタン押下
checkBtn.addEventListener("click", function () {
  //input fieldの値をnumber型で取得
  let guessNum = Number(eleGuessNum.value);
  let message = "";
  let isCorrected = false;
  //When there is no input
  if (!guessNum) {
    message = "⛔️No Number";
    //When guess is too high
  } else if (guessNum > correctNum) {
    if (score > 1) {
      message = "Too high!";
      score--;
    } else {
      message = "😭You lost the game";
    }
    //When guess is too low
  } else if (guessNum < correctNum) {
    if (score > 1) {
      message = "Too low!";
      score--;
    } else {
      message = "😭You lost the game";
    }
    //When player wins
  } else if (guessNum === correctNum) {
    message = "🎉Correct Number!";
    isCorrected = true;
  }

  //スコアに応じたメッセージ変更
  eleMessage.textContent = message;
  if (!isCorrected) {
    eleScore.textContent = score;
  } else {
    eleBody.style.backgroundColor = "#60b347";
    eleNumber.style.width = "30rem";
    eleNumber.textContent = correctNum;
    if (highScore < score) {
      highScore = score;
      eleHighScore.textContent = highScore;
    }
  }
});

//「Again!」ボタン押下
againBtn.addEventListener("click", function () {
  //初期値を設定
  score = 20;
  correctNum = Math.floor(Math.random() * (max + 1 - min)) + min;
  eleScore.textContent = score;
  eleNumber.textContent = "?";
  eleGuessNum.value = "";
  eleMessage.textContent = "Start guessing...";
  eleBody.style.backgroundColor = "#222";
  eleNumber.style.width = "15rem";
});
