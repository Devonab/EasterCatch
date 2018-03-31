let texture2 = PIXI.Texture.fromImage('assets/img/bunny-2.png'),
    texture3 = PIXI.Texture.fromImage('assets/img/bunny-3.png'),
    body = document.getElementsByTagName('body')[0];
;

class LevelManager {

    constructor()
    {

        let style = new TextStyle({
            fontFamily: "Verdana",
            fontSize: 25,
            fontWeight: "bold",
            fill: "white",
        });

        this.level = 1;

        this.text = new Text("Level : " +this.level, style);
        this.text.x = 15;
        this.text.y = 15;

        stage.addChild(this.text);
    }

    update()
    {
        if(catched >= 10 ) {
            this.level = 2;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = 1.2;
            secondWave = true;
            player.sprite.texture = texture2;
        }

        if(catched >= 20 ) {
            this.level = 3;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = player.speed * 1.2;

        }

        if(catched >= 30 ) {
            this.level = 4;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = player.speed * 1.2;
            player.sprite.texture = texture3;
            body.classList.add('stage2');
        }

        if(catched >= 40 ) {
            this.level = 5;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = player.speed * 1.2;
        }

        if(catched >= 50 ) {
            this.level = 6;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = player.speed * 1.2;
            thirdWave = true;
        }

        if(catched >= 60 ) {
            this.level = 7;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = player.speed * 1.2;
        }

        if(catched >= 70 ) {
            this.level = 8;
            this.text.text = "Level : " +this.level;
            level = this.level;
            fourthWave = true;

        }

        if(catched >= 80 ) {
            this.level = 9;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = player.speed * 1.2;
        }

        if(catched >= 90 ) {
            this.level = 10;
            this.text.text = "Level : " +this.level;
            level = this.level;
            fifthWave = true;
        }

        if(catched >= 100 ) {
            this.level = 11;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 120 ) {
            this.level = 12;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 130 ) {
            this.level = 13;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 140 ) {
            this.level = 14;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 150 ) {
            this.level = 15;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 170 ) {
            this.level = 16;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 190 ) {
            this.level = 17;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 200 ) {
            this.level = 18;
            this.text.text = "Level : " +this.level;
            level = this.level;
        }

        if(catched >= 220 ) {
            this.level = 19;
            this.text.text = "Level : " +this.level;
            level = this.level;
            sixthWave = true;
        }

    }
}
