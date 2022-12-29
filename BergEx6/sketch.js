
//berg by mfclarke

//object
let berg;

//texture background for sphere 
let bergUV;


//texture for berg obj (needs to be array)!!!!
let bergUV1;
let bergUV2;
let bergUV3;
let bergUV4;
let bergUV5;
let bergUV6;
let bergUV7;
let bergUV8;
let bergUV9;
let bergUV10;
let bergUV11;
let bergUV12;
let bergUV13;
let bergUV14;
let bergUV15;
let bergUV16;
let bergUV17;
let bergUV18;
let bergUV19;
let bergUV20;
let bergUV21;
let bergUV22;
let bergUV23;
let bergUV24;
let bergUV25;
let bergUV26;
let bergUV27;
let bergUV28;
let bergUV29;
let bergUV30;
let bergUV31;
let bergUV32;
let bergUV33;
let bergUV34;
let bergUV35;
let bergUV36;
let bergUV37;
let bergUV38;
let bergUV39;
let bergUV40;
let bergUV41;
let bergUV42;
let bergUV43;
let bergUV44;
let bergUV45;
let bergUV46;
let bergUV47;
let bergUV48;
let bergUV49;
let bergUV50;
let bergUV51;
let bergUV52;
let bergUV53;
let bergUV54;
let bergUV55;
let bergUV56;
let bergUV57;
let bergUV58;
let bergUV59;
let bergUV60;
let bergUV61;
let bergUV62;
let bergUV63;
let bergUV64;
let bergUV65;
let bergUV66;
let bergUV67;
let bergUV68;
let bergUV69;
let bergUV70;
let bergUV71;
let bergUV72;
let bergUV73;
let bergUV74;


//array variable for texture obj attempt here!!!!! 
//const texturesArray = [];



//timer used to change textures, speed and scales
let timer = 6600;
let nextChange = timer;

//subBottom data
let table;
let url = "DataTest8.csv";



