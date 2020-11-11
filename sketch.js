var backgroundIMG;
var gameState = 0;
var playerCount, database;
var form, player, game;

function setup(){
  database = firebase.database();
 
  createCanvas(400,400);
game = new Game();
game.getState();
game.start();
 
}

function draw(){
  background("white");
  
    
}

