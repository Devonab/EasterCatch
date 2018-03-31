const log = console.log;
let canvas = document.getElementById('game'),
    type = "WebGL",
    Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    Utils = PIXI.utils,
    Sprite = PIXI.Sprite,
    canvasHeight = window.innerHeight - 200,
    count = 120,
    secondWave = false,
    thirdWave = false,
    fourthWave = false,
    fifthWave = false,
    sixthWave = false,
    seventhWave = false,
    level = 1,
    egg;


    const music = new Howl({
        src: ['assets/audio/the_builder.mp3', 'assets/audio/the_builder.ogg'],
        loop: true,
        autoplay: true,
        volume: 0.5
    });

    const fail = new Howl({
      src: ['assets/audio/fail.mp3', 'assets/audio/fail.ogg'],
      loop: false,
      autoplay: false,
      volume: 0.7
    });

    const win = new Howl({
      src: ['assets/audio/win.mp3', 'assets/audio/win.ogg'],
      loop: false,
      autoplay: false,
      volume: 0.7
    });


if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

Utils.sayHello('Made by C. Concept ✋ (cconcept.lu)');

let app = new Application(
    800,
    canvasHeight,
    {view: document.getElementById('game-canvas'), transparent: true}
);



let renderer = app.renderer,
    stage = new PIXI.Container(),
    w = app.screen.width,
    h = app.screen.height,
    timer,
    scoreManager,
    levelManager,
    spawningRate = 1000,
    player,

    // Variables pour gérer la difficulté (voir aussi dans le ScoreManager & LevelManager)
    losingWhenFall = 20,
    winWhenCatch = 15,
    wave1Tick = 1000,
    wave2Tick = 2000,
    wave3Tick = 2500,
    wave4Tick = 1000,
    wave5Tick = 6500,
    wave6Tick = 7500,
    wave7Tick = 8500;

loader
  .add("bunny","assets/img/bunny.png")
  .add("bunny2","assets/img/bunny-2.png")
  .add("bunny3", "assets/img/bunny-3.png")
  .add("assets/img/cloud-1.png")
  .add('assets/img/cloud-2.png')
  .add("assets/img/egg-1.png")
  .add("assets/img/egg-2.png")
  .add("assets/img/egg-3.png")
  .add("assets/img/egg-4.png")
  .add("assets/img/egg-5.png")
  .add("assets/img/egg-6.png")
  .add("assets/img/egg-7.png")
  .add("assets/img/egg-8.png")
  .add("assets/img/egg-9.png")
  .add("assets/img/egg-10.png")
  .add("assets/img/egg-11.png")
  .load(init);


function init() {
    //renderer.backgroundColor = 0xb3e0e6;
    player = new Player();
    levelManager = new LevelManager();
    scoreManager = new ScoreManager();
    timer = new GameTimer();
    renderer.render(stage);

    let wave1 = setInterval( () => {
        egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
    }, wave1Tick);


   loop();

}



function loop() {
    player.update();
    levelManager.update();

    Egg.list.map((element) =>
    {
        element.update();
    });

    scoreManager.update(score);

    if(timer.count < 0 || scoreManager.score < 0) {
      music.stop();
      if(scoreManager.score < 0) { 
        scoreManager.score = 0;
        fail.play();


        swal("On dirait que vous avez perdu...","Néanmoins, sachez que vous avez attrapé "+catched+" oeufs tout en en laissant tomber "+miss+"... Vous ferez mieux la prochaine fois !", {
            closeOnEsc: false,
            closeOnClickOutside: false,
            buttons: {
              cancel: 'Quitter',
              save: 'Enregistrer mon score',
              retry: 'Réessayer'
            }
          }).then((value) => { 

            switch(value) {
              case "cancel":
                 window.location = 'index.html';
                break;
              case "save":
                alert('save');
                break;
              case "retry":
                window.location.href = window.location.href;
                break;
              default:
                 window.location = 'index.html';

            }
          });


      } else {
        win.play();
        swal("Wow, bravo !", "Vous avez réussi ! Le tout avec un score de "+ scoreManager.score+ " en attrapant "+catched+" oeufs. "+miss+" oeufs n'ont jamais atteint votre panier ! Vous êtes parvenu avec brio jusqu'au level "+levelManager.level+" !", {
            closeOnEsc: false,
            closeOnClickOutside: false,
            buttons: {
              cancel: 'Quitter',
              save: 'Enregistrer mon score',
              retry: 'Réessayer'
            }
        }).then((value) => { 

            switch(value) {
              case "cancel":
                 window.location = 'index.html';
                break;
              case "save":
                alert('save');
                break;
              case "retry":
                window.location.href = window.location.href;
                break;
              default:
                 window.location = 'index.html';

            };

      });
        
    } else {
        requestAnimationFrame(loop);
    }

    renderer.render(stage);
}
