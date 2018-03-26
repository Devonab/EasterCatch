class ScoreManager {

    constructor(level)
    {
        
        let style = new TextStyle({
            fontFamily: "Verdana",
            fontSize: 25,
            fontWeight: "bold",
            fill: "white",
        });

        this.level = level;

        this.text = new Text("Level : " +level, style);
        this.text.x = 15;
        this.text.y = 15;

        stage.addChild(this.text);
    }

    update()
    {

    }
}