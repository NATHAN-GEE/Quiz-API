//QUIZ GAME API
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&encode=url3986";
let question1 = document.querySelector("#questions");
let score = document.querySelector(".score");
let gameover = document.querySelector(".game");
let show = document.querySelector("h2");
//console.log(score1)
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

fetch(URL).then(function (response) {
  return response.json().then(function (json) {
    quiz(json.results);
  });
});

const quiz = function (e) {
  let score1 = 0;
  for (x in e) {
    let list2 = document.createElement("h3");
    let list = document.createElement("BUTTON");
    list.addEventListener("click", () => {
      list.innerText = "Correct!";
      list.style.backgroundColor = "green";
      score1++;
      list.style.pointerEvents = 'none'
      document.querySelector(".score").innerHTML = score1;


      if (score1 == 10) {
        gameover.style.display = "none";
        document.querySelector("body").style.background =
          "url(cool-background.png)";
      }
    });
    let questions = decodeURIComponent(e[x].question);
    let answers = decodeURIComponent(e[x].correct_answer);
    let wrong1 = e[x].incorrect_answers.values();
    list.append(answers);
    list2.append(questions);
    question1.append(list2);
    question1.append(list);
    for (y of wrong1) {
      let wrongAnswers = decodeURIComponent(y.toString());
      let oldAnswer = document.createElement("BUTTON");
      oldAnswer.addEventListener("click", () => {
        oldAnswer.innerText = "Wrong Answer!";
        oldAnswer.style.backgroundColor = "red";
        oldAnswer.style.pointerEvents = 'none'
      });
      oldAnswer.append(wrongAnswers);
      question1.append(oldAnswer);
    }
  }
};
// let gameOver = function (score2) {
//   if (score2 > 1) {
//     console.log("works");
//   } else {
//     console.log("doesn't work");
//   }
// };
