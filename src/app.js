/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excusa1 = Math.floor(Math.random() * who.length);
  let excusa2 = Math.floor(Math.random() * action.length);
  let excusa3 = Math.floor(Math.random() * what.length);
  let excusa4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excusa").innerHTML =
    who[excusa1] + action[excusa2] + what[excusa3] + when[excusa4];
};
