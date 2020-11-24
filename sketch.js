// canvas variable
var canvas;
// background variable and its image
var bg;
var bgImg;
// player variable and its image 
var player;
var playerImg;
// Enemy tanks variable and its images
var t1Img , t2Img , t3Img , t4Img , t5Img , t6Img ;
var enemy;
var enemies;
// Score Image  and sprite variable
var score1;
var score2;
var scoreImg;
// Bullet variable and its Image and its sound
var bullet;
var bulletsg;
var bulletImg;
// sound for explosion of enemy tank
var boomSound;

// Score variable for counting of score that player will earns
var scoreCount = 0;

// Function for loading Images and Sounds
function preload(){
// background Image
bgImg = loadImage("Images/grass.png");
// player Tank Image
playerImg = loadImage("Images/player.png");
// Enemy Tank Image
t1Img = loadImage("Images/t1.png");
t2Img = loadImage("Images/t2.png");
t3Img = loadImage("Images/t3.png");
t4Img = loadImage("Images/t4.png");
t5Img = loadImage("Images/t5.png");
t6Img = loadImage("Images/t6.png");
// Bullet Image
bulletImg = loadImage("Images/bullet.png");
// Shooting Sound
ShootSound = loadSound("Sounds/shoot.mp3");
// Sound of explosion 
boomSound = loadSound("Sounds/explo.mp3");
// Game Over Image
gameOverImg = loadImage("Images/gameOver.png");
// Restart Button Image
resetButtonImg = loadImage("Images/restart.png");
// Score Count Image
scoreImg = loadImage("Images/score.png");

}

// Function for creating Sprites
function setup() {
  // Canvas Size
 canvas =  createCanvas(displayWidth-20,displayHeight-30);
// Player Tank Sprite 
 player = createSprite(displayWidth/2,650,20,20);
 // Add Player Image to the Sprite 
 player.addImage(playerImg);
 // Player size
player.scale = 0.5;
// Group for making multiple Ememies 
enemies = new Group();
// Group for making multiple Bullets
bulletsg = new Group();

score1 = createSprite(80,50, 20,20);
score1.addImage(scoreImg);
score1.scale = 0.5;

score2 = createSprite(80,700, 20,20);
score2.addImage(scoreImg);
score2.scale = 0.5;
//console.log()
}

// Function for making them work and display 
function draw() {
  // Backgroud image fixed to the canvas
  image(bgImg,0,-displayHeight*4,displayWidth,displayHeight*5);

 // Give the player Tank to controlit on X - Axis only
player.x=World.mouseX;

// Bullets will create when space key is pressed 
if(keyWentDown(32)){
// Sound to be played 
ShootSound.play();
  // function name made for bullet
createBullet();
}
// created enemies 
enemies1();

if(bulletsg.isTouching(enemies)){
  enemies.destroyEach();
   bulletsg.destroyEach();
   boomSound.play();
scoreCount = scoreCount + 1;
 }

 if (enemies.y > 600){
  scoreCount = scoreCount - 1;
}
  drawSprites();
  fill("white");
  text(scoreCount,75,75);

  text(scoreCount,75,730);

  textSize(24);
  text(".... Press space to shoot the Enemy Tanks ....",displayWidth/2,700);
}

function createBullet() {
 
 bullet = createSprite(200,600,20,20);
 bullet.addImage(bulletImg);
 bullet.scale = 0.2;
  
   bullet.y = 600;
   bullet.x = player.x;
   bullet.velocityY = -10;
 
   bullet.lifetime = 120;
   bulletsg.add(bullet);
   }
  
  function enemies1(){
  if(World.frameCount%60===0){
 enemy = createSprite(random(20,1300),0,10,10);
 enemy.scale = 0.5;
 enemy.velocityY = (9+3*scoreCount/10);

   enemy.lifetime = 100;
  var rand = Math.round(random(1,6));
   enemy.velocityY = rand;     

  switch(rand){
    case 1 : enemy.addImage(t1Img);
    break;
    case 2 : enemy.addImage(t2Img);
    break;
    case 3 : enemy.addImage(t3Img);
    break;
    case 4 : enemy.addImage(t4Img);
    break;
    case 5 : enemy.addImage(t5Img);
    break;
    case 6 : enemy.addImage(t6Img);
    break;
  }
   enemy.lifetime = 300;
  enemies.add(enemy);
  
  }  
    }
 