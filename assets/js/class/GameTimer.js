class GameTimer {

    constructor(level)
    {
        
        let style = new TextStyle({
            fontFamily: "Verdana",
            fontSize: 25,
            fontWeight: "bold",
            fill: "white",
        });

        this.count =120;
        this.timer = new Text(this.count, style);
        this.timer.x = renderer.width - this.timer.width;
        this.timer.y = 15;

        stage.addChild(this.timer);
        
        setInterval( () => {
            this.timer.text = this.count--;
        }, 1000)

    }

    
}