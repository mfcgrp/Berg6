
//berg by mfclarke

//object
let berg;

//texture background for sphere 
let bergUV;

/**
 * @author Kari Barry <kezzsim@gmail.com>
 * Specify the number of image textures to be loaded
 * files must be named *n.png* or an error will be thrown.
 */
let imageNumber = 74;

/**
 * Instantiate object which will hold all the loaded images
 */
let bergObject = {};

//timer used to change textures, speed and scales
let timer = 6600;
let nextChange = timer;

//subBottom data
let table;
let url = "DataTest8.csv";

function preload() {
  berg = loadModel("iceberg15.obj", true);
  table = loadTable(url, "csv", "header");

  //load background texture on sphere, good as is
  bergUV = loadImage("UV.png");

  /**
   * @author Kari Barry <kezzsim@gmail.com>
   * Dynamically load all berg properties into an object
   * Avoids namespace pollution
   */

  for (let x = 0; x < imageNumber; x++) {
    console.log("Loading texture : " + x);
    bergObject[`bergUV${x}`] = loadImage(`DataImg/${x}.png`);
  }
}

function setup() {
  createCanvas(770, 700, WEBGL);
}

//for data
let maxYear = 0;

function draw() {
  background(0);

  //interactive lighting
  var dirX = map(mouseX, 0, width, -1.0, 1.0);
  var dirY = map(mouseY, 0, height, -1.0, 1.0);
  directionalLight(255, 0, 255, dirX, dirY, 3);
  pointLight(255, 255, 255, mouseX - width / 2, mouseY - height / 2, 350);

  //scales would be better to iterate (randomly) in a loop but for now timers set, kind of ok
  scale(2.5);

  if (millis() > timer * 2.7) {
    scale(4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3.7) {
    scale(2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4.7) {
    scale(1);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5.7) {
    scale(.45);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6.7) {
    scale(6);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7.7) {
    scale(.2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8.7) {
    scale(6);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9.7) {
    scale(.2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 11.7) {
    scale(2);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 13.7) {
    scale(3);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 16.7) {
    scale(.03);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 18.7) {
    scale(8);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 20.7) {
    scale(10);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 22.7) {
    scale(.7);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 24.7) {
    scale(.1);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 27.7) {
    scale(.4);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 30.7) {
    scale(7);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 45.7) {
    scale(.5);
    nextChange = millis() + timer;
  }

  //interact with scene
  orbitControl(1);

  //rotation speed (this is good as is)
  rotateY(frameCount * 0.005);
  if (millis() > timer * 4) {
    rotateY(frameCount * 0.01);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10) {
    rotateY(frameCount * 0.1);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 25) {
    rotateY(frameCount * 0.2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 35) {
    rotateY(frameCount * 0.4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 45) {
    rotateY(frameCount * 0.6);
    nextChange = millis() + timer;
  }

  //for loop to texture obj from arrary not working!!!!!!
  //for(let x = 0; x < 74; x++) {
  //setTimeout(() => {
  // texture(texturesArray[x]);
  //}, "1000")
  //}

  model(berg);

  //texture & stroke for background sphere
  texture(bergUV);
  strokeWeight(0);
  translate(0, 0, 0);
  sphere(750);


  //texture obj using timer (needs to be array and set to similar timing, obvi would be more consistant but could be a bit random)
  texture(bergObject.bergUV1);

  if (millis() > timer * 1) {
    texture(bergObject.bergUV2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 1.2) {
    texture(bergObject.bergUV3);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 1.5) {
    texture(bergObject.bergUV4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 1.7) {
    texture(bergObject.bergUV5);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2) {
    texture(bergObject.bergUV6);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2.2) {
    texture(bergObject.bergUV7);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2.5) {
    texture(bergObject.bergUV8);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2.7) {
    texture(bergObject.bergUV9);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3) {
    texture(bergObject.bergUV10);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3.2) {
    texture(bergObject.bergUV11);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3.5) {
    texture(bergObject.bergUV12);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3.7) {
    texture(bergObject.bergUV13);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4) {
    texture(bergObject.bergUV14);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4.2) {
    texture(bergObject.bergUV15);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4.5) {
    texture(bergObject.bergUV16);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4.7) {
    texture(bergObject.bergUV17);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5) {
    texture(bergObject.bergUV18);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5.2) {
    texture(bergObject.bergUV19);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5.5) {
    texture(bergObject.bergUV20);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5.7) {
    texture(bergObject.bergUV21);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6) {
    texture(bergObject.bergUV22);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6.2) {
    texture(bergObject.bergUV23);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6.5) {
    texture(bergObject.bergUV24);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 6.7) {
    texture(bergObject.bergUV25);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7) {
    texture(bergObject.bergUV26);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7.2) {
    texture(bergObject.bergUV27);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7.5) {
    texture(bergObject.bergUV28);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7.7) {
    texture(bergObject.bergUV29);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8) {
    texture(bergObject.bergUV30);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8.2) {
    texture(bergObject.bergUV31);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8.5) {
    texture(bergObject.bergUV32);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8.7) {
    texture(bergObject.bergUV33);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9) {
    texture(bergObject.bergUV34);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9.2) {
    texture(bergObject.bergUV35);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9.5) {
    texture(bergObject.bergUV36);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9.7) {
    texture(bergObject.bergUV37);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 10) {
    texture(bergObject.bergUV38);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10.2) {
    texture(bergObject.bergUV39);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10.5) {
    texture(bergObject.bergUV40);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10.7) {
    texture(bergObject.bergUV41);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 11) {
    texture(bergObject.bergUV42);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 11.7) {
    texture(bergObject.bergUV43);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 12) {
    texture(bergObject.bergUV44);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 12.7) {
    texture(bergObject.bergUV45);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 13) {
    texture(bergObject.bergUV46);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 13.7) {
    texture(bergObject.bergUV47);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 14) {
    texture(bergObject.bergUV48);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 14.7) {
    texture(bergObject.bergUV49);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 15) {
    texture(bergObject.bergUV50);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 15.7) {
    texture(bergObject.bergUV51);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 16) {
    texture(bergObject.bergUV52);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 16.7) {
    texture(bergObject.bergUV53);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 17) {
    texture(bergObject.bergUV54);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 18) {
    texture(bergObject.bergUV55);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 19) {
    texture(bergObject.bergUV56);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 21) {
    texture(bergObject.bergUV57);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 22) {
    texture(bergObject.bergUV58);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 23) {
    texture(bergObject.bergUV59);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 24) {
    texture(bergObject.bergUV60);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 25) {
    texture(bergObject.bergUV61);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 26) {
    texture(bergObject.bergUV62);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 27) {
    texture(bergObject.bergUV63);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 28) {
    texture(bergObject.bergUV64);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 29) {
    texture(bergObject.bergUV65);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 30) {
    texture(bergObject.bergUV66);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 31) {
    texture(bergObject.bergUV67);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 32) {
    texture(bergObject.bergUV68);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 33) {
    texture(bergObject.bergUV69);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 34) {
    texture(bergObject.bergUV70);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 35) {
    texture(bergObject.bergUV71);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 36) {
    texture(bergObject.bergUV72);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 40) {
    texture(bergObject.bergUV73);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 42) {
    texture(bergObject.bergUV2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 44) {
    texture(bergObject.bergUV3);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 45) {
    texture(bergObject.bergUV4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 47) {
    texture(bergObject.bergUV5);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 49) {
    texture(bergObject.bergUV6);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 51) {
    texture(bergObject.bergUV7);
    nextChange = millis() + timer;
  }

  let temperatures = table.getColumn(1);
  drawColor(temperatures.slice(10, maxYear));

  if (maxYear < temperatures.length) {
    maxYear = maxYear + 1;
  }

}

function drawColor(data) {
  let x = 0;

  // loop through data
  for (let t of data) {

    // map data to color
    let col = map(t, min(data), max(data), 30, 255);

    stroke(col, 30, 255);
    strokeWeight(.5);

  }


}


