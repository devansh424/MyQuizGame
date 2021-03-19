var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var database;
var allContestants;
var question, contestant, quiz;


function setup(){
  canvas = createCanvas(800,400);
  background("pink");
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
