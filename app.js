const quiz = [
  {
    question : 'BLACKPINKのデビュー日は？',
    answers : [
      '8月8日',
      '8月16日',
      '9月9日',
      '7月7日',
    ],
    correnct : '8月8日'
  },
  {
    question :'BLACKPINKが日本初のLIVEをおこなった場所は？',
    answers : [
      '東京ドーム',
      '京セラドーム',
      '日本武道館',
      '名古屋ドーム',
    ],
    correnct : '日本武道館'
  },
  {
    question : 'BLACKPINKのファンの事を何と呼ぶ？',
    answers : [
      'BLACKPINK\'s fan',
      'BLINK',
      'BP family',
      'Lovesick Girls',
    ],
    correnct : 'BLINK'
  }
];

const q = document.getElementById('js-question');
const $btn = document.getElementsByTagName('button');
let quizIndex = 0;
let score = 0;

//問題文と、選択肢を表示
const setupQuiz = () => {
  
  q.textContent = quiz[quizIndex].question;
  let i = 0;
  while(i < $btn.length){
    $btn[i].textContent = quiz[quizIndex].answers[i];
    i++;
  }
}

setupQuiz();

//正誤判定の関数
// 回答したら得点
//全問回答したら終了アラート
const clickHandler = (e) => {

  if(quiz[quizIndex].correnct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else {
    window.alert('不正解。');
  }

  quizIndex++;

  if(quizIndex < quiz.length){
    setupQuiz();
  }else {
    window.alert('回答終了！' + score + '\/' + quiz.length + '問正解しました！');
  }
}

// ボタンを押したら上記の関数を走らせる
let btnIndex = 0;
while( btnIndex < $btn.length ){

  $btn[btnIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  btnIndex++;
  
}
