let _list = new Array();
let miss = 0;
let catched = 0;
let initialHeight = 0;

let pop = new Howl({
    src: ['assets/audio/pop.mp3','../assets/audio/pop.ogg'],
    loop: false,
    autoplay: false,
    volume: 0.7
});

class Egg 
{

    static get list() { return _list; }
    static set list(value) { _list = value; }

    constructor(x, y, level)
    {
        let randomEnnemyName = "assets/img/egg-"+randomInt(1,11)+".png";
        

        this.sprite = new Sprite(resources[randomEnnemyName].texture);
        this.sprite.anchor.set(0.5);
        this.sprite.position.set(x , y);
        this.speed = 1 * levelManager.level;
        this.vy = 0;

        initialHeight = this.sprite.height;

        Egg.list.push(this);

        stage.addChild(this.sprite);


    }

   
   
    update()
    {
        this.sprite.position.y += 1 * this.speed;
        this.sprite.rotation += 0.1;


        if (this.sprite.position.y > renderer.height ) {
            this.sprite.destroy();
            Egg.list.splice(Egg.list.indexOf(this), 1);
            miss++;
            return scoreManager.update(10);
               
        }

        if(hitTestRectangle(player.sprite,this.sprite)) {
            this.sprite.scale.x -= .25;
            this.sprite.scale.y -= .25;

            if(this.sprite.height < initialHeight / 1.45 ) {
                this.sprite.destroy();
                Egg.list.splice(Egg.list.indexOf(this), 1);
                catched++;
                pop.play();
                return scoreManager.update(winWhenCatch);;
            }            
            
        }

        


    }
}