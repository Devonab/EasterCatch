class CloudManager
{
    constructor()
    {
        this.cloudsList = [];

        window.setInterval(function()
        {
            const sprite = (Math.random() > 0.5 ? "cloud-1" : "cloud-2");
            let name = "assets/img/"+sprite+'.png';
            this.cloud = new Sprite(resources[name].texture);
            this.cloud.anchor.set(0.5, 0.5);
            this.cloud.position.set(renderer.width * 1.3, renderer.height * Math.random() );

            // Diversify clouds size
            let minScale = 0.2;
            let maxScale = 1.2;
            let scale = Math.random() * (maxScale - minScale) + minScale;
            this.cloud.scale.set(scale, scale);

            stage.addChildAt(this.cloud, 0);
            this.cloudsList.push(this.cloud);
        }.bind(this), 4000);
    }

    update()
    {
        this.cloudsList.forEach(function(element, index, array) {
            element.position.x -= 1.5;

            if (element.position.x < -renderer.width * 0.3) {
                element.destroy();
                array.splice(0, 1);
            }
        });
    }
}
