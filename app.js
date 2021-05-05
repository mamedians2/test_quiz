const quiz = [
  {
    question : '第一問、問題の答えは？',
    answers : [
      '誤った答え01',
      '正しい答え01',
      '誤った答え02',
      '誤った答え03',
    ],
    correnct : '正しい答え01'
  },
  {
    question :'第二問、問題の答えは？',
    answers : [
      '誤った答え04',
      '正しい答え02',
      '誤った答え05',
      '誤った答え06',
    ],
    correnct : '正しい答え02'
  },
  {
    question : '第三問、問題の答えは？',
    answers : [
      '誤った答え07',
      '正しい答え03',
      '誤った答え08',
      '誤った答え09',
    ],
    correnct : '正しい答え03'
  }
];

const q = document.getElementById('js-question');
const $btn = document.getElementsByTagName('button');
let i = 0;
let quizIndex = 0;

//問題文と、選択肢を表示
const setupQuiz = () => {
  
  q.textContent = quiz[quizIndex].question;

  while(i < $btn.length){
    $btn[i].textContent = quiz[quizIndex].answers[i];
    i++;
  }

}

setupQuiz();

const clickHandler = (e) => {

  if(quiz[quizIndex].correnct === e.target.textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解。');
  }

  quizIndex++;

  if(quizIndex < quiz.length){
    setupQuiz();
  }else {
    window.alert('回答終了！');
  }

}

//ボタンを押したら正誤判定

let btnIndex = 0;
while( btnIndex < $btn.length ){

  $btn[btnIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  btnIndex++;
  
}
