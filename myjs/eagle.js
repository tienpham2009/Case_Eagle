class Eagle {
    constructor(srcUrl) {
        this.frameId = 0;
        this.frameCount = 28;
        this.loaded = false;
        this.speed = 10;

        this.x = 0;
        this.y = 0;
        this.width = 250;
        this.height = 222;

        this.img = new Image();
        this.img.src = srcUrl;
        this.img.onload = () => {
            this.loaded = true;
        };

        this.eagleCanvas = document.getElementById("eagleCanvasId");
        this.eagleContext = this.eagleCanvas.getContext("2d");
    }

    update() {
        this.frameId++;
        this.frameId = this.frameId % this.frameCount;
    }

    draw() {
        this.eagleCanvas.width = this.eagleCanvas.width;

        this.eagleContext.drawImage(
            this.img,
            this.frameId * this.width,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            100,
            100)

    }



    run() {
        if (this.loaded === false) return;
        this.update();
        this.draw();

    }

    move(evt) {

        switch (evt.keyCode) {
            case 83 :
                this.y += this.speed;
                break;
            case 87:
                this.y -= this.speed;

                break;
            case 65:
                this.x -= this.speed;
                break;
            case 68 :
                this.x += this.speed;
                break;

        }
    }

}


function run() {
    eagle.run();
}

function init() {
    eagle = new Eagle("picture/eagle.png")
    setInterval(run, 1000 / 60);
    window.addEventListener('keydown', function (evt) {
            eagle.move(evt);
        }
    )
}