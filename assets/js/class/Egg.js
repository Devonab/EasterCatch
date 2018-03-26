let _list = new Array();

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
        this.speed = randomInt(1,2) * level;
        this.vy = 0;

        Egg.list.push(this);

        stage.addChild(this.sprite);

    }

    update()
    {
        this.sprite.position.y += 1;
        this.sprite.rotation += 0.1;

        if (this.sprite.position.y > renderer.height * 1.1) {
            this.sprite.destroy();
            Egg.list.splice(Egg.list.indexOf(this), 1);
            
        }  
    }
}