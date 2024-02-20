/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
var pExcuses = document.getElementById("excuses");
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = [" ate", " peed", " crushed", " broke"];
let what = [" my homework", " the keys", " the car"];
let when = [
  " before the class",
  " right on time",
  " when I finished",
  " during my lunch",
  " while I was praying"
];

// function excuses() {
// let parte1 = who[Math.floor(Math.random * who.length)];
// let parte2 = action[Math.floor(Math.random * action.length)];
// let parte3 = what[Math.floor(Math.random * what.length)];
// let parte4 = when[Math.floor(Math.random * when.length)];
// let excuse = [parte1 + parte2 + parte3 + parte4];
// return excuse;
// }
window.saludar = function() {
  console.log("hola");
};
window.excuse = function() {
  console.log("excuse");
  let parte1 = who[Math.floor(Math.random() * who.length)];
  let parte2 = action[Math.floor(Math.random() * action.length)];
  let parte3 = what[Math.floor(Math.random() * what.length)];
  let parte4 = when[Math.floor(Math.random() * when.length)];
  let excuse = parte1 + parte2 + parte3 + parte4;
  return excuse;
};
window.onload = function() {
  saludar();
  console.log(excuse());
  console.log("Hello Rigo from the console!");
};