function preload() {
berg = loadModel("iceberg15.obj", true);
table = loadTable(url,"csv","header");

//preload for array to texture obj attempt!!!!!!!!!!!
//for(let x = 0; x < 74; x++) {
  //texturesArray.push(loadImage(`DataImg/Data-${x}.png`))
//}

//load background texture on sphere, good as is
 bergUV = loadImage("UV.png");



//load berg obj textures (needs to be array see code above!!!)
bergUV1 = loadImage("DataImg/0.png");
bergUV2 = loadImage("DataImg/1.png");
bergUV3 = loadImage("DataImg/2.png");
bergUV4 = loadImage("DataImg/3.png");
 bergUV5 = loadImage("DataImg/4.png"); 
 bergUV6 = loadImage("DataImg/5.png");
 bergUV7 = loadImage ("DataImg/6.png");
 bergUV8 = loadImage("DataImg/7.png");
 bergUV9 = loadImage("DataImg/8.png");
bergUV10 = loadImage("DataImg/9.png");
bergUV11 = loadImage("DataImg/10.png");
bergUV12 = loadImage("DataImg/11.png");
 bergUV13 = loadImage("DataImg/12.png"); 
 bergUV14 = loadImage("DataImg/13.png");
 bergUV15 = loadImage ("DataImg/14.png");
 bergUV16 = loadImage("DataImg/15.png");
 bergUV17 = loadImage("DataImg/16.png");
 bergUV18 = loadImage("DataImg/17.png"); 
 bergUV19 = loadImage("DataImg/18.png");
 bergUV20 = loadImage ("DataImg/19.png");
 bergUV21 = loadImage("DataImg/20.png");
 bergUV22 = loadImage("DataImg/21.png");
bergUV23 = loadImage("DataImg/22.png");
bergUV24 = loadImage("DataImg/23.png");
bergUV25 = loadImage("DataImg/24.png");
 bergUV26 = loadImage("DataImg/25.png"); 
 bergUV27 = loadImage("DataImg/26.png");
 bergUV28 = loadImage ("DataImg/27.png");
 bergUV29 = loadImage("DataImg/28.png");
 bergUV30 = loadImage("DataImg/29.png");
bergUV31 = loadImage("DataImg/30.png");
bergUV32 = loadImage("DataImg/31.png");
bergUV33 = loadImage("DataImg/32.png");
 bergUV34 = loadImage("DataImg/33.png"); 
 bergUV35 = loadImage("DataImg/34.png");
 bergUV36 = loadImage ("DataImg/35.png");
 bergUV37 = loadImage("DataImg/36.png");
 bergUV38 = loadImage("DataImg/37.png");
 bergUV39 = loadImage("DataImg/38.png"); 
 bergUV40 = loadImage("DataImg/39.png");
 bergUV41 = loadImage ("DataImg/40.png");
 bergUV42 = loadImage ("DataImg/41.png");
 bergUV43 = loadImage ("DataImg/42.png");
 bergUV44 = loadImage("DataImg/43.png");
 bergUV43 = loadImage("DataImg/44.png");
bergUV44 = loadImage("DataImg/45.png");
bergUV45 = loadImage("DataImg/46.png");
bergUV46 = loadImage("DataImg/47.png");
 bergUV47 = loadImage("DataImg/48.png"); 
 bergUV48 = loadImage("DataImg/49.png");
 bergUV49 = loadImage ("DataImg/50.png");
 bergUV50 = loadImage("DataImg/51.png");
 bergUV51 = loadImage("DataImg/52.png");
bergUV52 = loadImage("DataImg/53.png");
bergUV53 = loadImage("DataImg/54.png");
bergUV54 = loadImage("DataImg/55.png");
 bergUV55 = loadImage("DataImg/56.png"); 
 bergUV56 = loadImage("DataImg/57.png");
 bergUV57 = loadImage ("DataImg/58.png");
 bergUV58 = loadImage("DataImg/57.png");
 bergUV59 = loadImage("DataImg/58.png");
 bergUV60 = loadImage("DataImg/59.png"); 
 bergUV61 = loadImage("DataImg/60.png");
 bergUV62 = loadImage ("DataImg/61.png");
 bergUV63 = loadImage ("DataImg/62.png");
 bergUV64 = loadImage("DataImg/63.png");
 bergUV65 = loadImage("DataImg/64.png"); 
 bergUV66 = loadImage("DataImg/65.png");
 bergUV67 = loadImage ("DataImg/66.png");
 bergUV68 = loadImage("DataImg/67.png");
 bergUV69 = loadImage("DataImg/68.png");
 bergUV70 = loadImage("DataImg/69.png"); 
 bergUV71 = loadImage("DataImg/70.png");
 bergUV72 = loadImage ("DataImg/71.png");
 bergUV73 = loadImage ("DataImg/72.png");
 bergUV74 = loadImage ("DataImg/73.png");

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
  pointLight(255, 255, 255, mouseX-width/2, mouseY-height/2, 350);
 
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
  texture(bergUV1);

  if (millis() > timer * 1) {
    texture(bergUV2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 1.2) {
    texture(bergUV3);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 1.5) {
    texture(bergUV4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 1.7) {
    texture(bergUV5);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2) {
    texture(bergUV6);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2.2) {
    texture(bergUV7);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2.5) {
    texture(bergUV8);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2.7) {
    texture(bergUV9);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3) {
    texture(bergUV10);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3.2) {
    texture(bergUV11);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3.5) {
    texture(bergUV12);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 3.7) {
    texture(bergUV13);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4) {
    texture(bergUV14);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4.2) {
    texture(bergUV15);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4.5) {
    texture(bergUV16);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4.7) {
    texture(bergUV17);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5) {
    texture(bergUV18);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5.2) {
    texture(bergUV19);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5.5) {
    texture(bergUV20);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5.7) {
    texture(bergUV21);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6) {
    texture(bergUV22);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6.2) {
    texture(bergUV23);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6.5) {
    texture(bergUV24);
    nextChange = millis() + timer;
  }
 
  if (millis() > timer * 6.7) {
    texture(bergUV25);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7) {
    texture(bergUV26);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7.2) {
    texture(bergUV27);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7.5) {
    texture(bergUV28);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 7.7) {
    texture(bergUV29);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8) {
    texture(bergUV30);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8.2) {
    texture(bergUV31);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8.5) {
    texture(bergUV32);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 8.7) {
    texture(bergUV33);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9) {
    texture(bergUV34);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9.2) {
    texture(bergUV35);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9.5) {
    texture(bergUV36);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 9.7) {
    texture(bergUV37);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 10) {
    texture(bergUV38);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10.2) {
    texture(bergUV39);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10.5) {
    texture(bergUV40);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10.7) {
    texture(bergUV41);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 11) {
    texture(bergUV42);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 11.7) {
    texture(bergUV43);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 12) {
    texture(bergUV44);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 12.7) {
    texture(bergUV45);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 13) {
    texture(bergUV46);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 13.7) {
    texture(bergUV47);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 14) {
    texture(bergUV48);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 14.7) {
    texture(bergUV49);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 15) {
    texture(bergUV50);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 15.7) {
    texture(bergUV51);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 16) {
    texture(bergUV52);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 16.7) {
    texture(bergUV53);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 17) {
    texture(bergUV54);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 18) {
    texture(bergUV55);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 19) {
    texture(bergUV56);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 21) {
    texture(bergUV57);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 22) {
    texture(bergUV58);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 23) {
    texture(bergUV59);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 24) {
    texture(bergUV60);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 25) {
    texture(bergUV61);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 26) {
    texture(bergUV62);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 27) {
    texture(bergUV63);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 28) {
    texture(bergUV64);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 29) {
    texture(bergUV65);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 30) {
    texture(bergUV66);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 31) {
    texture(bergUV67);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 32) {
    texture(bergUV68);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 33) {
    texture(bergUV69);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 34) {
    texture(bergUV70);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 35) {
    texture(bergUV71);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 36) {
    texture(bergUV72);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 40) {
    texture(bergUV73);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 42) {
    texture(bergUV2);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 44) {
    texture(bergUV3);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 45) {
    texture(bergUV4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 47) {
    texture(bergUV5);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 49) {
    texture(bergUV6);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 51) {
    texture(bergUV7);
    nextChange = millis() + timer;
  }




    let temperatures = table.getColumn(1);
  drawColor(temperatures.slice(10,maxYear));
  
  if (maxYear < temperatures.length) {
  	maxYear = maxYear + 1; 
  } 

}

function drawColor(data) {
  let x = 0;
  
  // loop through data
  for(let t of data) {
    
    // map data to color
    let col = map(t, min(data), max(data), 30,  255);

        stroke(col, 30, 255); 
        strokeWeight(.5);
   
  }


}


