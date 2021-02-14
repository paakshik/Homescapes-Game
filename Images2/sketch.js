
function preload() {
  loader();
  sound1 = loadSound("Arrow Swoosh-6753-Free-Loops.com.mp3");
sound2 = loadSound("zapsplat_explosions_gas_boom_airy_designed_001_54857.mp3")
  sound3 = loadSound("zapsplat_explosion_big_powerful_internal_002_48731.mp3");
  sound4 = loadSound("zapsplat_lesuire_poker_chips_stack_quickly_on_hard_surface_003_58053.mp3");
}

function setup() {
  overall();
  
}

function draw() {
  players();
  selector();
  shooter();
  levels();
  
  //drawn the sprites.
  drawSprites();
texter();
  creator();
}