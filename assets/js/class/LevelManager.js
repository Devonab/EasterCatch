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
            player.speed = player.speed * 1.2;
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
            player.speed = player.speed * 1.2;
        }

        if(catched >= 100 ) {
            this.level = 11;
            this.text.text = "Level : " +this.level;
            level = this.level;
            player.speed = player.speed * 1.2;
        }

    }
}
