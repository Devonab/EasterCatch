const log = console.log;
let canvas = document.getElementById('game'),
    type = "WebGL",
    Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    Utils = PIXI.utils,
    Sprite = PIXI.Sprite,
    count = 120,
    newEnnemy = false,
    ennemyManager,
    level = 1;


if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

Utils.sayHello('Made by C. Concept ✋ (cconcept.lu)');

let app = new Application(
    800,
    600,
    {view: document.getElementById('game-canvas')}
);



let renderer = app.renderer,
    stage = new PIXI.Container(),
    w = app.screen.width,
    h = app.screen.height, 
    timer,
    scoreManager,
    player;

loader
  .add("bunny","assets/img/bunny.png")
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
    renderer.backgroundColor = 0xb3e0e6;
    player = new Player();
    ennemyManager = new EnnemyManager();
    ennemyManager.ennemyWave();
    scoreManager = new ScoreManager(level);
    timer = new GameTimer();
    renderer.render(stage);

    loop();

}

function loop() {
    
    player.update();
    scoreManager.update(level);
    ennemyManager.update();

    if(timer.count < 0 ) {
        swal("C'est fini !", "Vous avez un score de "+ level);

    } else {
        requestAnimationFrame(loop);
    }

    

    renderer.render(stage);
}