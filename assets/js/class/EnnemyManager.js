class EnnemyManager 
{
    constructor()
    {
        
        this.vx = 0;
        this.vy = 0;
        this.setAnchorPoint = 0.5, 0.5;

    }

    ennemyWave(level = 1, number = 1)
    {

        for(let i = 0; i < number; i++) {
            let randomEnnemyName = "assets/img/egg-"+randomInt(1,11)+".png";
            this.sprite = new Sprite(resources[randomEnnemyName].texture);
            this.sprite.anchor.set(this.setAnchorPoint);    
            this.vx = this.vx;
            this.vy = this.vy;

            stage.addChild(this.sprite);
                        
        } 
    }

    update()
    {
        this.sprite.position.y += 1;
        this.sprite.rotation += 0.1;

        contain(this.sprite, {x: 0 + this.sprite.width , width: w - this.sprite.width});  
    }
}