var level = 1;
var stars = 3;
let coins = 0;
let lives = 5;
let fruit_ninjaC = 0;
let a = false;
let b = false;
let c = false;
let gameStates = 'TEXT'
let status = 'TEXT'
let status2 = 'TEXT'
let status3 = 'TEXT'
let d = false;
let e = false;
let f = false;
let g = false;
let z = '';
let y = '';
let x = '';
let w = '';
let dee = ''
let v = '';
let u = '';
let t = '';
let s = '';
let q = ''
let soundFlag = 0;
let counta = 0;
var gameState = "TEXT";
var gamer = 'TEXT';
var score = 0;

var appleI, mangoI, bananaI, pineappleI;
var swordI, bomb1I, bomb2I, you_loseI;
var sword;
var score = 0;
var fruitNamer = 0;
var bombNamer = 0;
var points = 20;
var speed = 2;
var fruitKatana;
var sounds1;
var rand;

function myFunc() {
	var percent = document.getElementById('percentCount')
	var png = document.getElementById('progress-bar');


};
document.onreadystatechange = function () {
	var state = document.readyState
	if (state == 'interactive') {
		document.getElementById('contents').style.visibility = "hidden";
	} else if (state == 'complete') {
		setTimeout(function () {
			document.getElementById('interactive');
			document.getElementById('load').style.visibility = "hidden";
			document.getElementById('contents').style.visibility = "visible";
		}, 1000);
	}
}

var flag = 'menu';
var game2 = 0;
let dd = ''
let characer = '';

function preload() {
	bgI = loadImage('Images2/bg.png')
	play = loadImage('Images2/play-removebg-preview.png')
	settings = loadImage('Images2/setting.png')
	cross = loadImage('Images2/Capture-removebg-preview.png')
	music = loadImage('Images2/music.png');
	music2 = loadImage('Images2/musics.png');
	audio = loadSound('Images2/audio1.mp3');
	bgI2 = loadImage('Images2/bg2.png');
	austinI = loadImage('Images2/austin5.JPG');
	oliviaI = loadImage('Images2/aunty2.JPG');
	williamI = loadImage('Images2/auncle3.JPG');
	infoI = loadImage('Images2/info.png');
	dds = loadImage('Images2/floor.jpg')
	appleI = loadImage("ClipartKey_1288924.png");
	mangoI = loadImage("ClipartKey_721761.png");
	bananaI = loadImage("banana-clipart-transparent-background-original.png");
	pineappleI = loadImage("PinClipart.com_clip-art-pineapple_3708850.png");
	swordI = loadImage("kisspng-sword-animation-clip-art-animated-sword-cliparts-5a7625bb5c17c6.6453242415176923473772.png");
	bomb1I = loadImage("ClipartKey_141107.png");
	bomb2I = loadImage("hiclipart.com.png");
	you_loseI = loadAnimation("tenor.gif");
	sound1 = loadSound("Our-Mountain_v003.mp3");
	sound2 = loadSound("Car Explosion-SoundBible.com-1351848441.mp3");
	sound3 = loadSound("Golf Club Swing-SoundBible.com-1724786007.mp3");
	sound4 = loadSound("Metal Clang-SoundBible.com-1363525732.mp3");
	sound5 = loadSound("Hockey Puck Slap-SoundBible.com-318266142.mp3");
	fruitKatana = loadImage("fruit katana.jpg");
	backer = loadImage("fruits.jpg");
	sofa = loadImage('Images2/sofa.png');
	bgI3 = loadImage('Images2/4fdf97b03d4aca475c18305f74aec4e3.jpg')
	lamp_i = loadImage('Images2/u-g-PZNGFO0-removebg-preview.png')
	bed_i = loadImage('Images2/3b1ae9e6d49174442713e3c0e75b8a9f-removebg-preview (1).png')
	sofa_i = loadImage('Images2/Logan-Corner-Sofa-Top-View-in-Lovely-Alantic-Gold-Collection-Fabric-2-removebg-preview.png')
	statue_i = loadImage('Images2/Rf7d158606d8be19f743ec4b517d60b34-removebg-preview.png')
	dining = loadImage('Images2/d478f3d62a3d2123bbd0d5a6b8cc1dc3-removebg-preview.png')
	tv_i = loadImage('Images2/OIP-removebg-preview.png')
	cupn = loadImage('Images2/pict--wardrobe-1-furniture---vector-stencils-library.png--diagram-flowchart-example-removebg-preview.png')
	cupn2 = loadImage('Images2/pict--wardrobe-1-furniture---vector-stencils-library.png--diagram-flowchart-example-removebg-preview - Copy.png')
	table_i = loadImage('Images2/OIP__1_-removebg-preview.png')
	wall_i = loadImage('Images2/FENCE-WC-4X5-v3-removebg-preview.png')
	wall2_i = loadImage('Images2/ONE_LINER_RECESSED_W_002-removebg-preview.png')
	bgI4 = loadImage('Images2/Image.png');
	bgI5 = loadImage('Images2/imagess.jpg');
	sofa_j = loadImage('Images2/cartoon-couch-pillow-pink-sofa-cushion-clipart-vector-142708412-removebg-preview.png')
	digning_table_j = loadImage('Images2/images-removebg-preview.png')
	cupboard_j = loadImage('Images2/pngtree-furniture-wardrobe-cartoon-illustration-image_1436754-removebg-preview.png')
	statue_j = loadImage('Images2/be5cba0757fce1653472c558f5cd76a3-removebg-preview.png')
	bed_j = loadImage('Images2/download__2_-removebg-preview.png')
	tv_j = loadImage('Images2/download__3_-removebg-preview.png')
	lamp_j = loadImage('Images2/152-1526418_table-lamp-clipart-unique-clipart-table-lamp-cartoon-lamp-transparent-removebg-preview.png')
	table_j = loadImage('Images2/download__4_-removebg-preview.png')
}


