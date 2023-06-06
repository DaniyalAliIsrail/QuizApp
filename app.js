var questions = [
  {
    num: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Multiple Language",
      "Hyper Text Preprocessor",
      "Hyper Tool Multi Language",
      "Hyper Text Markup Language",
    ],
  },
  {
    num: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Computer Style Sheet",
      "Cascading Style Sheet",
      "Colorful Style Sheet",
      "Common Style Sheet",
    ],
  },
  {
    num: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hometext Preprocessor",
      "Hypertext Preprogramming",
    ],
  },

  {
    num: 4,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXTra Multi-Program Language",
      "eXecutable Multiple Language",
      "eXtensible Markup Language",
      "eXamine Multiple Language",
    ],
  },
  {
    num: 5,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Statement Question Language",
      "Stylesheet Query Language",
      "Stylish Question Language",
      "Structured Query Language",
    ],
  },
];
//form
const submit_btn =document.querySelector(".submit-btn")
const form_btn =document.querySelector(".form")
// const form_wrapper =document.querySelector(".form-wrapper")
//start quiz
const start_quiz = document.querySelector(".start-quiz");
const quiz_box = document.querySelector(".quiz-box");
const que_text = quiz_box.querySelector(".que-text");
const option_box = quiz_box.querySelector(".options");
const next_btn = document.querySelector(".next-btn");
const total_que = document.querySelector(".total_que");
const count_que = document.querySelector(".count_que");
//result
const result_box = document.querySelector(".result-box");
const total_que_r = document.querySelector(".total-que span");
const right_ans_r = document.querySelector(".right-ans span");
const wrong_ans_r = document.querySelector(".wrong-ans span");
const percentage = document.querySelector(".percentage span");
const pass_fail =document.querySelector(".pass-fail span")

function formHandler(){
  var formWrapper = document.querySelector(".formWrapper")
  var inputFields = document.querySelectorAll("input")
  for(var input of inputFields){
    if(!input.value){
      alert("Enter Required field")
      return
    }
  }
}

submit_btn.onclick =()=>{
  form_btn.classList.add("inactive")
  start_quiz.classList.remove("inactive")
}
//jesy show quiz k btn pr click ho to quiz wala ui display hojae or wo start quix wala `
start_quiz.onclick = () => {
  quiz_box.classList.remove("inactive");
  start_quiz.classList.add("inactive");
};
total_que.innerText = questions.length;
total_que_r.innerText = questions.length;
var que_index = 0;
count_que.innerText = que_index + 1;
var que_index=0;
var right_answer=0;
var wrong_answer=0;


//show question
showQuestion(que_index);
function showQuestion(q_index) {
  que_text.innerText =
    questions[que_index].num + ". " + questions[q_index].question;
  //ye line option_statement += `<div class="option">${questions[q_index].options[i]}</div>`; smjh nhy arhay hay
  var option_statement = "";
  for (let i = 0; i < questions[0].options.length; i++) {
    option_statement += `<div class="option">${questions[q_index].options[i]}</div>`;
  }
  option_box.innerHTML = option_statement;
  var allOption = option_box.querySelectorAll(".option");
  // console.log(allOption[0]);
  for (let j = 0; j < allOption.length; j++) {
    allOption[j].setAttribute("onclick", "userAnswer(this)");
  }
  // jb dubra question aya to class phr add hogye inactive k
  next_btn.classList.add("inactive");
  console.log(next_btn);
}
// next-button
next_btn.onclick = () => {
  que_index++;
  if (questions.length > que_index) {
    count_que.innerText = que_index + 1; // 1 of 5 question is logic say increase ho raha hay
    showQuestion(que_index);
  } else {
    console.log("complet question");
    quiz_box.classList.add("inactive");
    result_box.classList.remove("inactive");
    right_ans_r.innerText= right_answer;
    wrong_ans_r.innerText= wrong_answer;
    percentage.innerText=((right_answer*100)/questions.length).toFixed(2)+"%";
    if(((right_answer*100)/questions.length).toFixed(2) > 50){
      pass_fail.innerText="pass";
    }else{
      pass_fail.innerText="fail"
    }
    
 

  }
  if (questions.length - 1 == que_index) {
    next_btn.innerText = "finish";
  }
};
//answer section glt hay sahy
function userAnswer(answer) {
  let userAns = answer.innerHTML;
  let correctAns = questions[que_index].answer;
  var allOption2 = option_box.querySelectorAll(".option");
  next_btn.classList.remove("inactive");
  //  agr answer correct to green color show krdo
  if (userAns == correctAns) {
    console.log("write Answer");
    answer.classList.add("correct");
    right_answer++;
  }
  // agr answer incorrect red show krdo
  else {
    console.log("wrong ans");
    answer.classList.add("incorrect");
    wrong_answer++;
    // ye loop use keya hay kay sara option ajae mery pas nad jesy koe glt option pr kay ckick ye wright ans show krdo
    for (let j = 0; j < allOption2.length; j++) {
      if (allOption2[j].innerText == correctAns) {
        allOption2[j].classList.add("correct");
      }
    }
  }
  // jesy hey ksy option click keya may nay ab wo select hogya ab baqy kesy option ko may selct nhy kr sta hu kya kay may loop kay zarye sb ko disable l class dede
  for (let j = 0; j < allOption2.length; j++) {
    allOption2[j].classList.add("disabled");
  }
}
