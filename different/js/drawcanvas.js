export function DrawCanvas(id, radius, color, alfa) {
    this.main = document.getElementById(id)
    this.main.style.padding = 0;
    this.main.style.overflow = "auto";
    this.main.style.display = "flex";
    this.main.style.justifyContent = "center";
    this.main.style.alignItems = "center";


    this.isDrawing = false;
    this.isLoad = false;
    this.x = 0;
    this.y = 0;
    this.margin = 3;

    this.h;
    this.w;
    this.radius = radius;
    this.color = color;
    this.alfa = alfa;

    this.myPics = document.createElement("canvas");
    this.myPics.style.margin = 0;

    //this.setSize();

    this.hc = this.main.clientHeight - this.margin;
    this.wc = this.main.clientWidth - this.margin;
    this.myPics.style.width = `${this.wc}px`;
    this.myPics.style.height = `${this.hc}px`;
    this.myPics.setAttribute("width", this.wc);
    this.myPics.setAttribute("height", this.hc);
    this.context = this.myPics.getContext("2d");


    this.main.appendChild(this.myPics)

    this.myPics2 = document.createElement("canvas")
    this.context2 = this.myPics2.getContext("2d");

    this.mask = document.createElement("canvas")
    this.maskCtx = this.mask.getContext("2d");

    this.image = new Image();
    this.input = document.createElement("input");
    this.input.setAttribute("type", "file");

    //resize

    //load image
    this.loadImage = function () {
        this.input.click()
    }

    this.input.onchange = (ev) => {
        const file = ev.target.files[0]; // get the file
        const blobURL = URL.createObjectURL(file);
        this.image.src = blobURL;
    }
    window.addEventListener('resize', () => {

        this.setSize();
        if (this.isLoad)
            this.setImage();
    }, true);

    this.image.addEventListener("load", (e) => {
        this.context.drawImage(this.image, 0, 0, this.wc, this.hc);
        this.w = this.image.width;
        this.h = this.image.height;
        this.myPics2.setAttribute("width", this.w);
        this.myPics2.setAttribute("height", this.h);
        this.context2 = this.myPics2.getContext("2d");

        this.mask.setAttribute("width", this.w);
        this.mask.setAttribute("height", this.h);
        this.maskCtx = this.mask.getContext("2d");
        this.maskCtx.fillStyle = "black";
        this.maskCtx.fillRect(0, 0, this.w, this.h);

        this.isLoad = true;

    });

    this.myPics.addEventListener("mousemove", (e) => {
        if (!this.isLoad)
            return;
        if (this.isDrawing) {
            this.drawLine(this.context2, this.x, this.y, e.offsetX, e.offsetY);
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
        else {
            this.drawcursor(e.offsetX, e.offsetY)
        }
    });

    this.myPics.addEventListener("mousedown", (e) => {
        if (!this.isLoad)
            return;
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.isDrawing = true;

    });

    window.addEventListener("mouseup", (e) => {
        if (!this.isLoad)
            return;
        if (this.isDrawing) {
            this.drawLine(this.context2, this.x, this.y, e.offsetX, e.offsetY);
            this.x = 0;
            this.y = 0;
            this.isDrawing = false;
        }
    });

    this.setSize = () => {
        this.hc = this.main.clientHeight - this.margin;
        this.wc = this.main.clientWidth - this.margin;
        this.myPics.style.width = `${this.wc}px`;
        this.myPics.style.height = `${this.hc}px`;
        this.myPics.setAttribute("width", this.wc);
        this.myPics.setAttribute("height", this.hc);
        this.context = this.myPics.getContext("2d");
    };

    this.setImage = () => {
        this.context.clearRect(0, 0, this.wc, this.hc);
        this.context.globalAlpha = 1.0;
        this.context.drawImage(this.image, 0, 0, this.wc, this.hc);
        this.context.globalAlpha = this.alfa;
        this.context.drawImage(this.myPics2, 0, 0, this.wc, this.hc);

    };

    this.drawcursor = (x1, y1) => {
        this.setImage();
        this.context.beginPath();
        this.context.arc(x1, y1, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
    };

    this.drawLine = (ctx, x1, y1, x2, y2) => {
        x1 = x1 * this.w / this.wc
        y1 = y1 * this.h / this.hc

        x2 = x2 * this.w / this.wc
        y2 = y2 * this.h / this.hc

        if ((x1 == x2) && (y1 == y2))
            return



        ctx.fillStyle = this.color;
        this.maskCtx.fillStyle = "rgba(255, 255, 255, 1)"

        let r = this.radius;

        if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
            let n = Math.abs(x2 - x1)
            let sign = Math.sign(x2 - x1)
            for (let i = 0; i <= n; i++) {
                let x0 = x1 + i * sign;
                let y0 = y1 + (x0 - x1) * (y2 - y1) / (x2 - x1)
                ctx.beginPath();
                ctx.arc(x0, y0, r, 0, 2 * Math.PI);
                ctx.fill();

                this.maskCtx.beginPath();
                this.maskCtx.arc(x0, y0, r, 0, 2 * Math.PI);
                this.maskCtx.fill();
            }
        }
        else {
            let n = Math.abs(y2 - y1)
            let sign = Math.sign(y2 - y1)
            for (let i = 0; i <= n; i++) {
                let y0 = y1 + i * sign;
                let x0 = x1 + (y0 - y1) * (x2 - x1) / (y2 - y1)
                ctx.beginPath();
                ctx.arc(x0, y0, r, 0, 2 * Math.PI);
                ctx.fill();

                this.maskCtx.beginPath();
                this.maskCtx.arc(x0, y0, r, 0, 2 * Math.PI);
                this.maskCtx.fill();
            }
        }

        this.setImage()
    }

    this.exportImage = () => {
        if (!this.isLoad)
            return;
        const downloadLink = document.createElement('a');
        const myPics3 = document.createElement("canvas")
        myPics3.setAttribute("width", this.w);
        myPics3.setAttribute("height", this.h);
        let context3 = myPics3.getContext("2d");
        context3.drawImage(this.image, 0, 0)
        context3.globalAlpha = this.alfa;
        context3.drawImage(this.myPics2, 0, 0)
        const dataURL = myPics3.toDataURL('image/png');
        const url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
        downloadLink.setAttribute('href', url);
        downloadLink.setAttribute('download', "image.png");
        downloadLink.click();
    }

    this.exportMask = () => {
        if (!this.isLoad)
            return;
        const downloadLink = document.createElement('a');
        const myPics3 = document.createElement("canvas")
        myPics3.setAttribute("width", this.w);
        myPics3.setAttribute("height", this.h);
        const context3 = myPics3.getContext("2d");
        let imgData = this.maskCtx.getImageData(0, 0, this.w, this.h);

        for (let i = 0; i < imgData.data.length; i += 4) {
            if (imgData.data[i] > 0) {
                imgData.data[i] = 0;
                imgData.data[i + 1] = 0;
                imgData.data[i + 2] = 0;
                imgData.data[i + 3] = 0;
            }
        }
        context3.putImageData(imgData, 0, 0)
        const dataURL = myPics3.toDataURL('image/png');
        const url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
        downloadLink.setAttribute('href', url);
        downloadLink.setAttribute('download', "mask.png");
        downloadLink.click();
    }

}
