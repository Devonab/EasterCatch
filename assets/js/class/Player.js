class Player {

    constructor()
    {
        this.sprite = new Sprite(resources["bunny"].texture);

        this.sprite.position.set(renderer.width / 2, renderer.height - this.sprite.height);

        this.vx = 0;
        this.vy = 0;
        this.speed = 1;

        stage.addChild(this.sprite);
    }

    update() {

        let left = keyboard(37),
            right = keyboard(39)

        this.sprite.position.x += this.vx;
        this.sprite.position.y += this.vy;  
        

        contain(this.sprite, {x: 0, width: w});

        left.press = () => {
            this.vx = -5;
            this.vy = 0;
        };
        
        left.release = () => {
            if (!right.isDown && this.vy === 0) {
            this.vx = 0;
            let egg = new Egg(100, 100, 1);
            }
        };
    
        right.press = () => {
            this.vx = 5;
            this.vy = 0;
        };
        right.release = () => {
            if (!left.isDown && this.vy === 0 ) {
                this.vx = 0;
            }
        };

    }
}