function setup() {
	canvas = createCanvas(800, 400);
	fruitG = new Group();
	bombG = new Group();
	sword = createSprite(200, 200, 10, 10);
	sword.addImage(swordI)
	sword.scale = 0.2;
	sword.visible = 0;



	button1 = createSprite(400, 200, 30, 30);
	button1.addImage(play)
	button1.scale = 0.3;

	menu = createSprite(100, 200, 80, 300);
	menu.visible = 0;
	menu.shapeColor = 'white';

	setings = createSprite(100, 370, 20, 20);
	setings.addImage(settings)
	setings.scale = 0.4;

	cr = createSprite(160, 90, 10, 10);
	cr.addImage(cross)
	cr.scale = 0.4;
	cr.visible = 0;
	cro = createSprite(160, 90, 10, 10);
	cro.addImage(cross)
	cro.scale = 0.4;
	cro.visible = 0;
	boundary1 = createSprite(width - 300, height + 100, 400, 10);
	boundary1.addImage(wall_i);
	boundary1.scale = 0.8;
	boundary2 = createSprite(width - 900, height + 100, 400, 10);
	boundary2.addImage(wall_i);
	boundary2.scale = 0.8;
	boundary3 = createSprite(width - 1100, height - 200, 10, 600);
	boundary3.addImage(wall2_i);
	boundary3.scale = 1.7;
	boundary3.rotation = 90;

	boundary4 = createSprite(width - 100, height - 200, 10, 600);
	boundary4.addImage(wall2_i);
	boundary4.scale = 1.7;
	boundary4.rotation = 90;
	boundary5 = createSprite(width - 600, height - 500, 1000, 10)
	boundary5.addImage(wall_i);
	boundary5.scale = 2.1;
	boundary6 = createSprite(width - 900, height - 200, 400, 10)
	boundary6.addImage(wall2_i);
	boundary6.scale = 1.1;
	boundary7 = createSprite(width - 700, height - 300, 10, 200)
	boundary7.addImage(wall2_i);
	boundary7.scale = 0.5;
	boundary7.rotation = 90;
	boundary8 = createSprite(width - 210, height - 150, 250, 10);
	boundary8.addImage(wall2_i);
	boundary8.scale = 0.7;

	boundary9 = createSprite(width - 340, height - 100, 10, 150)
	boundary9.addImage(wall2_i);
	boundary9.scale = 0.4;
	boundary9.rotation = 90;
	boundary9.visible = 0;
	boundary8.visible = 0;
	boundary7.visible = 0;
	boundary6.visible = 0;
	boundary5.visible = 0;

	boundary4.visible = 0;
	boundary3.visible = 0;
	boundary2.visible = 0;
	boundary1.visible = 0;

	sofa_b = createSprite(-100, -100, 40, 40);
	sofa_b.addImage(sofa_j);
	sofa_b.scale = 0.08;
	sofa_b.visible = 0;
	digning_table_b = createSprite(-50, -100, 40, 40);
	digning_table_b.addImage(digning_table_j);
	digning_table_b.scale = 0.2;
	digning_table_b.visible = 0;
	cupboard_b = createSprite(0, -100, 40, 40);
	cupboard_b.addImage(cupboard_j)
	cupboard_b.scale = 0.2;
	cupboard_b.visible = 0;

	statue_b = createSprite(50, -100, 40, 40);
	statue_b.addImage(statue_j);
	statue_b.scale = 0.2;
	statue_b.visible = 0;
	bed_b = createSprite(100, -100, 40, 40);
	bed_b.addImage(bed_j);
	bed_b.scale = 0.3;
	bed_b.visible = 0;
	lamp_b = createSprite(150, -100, 40, 40);
	lamp_b.addImage(lamp_j);
	lamp_b.scale = 0.15;
	lamp_b.visible = 0;
	tv_b = createSprite(200, -100, 40, 40);
	tv_b.addImage(tv_j);
	tv_b.scale = 0.2;
	table_b = createSprite(250, -95, 40, 40);
	table_b.addImage(table_j);
	table_b.scale = 0.2;
	table_b.shapeColor = 'blue';


	statue_b.visible = 0;
	tv_b.visible = 0;
	table_b.visible = 0;
	bed_b.shapeColor = 'red';
	digning_table_b.shapeColor = 'yellow';
	table_b.visible = 0;
	table2 = createSprite(10, 350, 10, 10);
	sofa1 = createSprite(-10, 330, 10, 180);
	sofa1.addImage(sofa_i);
	sofa1.scale = 0.5;
	sofa2 = createSprite(-20, 470, 180, 10);
	sofa2.addImage(tv_i)
	sofa2.scale = 0.4;
	table2.visible = 0;

	sofa1.visible = 0;

	sofa2.visible = 0;




	digning_table = createSprite(400, 50, 200, 200)
	digning_table.addImage(dining);
	digning_table.scale = 0.4;
	digning_table.visible = 0;
	cases = createSprite(-250, 320, 100, 200);
	cases.addImage(cupn);
	cases.scale = 0.4;
	cases2 = createSprite(650, 130, 100, 200);
	cases2.addImage(cupn2);
	cases2.scale = 0.4;
	statue = createSprite(600, -20, 50, 50);
	statue.addImage(statue_i)
	statue.scale = 0.3;

	statue.visible = 0;
	sofa1.visible = 0;
	sofa2.visible = 0;
	cases.visible = 0;
	cases2.visible = 0;
	table2.visible = 0;
	cases.visible = 0;

	cases2.visible = 0;

	statue.visible = 0;


	bed.visible = 0;

	lamp.visible = 0;

	table = createSprite(-80, 50, 200, 100)
	table.visible = 0;
	table.addImage(table_i);
	table.scale = 0.7;

	bed = createSprite(545, 378, 100, 250);
	bed.addImage(bed_i)
	bed.scale = 0.3;
	lamp = createSprite(645, 358, 40, 40);
	lamp.addImage(lamp_i);
	lamp.scale = 0.1;
	musicf = createSprite(100, 900, 10, 10);
	bed.visible = 0;
	lamp.visible = 0;
	musicf.addImage(music)
	musicf.scale = 0.4;
	musicf.visible = 0;
	musico = createSprite(300, 900, 10, 10);
	musico.addImage(music2)
	musico.scale = 0.4;
	musico.visible = 0;
	info = createSprite(100, 900, 10, 10);
	info.addImage(infoI);
	info.scale = 0.4;
	info.visible = 0;
	choser = createSprite(100, 900, 10, 10);
	choser.addImage(settings)
	choser.scale = 0.4;
	choser.visible = 0;
	audio.play();
	crsd = createSprite(20, 20, 10, 10);
	crsd.addImage(cross);
	crsd.scale = 0.3;
	crsd.visible = 0;
	crsds = createSprite(300, -90, 10, 10);
	crsds.addImage(cross);
	crsds.scale = 0.3;
	crsds.visible = 0;
	cros = createSprite(15, 15, 10, 10);
	cros.addImage(cross);
	cros.scale = 0.3;
	cros.visible = 0;
	crsdss = createSprite(20, 20, 10, 10);
	crsdss.addImage(cross);
	crsdss.scale = 0.3;
	crsdss.visible = 0;

}

let gameStateflag = 0;

