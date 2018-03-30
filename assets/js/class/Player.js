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
        

        contain(this.sprite, {x: 0, width: w});
        

        left.press = () => {
            this.vx = -5 * this.speed;
        };
        
        left.release = () => {
            if (!right.isDown && this.vy === 0) {
            this.vx = 0;
            }
        };
    
        right.press = () => {
            this.vx = 5 * this.speed;
        };
        right.release = () => {
            if (!left.isDown && this.vy === 0 ) {
                this.vx = 0;
            }
        };

    }
}