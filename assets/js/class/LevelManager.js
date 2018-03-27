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

        this.text = new Text("Level : " +level, style);
        this.text.x = 15;
        this.text.y = 15;

        stage.addChild(this.text);
    }

    update()
    {

    }
}