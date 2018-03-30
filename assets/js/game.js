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
    count = 120,
    level = 1,
    egg;

    const music = new Howl({
        src: ['assets/audio/the_builder.mp3', 'assets/audio/the_builder.ogg'],
        loop: true,
        autoplay: true,
        volume: 0.5
    });


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
    levelManager,
    spawningRate = 1000,
    player,

    // Variables pour gérer la difficultée
    losingWhenFall = 10,
    winWhenCatch = 20;

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


function init() 
{
    renderer.backgroundColor = 0xb3e0e6;
    player = new Player();
    levelManager = new LevelManager();
    scoreManager = new ScoreManager();
    timer = new GameTimer();
    renderer.render(stage);

    
    loop();

}

let spawnInterval = setInterval( () => {
    egg = new Egg(randomInt(48, renderer.width - 48), randomInt(-450, -100));
}, 500);

function loop() 
{
    player.update();
    levelManager.update();

    Egg.list.map((element) =>
    {
        element.update();
    });

    scoreManager.update(score);

    if(timer.count < 0 ) {
        swal("C'est fini !", "Vous avez un score de "+ scoreManager.score+ " en attrapant "+catched+" oeufs. "+miss+" oeufs n'ont jamais atteint votre panier !", {
            closeOnEsc: false,
            closeOnClickOutside: false
        });

    } else {
        requestAnimationFrame(loop);
    }

    renderer.render(stage);
}