/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse = "Mi hermano cambia de canal solo para molestarme";

  function excuseGenerator(who, action, what, when) {
    let excuse1 = Math.floor(Math.random() * who.length);
    let excuse2 = Math.floor(Math.random() * action.length);
    let excuse3 = Math.floor(Math.random() * what.length);
    let excuse4 = Math.floor(Math.random() * when.length);
    return (
      who[excuse1] +
      " " +
      action[excuse2] +
      " " +
      what[excuse3] +
      " " +
      when[excuse4]
    );
  }
  document.getElementById("excuse").innerHTML = excuseGenerator(
    who,
    action,
    what,
    when
  );
};

document.querySelector("button").addEventListener("click", excusa);
