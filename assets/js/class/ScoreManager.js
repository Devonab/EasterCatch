let score = 0;

class ScoreManager {

    constructor()
    {
        
        let style = new TextStyle({
            fontFamily: "Verdana",
            fontSize: 25,
            fontWeight: "bold",
            fill: "white",
        });
        this.score = score;

        this.text = new Text("Score : " +this.score, style);
        this.text.x = 15;
        this.text.y = 45;

        stage.addChild(this.text);
    }

    update(newScore)
    {

        if(newScore == losingWhenFall ) {

            if(levelManager.level >= 10) {
                this.score = (this.score-newScore)+5;
            }else {
                this.score = this.score-newScore;
                
            }
            this.text.text = 'Score : '+this.score;
            
        }

        if(newScore == winWhenCatch ) {

            if(levelManager.level >= 10 ) {
             this.score = this.score+(newScore+5);
            } else {
             this.score = this.score+newScore;
            }
             this.text.text = 'Score : '+this.score;

            
        }

        
        
    }
}