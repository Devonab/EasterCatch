
// WAVE 2
let checkForWave2 = setInterval(function() {

  if (secondWave == true) 
  {
    wave2();
    clearInterval(checkForWave2);
  }
}, 1000);

function wave2() 
{
    setInterval( () => {
        egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
    }, wave2Tick);
}


//------------------------------------------
// WAVE 3
let checkForWave3 = setInterval(function() {

  if (thirdWave == true) {
    wave3();
    clearInterval(checkForWave3);
  }
}, 1000);

function wave3() {
    setInterval( () => {
        egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
    }, wave3Tick);
}


//------------------------------------------
// WAVE 4
let checkForWave4 = setInterval(function() {

  if (fourthWave == true) {
    wave4();
    clearInterval(checkForWave4);
  }
}, 1000);

function wave4() {
    setInterval( () => {
      log('wave4');
        egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
    }, wave4Tick);
}

//------------------------------------------
// WAVE 5
let checkForWave5 = setInterval(function() {

  if (fifthWave == true) {
    wave5();
    clearInterval(checkForWave4);
  }
}, 1000);

function wave5() {
    setInterval( () => {
        egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
    }, wave5Tick);
}


//------------------------------------------
// WAVE 6
let checkForWave6 = setInterval(function() {

  if (sixthWave == true) {
    wave6();
    clearInterval(checkForWave6);
  }
}, 1000);

function wave6() {
    setInterval( () => {
        egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
    }, wave6Tick);
}


//------------------------------------------
// WAVE 6
let checkForWave7 = setInterval(function() {

  if (seventhWave == true) {
    wave7();
    clearInterval(checkForWave6);
  }
}, 1000);

function wave7() {
    setInterval( () => {
        egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
    }, wave7Tick);
}