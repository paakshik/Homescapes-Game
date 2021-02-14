//make a library of functions;

function overall(){
  //canvas created.
  cac(600);
  arrowGroup = new Group();
  //bow explained..
  abow.brock = createSprite(560, 200, 40, 40);
  images(abow.brock, abow.bow);
  scales(abow.brock, 0.2);
  roller(abow.brock,180);
  loser = createSprite(300, 300)
 images(loser,rockers);
  loser.scale = 0.4;
  loser.visible = 0;
  ballonGroup = new Group();
  you_win = createSprite(300, 300);
images(you_win,winner);
  you_win.visible = 0;
}
function players(){
  background("black")

  //enabled the controls for mouse over the bow.
  abow.brock.y = mouseY
  abow.brock.visible = gamer.brail;
  
  //function for making background a image.
  imageMode(CORNER)
  backers = maker(backer.image1, backer.x, gamer.y, 1800, 480);

  //given it a speed.
  backer.x = backer.x + 2;

  //giving background a infinite loop.
  if (backer.x > 0) {
    backer.x = -600;
  }
  
}
function selector(){
  var selectBall =floor(random(1, 4));
  
  if (World.frameCount % framer == 0) {


    if (selectBall == 1) {
    var ballon1 = createSprite(20, abow.brock.y, 40, 40);
    ballon1.visible = gamer.brail;
    ballon1.velocityX = gamer.speed;
    images(ballon1, ballonder.ballon1);
    scales(ballon1, 0.2)
    ballon1.lifetime = 60;
    if (gamer.level === 3) {
        images(ballon1, alien1)
        ballon1.scale = 0.2;
    }
      ballon1.visible = gamer.brail;
      ballonGroup.add(ballon1);
    }

    if (selectBall == 2) {
      var ballon2 = createSprite(20, abow.brock.y, 40, 40)
      ballon2.visible = gamer.brail;
      ballon2.velocityX = gamer.speed;
      ballon2.lifetime = 60;
      images(ballon2, ballonder.ballon2)
      scales(ballon2, 0.06);
      roller(ballon2,90)
      ballon2.visible = gamer.brail;
      ballonGroup.add(ballon2);
    }

    if (selectBall == 3) {
      var ballon3 = createSprite(20, abow.brock.y, 40, 40);
      ballon3.visible = gamer.brail;
      ballon3.velocityX = gamer.speed;
      ballon3.lifetime = 60;
      scales(ballon3, 0.2)
      images(ballon3, ballonder.ballon3)
      ballon3.visible = gamer.brail;
      ballonGroup.add(ballon3);
    }

    if (selectBall == 4) {
      var ballon4 = createSprite(20, abow.brock.y, 40, 40)
      ballon4.visible = gamer.brail;
      ballon4.velocityX = gamer.speed;
      scales(ballon4, 0.2);
      images(ballon4, ballonder.ballon4)
      ballon4.visible = gamer.brail;
      ballonGroup.add(ballon4);
      ballon4.lifetime = 60;
    }

  }
function sooter(){
  if (keyWentDown("space")) {
    var arrow = createSprite(480, 180, 200, 200);
    arrow.y = abow.brock.y;
    arrow.velocityX = -gamer.speed;
    arrow.scale = 0.2;
    roler(arrow,320);
    sound1.play();
    if (gamer.brail === false) {
       killer(arrow)
    }
    
    images(arrow, abow.arrow1)
    arrowGroup.add(arrow);
}
}
}
function shooter(){
    //mechanism for shooting the  arrow. 
  if (keyWentDown("space")) {
    sound1.play();
    var arrow = createSprite(480, 180, 200, 200);
    arrow.y = abow.brock.y;
    arrow.velocityX = -gamer.speed;
    arrow.scale = 0.2;
    arrow.lifetime = 100;
roller(arrow,320);
    
    if (gamer.brail === false) {
 killer(arrow)
    }
    images(arrow, abow.arrow1)
    arrowGroup.add(arrow);
}
  if (arrowGroup.isTouching(ballonGroup)) {
    sound3.play();
    arrowGroup.destroyEach();
    ballonGroup.destroyEach();
    gamer.score = gamer.score + 1;
    
  }
}
function levels(){
  if (gamer.score > 4) {
    gamer.score = 0;
    gamer.level = gamer.level + 1;
    gamer.speed = gamer.speed + 2;
    framer = framer - 20;
}
  if (gamer.level === 3) {
    abow.brock.addImage(brock1);
    roller(abow.brock,270)
    abow.brock.scale = 0.5;
    abow.brock.x = 500;

  }
  
  if (gamer.level === 5) {
    abow.brock.addImage(brock2);
    roller(abow.brock,540)
    abow.brock.scale = 0.2;
    abow.brock.x = 500;

  }
  
  if (gamer.level === 7) {
    abow.brock.addImage(brock3);
 roller(abow.brock,270)
    abow.brock.scale = 0.5;
    abow.brock.x = 500;
}
  
  if (gamer.level === 2) {
    gamer.brail = false;
    you_win.visible = 1;
 killer(abow.brock)
    ballonGroup.visible = 0;
    gamer.level = 0;
    gamer.score = 0;
    gamer.y = 9000000000000;
    sound4.play();
   
  }
  
}
function texter(){
    textSize(20);
  stroke("blue");
  text("Score: " + gamer.score, 500, 50);
  text("Level: " + gamer.level, 300, 50)
  
  }

function creator(){
   if (ballonGroup.isTouching(abow.brock)) {
killer(abow.brock)
   sound2.play();
     ballonGroup.visible = 0;
    gamer.level = 0;
    gamer.score = 0;
    gamer.y = 9000000000000;
    gamer.brail = false;
    loser.visible = 1;
}
}