function draw() {

	if (gameStateflag === 0) {
		if (flag === 'menu') {

			imageMode(CENTER)
			image(bgI, 400, 200, 800, 400);

			if (mousePressedOver(info)) {
				choser.visible = 0;
				gameStateflag = '1';
				cros.visible = 1;
				soundFlag = 0;

				button1.visible = 0;
				menu.visible = 0;
				info.visible = 0;
				document.getElementById('te').style.display = 'inline'
				document.getElementById('te2').style.display = 'inline'
				document.getElementById('te5').style.display = 'inline'
				musico.visible = 0;
				musicf.visible = 0;
				cr.visible = 0;
				background(255);

			};




			if (mousePressedOver(button1)) {
				soundFlag = 0;
				button1.visible = 0;
				audio.stop();
				menu.visible = 0;
				cr.visible = 0;
				setings.visible = 0;
				musicf.visible = 0;
				musico.visible = 0;
				console.log('oer');
				info.visible = 0;
				choser.visible = 0;
				gameStateflag = 1;
				soundFlag = 0;

			}
			if (dd === '') {
				if (mousePressedOver(setings)) {
					musicf.x = 100;
					musico.x = 120;
					setings.visible = 0;
					choser.y = 320;
					info.y = 100;
					musico.y = 180;
					musicf.y = 240;
					soundFlag = 4;
					menu.visible = 1;
					dd = '1';
					cr.visible = 1;
					info.visible = 1;
					choser.visible = 1;

				}

			}
			if (mousePressedOver(cr)) {
				menu.visible = 0;
				cr.visible = 0;
				setings.visible = 1;
				dd = '';
				choser.y = 900;
				info.y = 900;
				musico.y = 900;
				musicf.y = 900;
				musicf.visible = 0;
				musico.visible = 0;
				info.visible = 0;
				choser.visible = 0;
				soundFlag = 0;
			}


			if (mousePressedOver(choser)) {
				choser.visible = 0;
				gameStateflag = '1';
				cros.visible = 1;
				background(255);
				document.getElementById('te3').style.display = 'inline'
				document.getElementById('te4').style.display = 'inline'
				button1.visible = 0;
				menu.visible = 0;
				info.visible = 0;
				document.getElementById('te6').style.display = 'inline'
				musico.visible = 0;
				musicf.visible = 0;
				cr.visible = 0;
				soundFlag = 0;
			}
			if (mousePressedOver(musicf)) {


				musicf.visible = 0;
				musicf.x = 300;
				musico.x = 100;
				musico.y = 180;
				musico.visible = 1;
				audio.stop();
				soundFlag = 2;
			}
			if (mousePressedOver(musico)) {

				musico.visible = 0;
				musico.x = 300;
				musicf.x = 100;
				musicf.y = 240;
				musicf.visible = 1;
				audio.play();
				console.log('dd');
				soundFlag = 4;
			}
			if (soundFlag === 2) {
				musicf.visible = 0;
				musico.visible = 1;
			}
			if (soundFlag === 4) {
				musicf.visible = 1;
				musico.visible = 0;
			}
		}
		if (gameStateflag === '3') {


		}
	}
	if (gameStateflag === 1) {

		document.getElementById('austinI').style.display = 'inline';
		document.getElementById('container').style.display = 'inline';
		document.getElementById('dialoge1').style.display = 'inline';
		document.getElementById('text').style.display = 'inline';
		document.getElementById('dd').style.display = 'inline';
		clear();
		background(bgI4);


		document.getElementById('dd').addEventListener('click', function () {
			document.getElementById('j').style.display = 'inline'
			document.getElementById('s').style.display = 'inline'
			document.getElementById('containers').style.display = 'inline'
			document.getElementById('austinI').style.display = 'none';
			document.getElementById('container').style.display = 'none';
			document.getElementById('dialoge1').style.display = 'none';
			document.getElementById('text').style.display = 'none';
			gameStateflag = '2';

			document.getElementById('j').style.top = '30%';
			document.getElementById('s').style.top = '40%'
			document.getElementById('j').style.left = '50%';
			document.getElementById('s').style.left = '55%';
		})

	}
	if (gameStateflag === 2) {


		clear();
		background(bgI4);
		document.getElementById('dd').addEventListener('click', function () {
			document.getElementById('austinI').style.display = 'none';
			document.getElementById('container').style.display = 'none';
			document.getElementById('dialoge1').style.display = 'none';
			document.getElementById('text').style.display = 'none';
			gameStateflag = 3;
			document.getElementById('level').style.display = 'inline';
			document.getElementById('dd').style.display = 'none';
			crsd.destroy();
		});

	}
	if (gameStateflag === '1') {
		if (mousePressedOver(cros)) {
			document.getElementById('te').style.display = 'none'
			document.getElementById('te2').style.display = 'none'
			document.getElementById('te3').style.display = 'none'
			document.getElementById('te4').style.display = 'none'
			document.getElementById('te5').style.display = 'none'
			document.getElementById('te6').style.display = 'none'
			cros.visible = 0;
			gameStateflag = 0;
			button1.visible = 1;
			menu.visible = 0;
			info.visible = 1;
			soundFlag = 2;
			musico.visible = 1;
			musicf.visible = 1;
			menu.visible = 1;
			cr.visible = 1;
			choser.visible = 1;

		}
	}
	if (gameStateflag === 3) {

		document.getElementById('star_b').style.display = 'inline';
		document.getElementById('level_b').style.display = 'inline';
		document.getElementById('name_b').style.display = 'inline';
		document.getElementById('star_b').innerText = stars;
		document.getElementById('level_b').innerText = level;
		document.getElementById('name_b').innerText = names;
		clear();
		cases2.visible = 1;
		document.getElementById('j').style.display = 'none'
		document.getElementById('s').style.display = 'none'
		background('green');
		document.getElementById('kk').style.display = 'inline'
		push();
		imageMode(CENTER)
		image(dds, 200, 200, width + 200, height + 200)
		pop();
		boundary9.visible = 1;
		boundary8.visible = 1;
		boundary7.visible = 1;
		boundary6.visible = 1;
		boundary5.visible = 1;
		if (mousePressedOver(lamp_b)) {
			lamp_b.visible = 0;
			console.log('Hello');
		}
		boundary4.visible = 1;
		boundary3.visible = 1;
		boundary2.visible = 1;
		boundary1.visible = 1;



		camera.position.x = mouseX;
		camera.position.y = mouseY;
		document.getElementById('kk').addEventListener('click', () => {


			if (table_b !== 0) {
				table_b.visible = 1;

			}


			if (lamp_b !== 0) {
				lamp_b.visible = 1;

			}



			if (sofa_b !== 0) {
				sofa_b.visible = 1;

			}


			if (statue_b !== 0) {
				statue_b.visible = 1;

			}



			if (cupboard_b !== 0) {
				cupboard_b.visible = 1;

			}

			if (digning_table_b !== 0) {
				digning_table_b.visible = 1;

			}


			if (bed_b !== 0) {
				bed_b.visible = 1;

			}


			if (tv_b !== 0) {
				tv_b.visible = 1;

			}

			gameStateflag = 4;
			crsds.visible = 1;
		});

		document.getElementById('level').addEventListener('click', () => {


			// if (level === 2){
			//   gameStateflag = 6;
			// }
			// if (level === 3){
			//   gameStateflag = 7;
			// }bed_b.visible = 1;
			// if (level === 4){
			//   gameStateflag = 8;
			// }
			// if (level === 5){
			//   gameStateflag = 9;
			// }
			// if (level === 6){
			//   gameStateflag = 10;document.getElementById('austinI').style.display = 'none';

			// }
			if (level === 1) {
				gameStateflag = 5;
			}
			if (level === 2) {
				gameStateflag = 20;
			}
			if (level === 3) {
				gameStateflag = 21;
			}
			if (level === 4) {
				gameStateflag = 22
			}
			if (level === 5) {
				gameStateflag = 23;
			}
			if (level === 6) {
				gameStateflag = 24;
			}

			tv_b.visible = 0;
			bed_b.visible = 0;
			digning_table_b.visible = 0;
			cupboard_b.visible = 0;
			statue_b.visible = 0;
			sofa_b.visible = 0;
			lamp_b.visible = 0;
			table_b.visible = 0;
			boundary4.visible = 0;
			boundary3.visible = 0;
			boundary2.visible = 0;
			boundary1.visible = 0;
			boundary9.visible = 0;
			boundary8.visible = 0;
			boundary7.visible = 0;
			boundary6.visible = 0;
			boundary5.visible = 0;
			document.getElementById('kk').style.display = 'none';
			document.getElementById('star_b').style.display = 'none';
			document.getElementById('level_b').style.display = 'none';
			document.getElementById('name_b').style.display = 'none';
			document.getElementById('level').style.display = 'none';

			statue.visible = 0;
			sofa1.visible = 0;
			sofa2.visible = 0;
			cases.visible = 0;
			cases2.visible = 0;
			table2.visible = 0;
			cases.visible = 0;

			cases2.visible = 0;

			statue.visible = 0;


			bed.visible = 0;

			lamp.visible = 0;
			table.visible = 0;
			clear();

		})
	}
	if (gameStateflag === '2') {
		imageMode(CENTER);
		image(bgI3, 380, 200, width * 1.2, height * 1.2)
		document.getElementById('s').addEventListener('click', function () {
			names = document.getElementById('j').value;
			document.getElementById('s').style.display = 'none';
			document.getElementById('j').style.display = 'none';
			document.getElementById('containers').style.display = 'none'
			gameStateflag = 2;
			document.getElementById('austinI').style.display = 'inline';
			document.getElementById('container').style.display = 'inline';
			document.getElementById('dialoge1').style.display = 'inline';
			document.getElementById('text2').style.display = 'inline';
			document.getElementById('dd').style.left = '20%'
			document.getElementById('text2').innerText = `Thank you for telling me your name ${names} and hope that you enjoy te game and I hope that you make sure
to help me in my journey....`

		})
	}
	if (gameStateflag === 4) {
		document.getElementById('kk').style.display = 'none';
		document.getElementById('kk').style.display = 'none';
		crsds.visible = 1;

		if (stars > 0) {
			if (mousePressedOver(lamp_b)) {
				console.log('lamp')
				lamp.visible = 1;
				lamp_b.visible = 0;
				lamp_b.destroy();
				if (z === '') {
					stars = stars - 1;
					z = '1';
				}
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				gameStateflag = 10;
				tv_b.visible = 0;
				bed_b.visible = 0;
				digning_table_b.visible = 0;
				cupboard_b.visible = 0;
				statue_b.visible = 0;
				sofa_b.visible = 0;
				lamp_b.visible = 0;
				table_b.visible = 0;
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;
				table.visible = 0;
				lamp.visible = 0;


			}

		}
		if (stars > 0) {
			if (mousePressedOver(sofa_b)) {

				sofa1.visible = 1;
				sofa_b.visible = 0;
				sofa_b.destroy();
				if (y === '') {
					stars = stars - 1;
					y = '1';
				}
				gameStateflag = 14;
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				gameStateflag = 6;
				tv_b.visible = 0;
				bed_b.visible = 0;
				digning_table_b.visible = 0;
				cupboard_b.visible = 0;
				statue_b.visible = 0;
				sofa_b.visible = 0;
				lamp_b.visible = 0;
				table_b.visible = 0;
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;
				table.visible = 0;
				lamp.visible = 0;


			}

		}
		if (stars > 0) {
			if (mousePressedOver(tv_b)) {
				console.log('lamp')
				sofa2.visible = 1;
				tv_b.visible = 0;
				tv_b.destroy();
				if (x === '') {
					stars = stars - 1;
					x = '1'
				}
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				gameStateflag = 27;
				tv_b.visible = 0;
				bed_b.visible = 0;
				digning_table_b.visible = 0;
				cupboard_b.visible = 0;
				statue_b.visible = 0;
				sofa_b.visible = 0;
				lamp_b.visible = 0;
				table_b.visible = 0;
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;
				table.visible = 0;
				lamp.visible = 0;


			}

		}
		if (stars > 0) {
			if (mousePressedOver(digning_table_b)) {
				digning_table_b.destroy();
				digning_table.visible = 1;
				digning_table.visible = 0;
				if (w === '') {
					stars = stars - 1;
					w = '1';
				}
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				gameStateflag = 12;
				tv_b.visible = 0;
				bed_b.visible = 0;
				digning_table_b.visible = 0;
				cupboard_b.visible = 0;
				statue_b.visible = 0;
				sofa_b.visible = 0;
				lamp_b.visible = 0;
				table_b.visible = 0;
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;

				lamp.visible = 0;
				table.visible = 0;

			}

		}
		if (stars > 0) {
			if (mousePressedOver(bed_b)) {
				bed_b.destroy();
				bed.visible = 1;
				bed_b.visible = 0;
				if (v === '') {
					stars = stars - 1;
					v = '1';
				}
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				gameStateflag = 8;
				tv_b.visible = 0;
				bed_b.visible = 0;
				digning_table_b.visible = 0;
				cupboard_b.visible = 0;
				statue_b.visible = 0;
				sofa_b.visible = 0;
				lamp_b.visible = 0;
				table_b.visible = 0;
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;

				lamp.visible = 0;
				table.visible = 0;
			}

		}
		if (stars > 0) {
			if (mousePressedOver(cupboard_b)) {
				cupboard_b.destroy();
				cases.visible = 1;


				if (u === '') {
					stars = stars - 1;
					u = 2
				}
				gameStateflag = 16;
				sofa_b.visible = 0;
				digning_table_b.visible = 0;


				tv_b.visible = 0;
				statue_b.visible = 0;
				bed_b.visible = 0;
				lamp_b.visible = 0;
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;

				lamp.visible = 0;
				table.visible = 0;

			}

		}
		if (stars > 0) {
			if (mousePressedOver(statue_b)) {
				statue_b.destroy();
				statue.visible = 1;
				statue_b.visible = 0;
				if (t === '') {
					stars = stars - 1;
					t = 3
				}
				gameStateflag = 18;
				sofa_b.visible = 0;
				digning_table_b.visible = 0;
				cupboard_b.visible = 0;

				tv_b.visible = 0;
				statue_b.visible = 0;
				bed_b.visible = 0;
				lamp_b.visible = 0;
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;
				table.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;

				lamp.visible = 0;


			}

		}
		if (stars > 0) {
			if (mousePressedOver(table_b)) {
				table_b.destroy();
				table.visible = 1;
				table_b.visible = 0;
				if (s === '') {
					stars = stars - 1;
					s = 1;
				}
				gameStateflag = 16;
				sofa_b.visible = 0;
				digning_table_b.visible = 0;
				cupboard_b.visible = 0;

				tv_b.visible = 0;
				statue_b.visible = 0;
				bed_b.visible = 0;
				lamp_b.visible = 0;
				crsds.visible = 0;
				document.getElementById('star_b').style.display = 'none'
				document.getElementById('level_b').style.display = 'none'
				document.getElementById('name_b').style.display = 'none'
				boundary4.visible = 0;
				boundary3.visible = 0;
				boundary2.visible = 0;
				boundary1.visible = 0;
				boundary9.visible = 0;
				boundary8.visible = 0;
				boundary7.visible = 0;
				boundary6.visible = 0;
				boundary5.visible = 0;

				statue.visible = 0;
				sofa1.visible = 0;
				sofa2.visible = 0;
				cases.visible = 0;
				cases2.visible = 0;
				table2.visible = 0;
				cases.visible = 0;

				cases2.visible = 0;

				statue.visible = 0;


				bed.visible = 0;

				lamp.visible = 0;
				table.visible = 0;
			}

		}
		if (mousePressedOver(crsds)) {

			gameStateflag = 3;
			sofa_b.visible = 0;
			digning_table_b.visible = 0;
			cupboard_b.visible = 0;
			table_b.visible = 0;
			tv_b.visible = 0;
			statue_b.visible = 0;
			bed_b.visible = 0;
			lamp_b.visible = 0;
			document.getElementById('kk').style.display = 'none';
			crsds.visible = 0;


		}

	}
	if (gameStateflag === 5) {
		if (dee === '') {
			sound1.play();
			sound1.setVolume(0.3);
			dee = 1;
		}
		background("lightSkyblue");

		if (gameState === "TEXT") {
			textFont("inconsolata");
			fill("blue")
			text("Welcome to the game of fruit ninja.", width - 250, 200);
			text("Hope that you enjoy the game and all the best for winning", width - 300, 220)
			text("'Click on Y to start the game'", width - 250, 300);
			image(fruitKatana, width - 250, 350, 150, 150);

			if (keyWentDown("y")) {
				gameState = "PLAY";
			}
		}
		if (gameState === "PLAY") {

			image(backer, 300, 180, width + 120, height);
			textFont("Georgia");
			textSize(20);
			fill("white");
			text("Score: " + score, width - 100, 200);
			sword.visible = 1;
			sword.x = mouseX;
			sword.y = mouseY;
			fruitNamer = floor(random(1, 4));
			rand = floor(random(1, 3));
			if (World.frameCount % 100 === 0) {

				if (rand === 1) {

					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = -2;
				}
				if (rand === 2) {
					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = 2;
				}
				fruit.scale = 0.06;

				fruitG.add(fruit);

				sound3.play();
				sound3.setVolume(0.8);


				switch (fruitNamer) {
					case 1:
						fruit.addImage(appleI);
						break;
					case 2:
						fruit.addImage(mangoI);
						break;
					case 3:
						fruit.addImage(bananaI);
						break;
					case 4:
						fruit.addImage(pineappleI);
						break;

				}


			}
			bombNamer = floor(random(1, 2));
			if (World.frameCount % 100 === 0) {
				if (rand === 1) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = -speed;
				}
				if (rand === 2) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = speed;

				}
				bomb.scale = 0.04;

				bombG.add(bomb);

				if (bombNamer === 1) {
					bomb.addImage(bomb1I);
				}

				if (bombNamer === 2) {
					bomb.addImage(bomb2I);
				}
			}
			if (sword.isTouching(fruitG)) {
				score = score + 1;
				fruitG.destroyEach();
				sound4.play();
				sound4.setVolume(0.3);
				speed = speed + 2;
			}
			if (sword.isTouching(bombG)) {
				gameState = "OVER";
				sword.visible = 0;
				fruitG.setVisibleEach(0);
				bombG.setVisibleEach(0);
				sound1.stop();
				sound2.play();
				sound2.setVolume(0.3);

			}
			if (score > 1) {
				gameState = "WINNER";
				sword.visible = 0;

				fruitG.setVisibleEach = 0;
				bombG.setVisibleEach(0);
				sound1.stop();
				sound5.play();
				sound5.setVolume(0.3);
			}

		}
		if (gameState === "OVER") {
			textSize(20);
			textAlign(CENTER);
			textFont("inconsolata");
			fill("ghostwhite");

			text("GAME OVER!!!", width - 100, 200);
			text("Press key Y to restart", width - 100, 300);

			if (keyWentDown('y')) {
				score = 0;
				gameState = 'TEXT';


			}
		}
		if (gameState === "WINNER") {
			text("YOU_WINN!!!", width - 250, 200);
			stars = stars + 2;
			gameStateflag = 3;
			level = level + 1;
			document.getElementById('level').style.display = 'inline';
			score = 0;
		}


	}
	if (gameStateflag === 6) {
		clear();
		document.getElementById('level').style.display = 'none';
		background(bgI5);
		document.getElementById('dialoge3').style.display = 'inline';
		document.getElementById('dialoge3').style.left = '20%'
		document.getElementById('text3').style.display = 'inline';
		document.getElementById('dds').style.display = 'inline';
		document.getElementById('dds').style.top = '70%'
		document.getElementById('dds').style.left = '20%'
		document.getElementById('auntI').style.display = 'inline';
		document.getElementById('dds').addEventListener('click', function () {
			gameStateflag = 7;
			document.getElementById('dialoge3').style.display = 'none';
			document.getElementById('text3').style.display = 'none';
			document.getElementById('dds').style.left = '80%'
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('auntI').style.display = 'none';
			document.getElementById('austinI').style.display = 'inline';

		})
	}
	if (gameStateflag === 7) {
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('text100').style.display = 'none';
			document.getElementById('austinI').style.display = 'none';
			document.getElementById('dds').style.display = 'none';
			document.getElementById('level').style.display = 'inline';
			gameStateflag = 3;
		})
	}
	if (gameStateflag === 8) {
		document.getElementById('dialoge4').style.display = 'inline';
		document.getElementById('text4').style.display = 'inline';
		document.getElementById('dds').style.display = 'inline';
		document.getElementById('auntI').style.display = 'inline';
		background(bgI5);
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('auntI').style.display = 'none';
			document.getElementById('brotherI').style.display = 'inline';
			gameStateflag = 9;
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('dds').style.left = '10%';

		})
	}
	if (gameStateflag === 9) {
		document.getElementById('dialoge4').style.display = 'none';
		document.getElementById('text4').style.display = 'none';

		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('brotherI').style.display = 'none';

			document.getElementById('dds').style.display = 'none';
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('text100').style.display = 'none';
			gameStateflag = 3;
			bed.visible = 1;
		})
	}
	if (gameStateflag === 10) {
		document.getElementById('dialoge5').style.display = 'inline';
		document.getElementById('text5').style.display = 'inline';
		document.getElementById('dds').style.display = 'inline';
		document.getElementById('fatherI').style.display = 'inline';
		background(bgI5);
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('fatherI').style.display = 'none';
			document.getElementById('austinI').style.display = 'inline';
			gameStateflag = 11;
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('dds').style.left = '20%';

		})
	}
	if (gameStateflag === 11) {
		document.getElementById('dialoge5').style.display = 'none';
		document.getElementById('text5').style.display = 'none';
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('austinI').style.display = 'none';
			document.getElementById('dds').style.display = 'none';
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('text100').style.display = 'none';
			gameStateflag = 3;

		})
	}
	if (gameStateflag === 12) {
		document.getElementById('dialoge6').style.display = 'inline';
		document.getElementById('dialoge6').style.top = '76%';
		document.getElementById('dialoge6').style.left = '20%';
		document.getElementById('text6').style.display = 'inline';
		document.getElementById('text6').style.top = '78%';
		document.getElementById('text6').style.left = '22%';
		document.getElementById('level').style.display = 'none';
		document.getElementById('dds').style.display = 'inline';
		background(bgI5);
		document.getElementById('austin2I').style.display = 'inline';
		document.getElementById('dds').addEventListener('click', function () {

			document.getElementById('austin2I').style.display = 'none';
			document.getElementById('brotherI').style.display = 'inline';

			gameStateflag = 13;
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('dds').style.display = 'inline';

		})
	}
	if (gameStateflag === 13) {
		document.getElementById('dialoge6').style.display = 'none';
		document.getElementById('text6').style.display = 'none';
		document.getElementById('level').style.display = 'none';
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('brotherI').style.display = 'none';
			document.getElementById('dds').style.display = 'none';
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('text100').style.display = 'none';
			gameStateflag = 3;
			digning_table.visible = 1;
			document.getElementById('level').style.display = 'inline';
		})
	}
	if (gameStateflag === 14) {
		document.getElementById('dialoge7').style.display = 'inline';
		document.getElementById('text7').style.display = 'inline';
		document.getElementById('dds').style.display = 'inline';
		document.getElementById('yI').style.display = 'inline';
		background(bgI5)
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('dd').style.display = 'none';
			document.getElementById('yI').style.display = 'none';
			document.getElementById('').style.display = 'inline';
			gameStateflag = 15;
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('dds').style.display = 'inline';

		})
	}
	if (gameStateflag === 15) {
		document.getElementById('dialoge7').style.display = 'none';
		document.getElementById('text7').style.display = 'none';
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('uncleI').style.display = 'none';
			document.getElementById('dds').style.display = 'none';
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('text100').style.display = 'none';
			gameStateflag = 3;
			table.visible = 1;

		})
	}
	if (gameStateflag === 16) {
		document.getElementById('dialoge8').style.display = 'inline';
		document.getElementById('text8').style.display = 'inline';
		document.getElementById('dialoge8').style.top = '78%';
		document.getElementById('dialoge8').style.left = '20%';
		document.getElementById('text8').style.top = '82%';
		document.getElementById('text8').style.left = '30%';
		document.getElementById('austinI').style.display = 'inline';
		document.getElementById('level').style.display = 'none';
		background(bgI5)
		document.getElementById('dds').style.display = 'inline';
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('austinI').style.display = 'none';
			document.getElementById('brotherI').style.display = 'inline';
			document.getElementById('dd').style.display = 'none';
			gameStateflag = 17;
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('dds').style.display = 'inline';

		})
	}
	if (gameStateflag === 17) {
		document.getElementById('dialoge8').style.display = 'none';
		document.getElementById('text8').style.display = 'none';
		document.getElementById('level').style.display = 'none';
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('brotherI').style.display = 'none';
			document.getElementById('dds').style.display = 'none';
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('level').style.display = 'inline';
			document.getElementById('text100').style.display = 'none';
			cases2.visible = 1;
			cases.visible = 1;
			gameStateflag = 3;

		})
	}
	if (gameStateflag === 18) {
		document.getElementById('dialoge9').style.display = 'inline';
		document.getElementById('text9').style.display = 'inline';
		document.getElementById('dds').style.display = 'inline';
		document.getElementById('fatherI').style.display = 'inline';
		background(bgI5)
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('dd').style.display = 'none';
			document.getElementById('fatherI').style.display = 'none';
			document.getElementById('yI').style.display = 'inline';
			gameStateflag = 19;
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('dds').style.display = 'inline';

		})
	}
	if (gameStateflag === 19) {
		document.getElementById('dialoge9').style.display = 'none';
		document.getElementById('text9').style.display = 'none';
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('yI').style.display = 'none';
			statue.visible = 1;
			document.getElementById('dds').style.display = 'none';
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('text100').style.display = 'none';
			gameStateflag = 3;

		})
	}
	if (gameStateflag === 27) {
		document.getElementById('dialoge10').style.display = 'inline';
		document.getElementById('text10').style.display = 'inline';
		document.getElementById('dds').style.display = 'inline';
		document.getElementById('fatherI').style.display = 'inline';
		background(bgI5)
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('dds').style.display = 'none';
			document.getElementById('fatherI').style.display = 'none';
			document.getElementById('yI').style.display = 'inline';
			gameStateflag = 28;
			document.getElementById('dialoge100').style.display = 'inline';
			document.getElementById('text100').style.display = 'inline';
			document.getElementById('dds').style.left = '20%';

		})
	}
	if (gameStateflag === 28) {
		document.getElementById('dialoge10').style.display = 'none';
		document.getElementById('text10').style.display = 'none';
		document.getElementById('dds').addEventListener('click', function () {
			document.getElementById('yI').style.display = 'none';
			statue.visible = 1;
			document.getElementById('dds').style.display = 'none';
			document.getElementById('dialoge100').style.display = 'none';
			document.getElementById('text100').style.display = 'none';
			gameStateflag = 3;

		})
	}
	if (gameStateflag === 20) {
		if (dee === '') {
			sound1.play();
			sound1.setVolume(0.3);
			dee = 1;
		}
		background("lightSkyblue");

		if (gameStates === "TEXT") {
			textFont("inconsolata");
			fill("blue")
			text("Welcome to the game of fruit ninja.", width - 250, 200);
			text("Hope that you enjoy the game and all the best for winning", width - 300, 220)
			text("'Click on Y to start the game'", width - 250, 300);
			image(fruitKatana, width - 250, 350, 150, 150);

			if (keyWentDown("y")) {
				gameStates = "PLAY";
			}
		}
		if (gameStates === "PLAY") {

			image(backer, 300, 180, width + 120, height);
			textFont("Georgia");
			textSize(20);
			fill("white");
			text("Score: " + score, width - 100, 200);
			sword.visible = 1;
			sword.x = mouseX;
			sword.y = mouseY;
			fruitNamer = floor(random(1, 4));
			rand = floor(random(1, 3));
			if (World.frameCount % 100 === 0) {

				if (rand === 1) {

					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = -2;
				}
				if (rand === 2) {
					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = 2;
				}
				fruit.scale = 0.06;

				fruitG.add(fruit);

				sound3.play();
				sound3.setVolume(0.8);


				switch (fruitNamer) {
					case 1:
						fruit.addImage(appleI);
						break;
					case 2:
						fruit.addImage(mangoI);
						break;
					case 3:
						fruit.addImage(bananaI);
						break;
					case 4:
						fruit.addImage(pineappleI);
						break;

				}


			}
			bombNamer = floor(random(1, 2));
			if (World.frameCount % 100 === 0) {
				if (rand === 1) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = -speed;
				}
				if (rand === 2) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = speed;

				}
				bomb.scale = 0.04;

				bombG.add(bomb);

				if (bombNamer === 1) {
					bomb.addImage(bomb1I);
				}

				if (bombNamer === 2) {
					bomb.addImage(bomb2I);
				}
			}
			if (sword.isTouching(fruitG)) {
				score = score + 1;
				fruitG.destroyEach();
				sound4.play();
				sound4.setVolume(0.3);
				speed = speed + 2;
			}
			if (sword.isTouching(bombG)) {
				gameStates = "OVER";
				sword.visible = 0;
				fruitG.setVisibleEach(0);
				bombG.setVisibleEach(0);
				sound1.stop();
				sound2.play();
				sound2.setVolume(0.3);

			}
			if (score > 8) {
				gameStates = "WINNER";
				sword.visible = 0;

				fruitG.setVisibleEach = 0;
				bombG.setVisibleEach(0);
				sound1.stop();
				sound5.play();
				sound5.setVolume(0.3);
			}

		}
		if (gameStates === "OVER") {
			textSize(20);
			textAlign(CENTER);
			textFont("inconsolata");
			fill("ghostwhite");

			text("GAME OVER!!!", width - 100, 200);
			text("Press key Y to restart", width - 100, 300);

			if (keyWentDown('y')) {
				score = 0;
				gameStates = 'TEXT';


			}
		}
		if (gameStates === "WINNER") {
			text("YOU_WINN!!!", width - 250, 200);
			stars = stars + 2;
			gameStateflag = 3;
			level = level + 1;
			document.getElementById('level').style.display = 'inline';
			score = 0;
		}

	}
	if (gameStateflag === 21) {

		if (dee === '') {
			sound1.play();
			sound1.setVolume(0.3);
			dee = 1;
		}
		background("lightSkyblue");

		if (status === "TEXT") {
			textFont("inconsolata");
			fill("blue")
			text("Welcome to the game of fruit ninja.", width - 250, 200);
			text("Hope that you enjoy the game and all the best for winning", width - 300, 220)
			text("'Click on Y to start the game'", width - 250, 300);
			image(fruitKatana, width - 250, 350, 150, 150);

			if (keyWentDown("y")) {
				status = "PLAY";
			}
		}
		if (status === "PLAY") {

			image(backer, 300, 180, width + 120, height);
			textFont("Georgia");
			textSize(20);
			fill("white");
			text("Score: " + score, width - 100, 200);
			sword.visible = 1;
			sword.x = mouseX;
			sword.y = mouseY;
			fruitNamer = floor(random(1, 4));
			rand = floor(random(1, 3));
			if (World.frameCount % 100 === 0) {

				if (rand === 1) {

					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = -2;
				}
				if (rand === 2) {
					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = 2;
				}
				fruit.scale = 0.06;

				fruitG.add(fruit);

				sound3.play();
				sound3.setVolume(0.8);


				switch (fruitNamer) {
					case 1:
						fruit.addImage(appleI);
						break;
					case 2:
						fruit.addImage(mangoI);
						break;
					case 3:
						fruit.addImage(bananaI);
						break;
					case 4:
						fruit.addImage(pineappleI);
						break;

				}


			}
			bombNamer = floor(random(1, 2));
			if (World.frameCount % 100 === 0) {
				if (rand === 1) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = -speed;
				}
				if (rand === 2) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = speed;

				}
				bomb.scale = 0.04;

				bombG.add(bomb);

				if (bombNamer === 1) {
					bomb.addImage(bomb1I);
				}

				if (bombNamer === 2) {
					bomb.addImage(bomb2I);
				}
			}
			if (sword.isTouching(fruitG)) {
				score = score + 1;
				fruitG.destroyEach();
				sound4.play();
				sound4.setVolume(0.3);
				speed = speed + 2;
			}
			if (sword.isTouching(bombG)) {
				status = "OVER";
				sword.visible = 0;
				fruitG.setVisibleEach(0);
				bombG.setVisibleEach(0);
				sound1.stop();
				sound2.play();
				sound2.setVolume(0.3);

			}
			if (score > 10) {
				status = "WINNER";
				sword.visible = 0;

				fruitG.setVisibleEach = 0;
				bombG.setVisibleEach(0);
				sound1.stop();
				sound5.play();
				sound5.setVolume(0.3);
			}

		}
		if (status === "OVER") {
			textSize(20);
			textAlign(CENTER);
			textFont("inconsolata");
			fill("ghostwhite");

			text("GAME OVER!!!", width - 100, 200);
			text("Press key Y to restart", width - 100, 300);

			if (keyWentDown('y')) {
				score = 0;
				status = 'TEXT';


			}
		}
		if (status === "WINNER") {
			text("YOU_WINN!!!", width - 250, 200);
			stars = stars + 2;
			gameStateflag = 3;
			level = level + 1;
			document.getElementById('level').style.display = 'inline';
			score = 0;
		}

	}
	if (gameStateflag === 22) {
		if (dee === '') {
			sound1.play();
			sound1.setVolume(0.3);
			dee = 1;
		}
		background("lightSkyblue");

		if (status2 === "TEXT") {
			textFont("inconsolata");
			fill("blue")
			text("Welcome to the game of fruit ninja.", width - 250, 200);
			text("Hope that you enjoy the game and all the best for winning", width - 300, 220)
			text("'Click on Y to start the game'", width - 250, 300);
			image(fruitKatana, width - 250, 350, 150, 150);

			if (keyWentDown("y")) {
				status2 = "PLAY";
			}
		}
		if (status2 === "PLAY") {

			image(backer, 300, 180, width + 120, height);
			textFont("Georgia");
			textSize(20);
			fill("white");
			text("Score: " + score, width - 100, 200);
			sword.visible = 1;
			sword.x = mouseX;
			sword.y = mouseY;
			fruitNamer = floor(random(1, 4));
			rand = floor(random(1, 3));
			if (World.frameCount % 100 === 0) {

				if (rand === 1) {

					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = -2;
				}
				if (rand === 2) {
					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = 2;
				}
				fruit.scale = 0.06;

				fruitG.add(fruit);

				sound3.play();
				sound3.setVolume(0.8);


				switch (fruitNamer) {
					case 1:
						fruit.addImage(appleI);
						break;
					case 2:
						fruit.addImage(mangoI);
						break;
					case 3:
						fruit.addImage(bananaI);
						break;
					case 4:
						fruit.addImage(pineappleI);
						break;

				}


			}
			bombNamer = floor(random(1, 2));
			if (World.frameCount % 100 === 0) {
				if (rand === 1) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = -speed;
				}
				if (rand === 2) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = speed;

				}
				bomb.scale = 0.04;

				bombG.add(bomb);

				if (bombNamer === 1) {
					bomb.addImage(bomb1I);
				}

				if (bombNamer === 2) {
					bomb.addImage(bomb2I);
				}
			}
			if (sword.isTouching(fruitG)) {
				score = score + 1;
				fruitG.destroyEach();
				sound4.play();
				sound4.setVolume(0.3);
				speed = speed + 2;
			}
			if (sword.isTouching(bombG)) {
				status2 = "OVER";
				sword.visible = 0;
				fruitG.setVisibleEach(0);
				bombG.setVisibleEach(0);
				sound1.stop();
				sound2.play();
				sound2.setVolume(0.3);

			}
			if (score > 13) {
				status2 = "WINNER";
				sword.visible = 0;

				fruitG.setVisibleEach = 0;
				bombG.setVisibleEach(0);
				sound1.stop();
				sound5.play();
				sound5.setVolume(0.3);
			}

		}
		if (status2 === "OVER") {
			textSize(20);
			textAlign(CENTER);
			textFont("inconsolata");
			fill("ghostwhite");

			text("GAME OVER!!!", width - 100, 200);
			text("Press key Y to restart", width - 100, 300);

			if (keyWentDown('y')) {
				score = 0;
				status2 = 'TEXT';


			}
		}
		if (status2 === "WINNER") {
			text("YOU_WINN!!!", width - 250, 200);
			stars = stars + 2;
			gameStateflag = 3;
			level = level + 1;
			document.getElementById('level').style.display = 'inline';
			score = 0;
		}

	}
	if (gameStateflag === 23) {
		if (dee === '') {
			sound1.play();
			sound1.setVolume(0.3);
			dee = 1;
		}
		background("lightSkyblue");

		if (status3 === "TEXT") {
			textFont("inconsolata");
			fill("blue")
			text("Welcome to the game of fruit ninja.", width - 250, 200);
			text("Hope that you enjoy the game and all the best for winning", width - 300, 220)
			text("'Click on Y to start the game'", width - 250, 300);
			image(fruitKatana, width - 250, 350, 150, 150);

			if (keyWentDown("y")) {
				status3 = "PLAY";
			}
		}
		if (status3 === "PLAY") {

			image(backer, 300, 180, width + 120, height);
			textFont("Georgia");
			textSize(20);
			fill("white");
			text("Score: " + score, width - 100, 200);
			sword.visible = 1;
			sword.x = mouseX;
			sword.y = mouseY;
			fruitNamer = floor(random(1, 4));
			rand = floor(random(1, 3));
			if (World.frameCount % 100 === 0) {

				if (rand === 1) {

					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = -2;
				}
				if (rand === 2) {
					fruit = createSprite(width, random(20, 350));
					fruit.velocityX = 2;
				}
				fruit.scale = 0.06;

				fruitG.add(fruit);

				sound3.play();
				sound3.setVolume(0.8);


				switch (fruitNamer) {
					case 1:
						fruit.addImage(appleI);
						break;
					case 2:
						fruit.addImage(mangoI);
						break;
					case 3:
						fruit.addImage(bananaI);
						break;
					case 4:
						fruit.addImage(pineappleI);
						break;

				}


			}
			bombNamer = floor(random(1, 2));
			if (World.frameCount % 100 === 0) {
				if (rand === 1) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = -speed;
				}
				if (rand === 2) {
					bomb = createSprite(width, random(20, 350));
					bomb.velocityX = speed;

				}
				bomb.scale = 0.04;

				bombG.add(bomb);

				if (bombNamer === 1) {
					bomb.addImage(bomb1I);
				}

				if (bombNamer === 2) {
					bomb.addImage(bomb2I);
				}
			}
			if (sword.isTouching(fruitG)) {
				score = score + 1;
				fruitG.destroyEach();
				sound4.play();
				sound4.setVolume(0.3);
				speed = speed + 2;
			}
			if (sword.isTouching(bombG)) {
				status3 = "OVER";
				sword.visible = 0;
				fruitG.setVisibleEach(0);
				bombG.setVisibleEach(0);
				sound1.stop();
				sound2.play();
				sound2.setVolume(0.3);

			}
			if (score > 15) {
				status3 = "WINNER";
				sword.visible = 0;

				fruitG.setVisibleEach = 0;
				bombG.setVisibleEach(0);
				sound1.stop();
				sound5.play();
				sound5.setVolume(0.3);
			}

		}
		if (status3 === "OVER") {
			textSize(20);
			textAlign(CENTER);
			textFont("inconsolata");
			fill("ghostwhite");

			text("GAME OVER!!!", width - 100, 200);
			text("Press key Y to restart", width - 100, 300);

			if (keyWentDown('y')) {
				score = 0;
				status3 = 'TEXT';


			}
		}
		if (status3 === "WINNER") {
			text("YOU_WINN!!!", width - 250, 200);
			stars = stars + 2;
			gameStateflag = 3;
			level = level + 1;
			document.getElementById('level').style.display = 'inline';
			score = 0;
		}
	}
	if (gameStateflag === 24) {}
	if (gameStateflag === 25) {}
	if (gameStateflag === 26) {}


	drawSprites();

}