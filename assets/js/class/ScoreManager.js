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

        this.text = new Text("Score : " +score, style);
        this.text.x = 15;
        this.text.y = 45;

        stage.addChild(this.text);
    }

    update()
    {

    }
}