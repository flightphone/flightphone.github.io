export function DrawMap(id) {
    this.mSVG = document.getElementById(id);
    this.isDrawing = false;
    this.isLoad = true;
    this.mode = "rect";
    this.action = "add";
    this.objects = new Map();
    this.n = 0;
    this.active = 0;
    this.activepoint = -1;

    this.isLoad = true;
    this.x = 0;
    this.y = 0;
    this.buferImage = new Image();
    this.image = document.createElementNS('http://www.w3.org/2000/svg', 'image'); //new Image();
    this.input = document.createElement("input");
    this.input.setAttribute("type", "file");

    //load image
    this.loadImage = function () {

        this.input.click()
    }

    this.input.onchange = (ev) => {
        const file = ev.target.files[0]; // get the file

        if (!file)
            return;

        const blobURL = URL.createObjectURL(file);
        this.buferImage.src = blobURL;
        this.image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', blobURL);

    }

    this.buferImage.addEventListener("load", (e) => {
        //<!-- <image href="/img/most.jpeg" style="width: 2160px;" />  viewBox="0 0 2160 3840"-->
        this.w = this.buferImage.width;
        this.h = this.buferImage.height;
        this.image.style.width = `${this.w}px`;
        let vb = `0 0 ${this.w} ${this.h}`;
        this.mSVG.setAttribute("viewBox", vb);
        //this.mSVG.setAttribute("width", `${this.w}px`);
        this.mSVG.appendChild(this.image);
        this.isLoad = true;

    });


    this.add = (x, y) => {
        this.n += 1;
        if (this.active > 0)
            this.deactivate(this.active);
        this.active = this.n;
        let p = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        p.setAttribute("cx", x);
        p.setAttribute("cy", y);
        p.setAttribute("r", 5);
        p.setAttribute("class", "image-mapper-point");
        p.setAttribute("data-index", this.active);
        p.setAttribute("data-point", 0);
        let obj = {
            ftype: this.mode,
            points: [{ x: x, y: y }],
            circles: [p]
        }
        if (this.mode == "polygon") {
            //create polygon
            let poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            poly.setAttribute("class", "image-mapper-shape");
            poly.setAttribute("data-index", this.active);
            obj.element = poly;

            let poi = this.mSVG.createSVGPoint();
            poi.x = x;
            poi.y = y;
            obj.polygon = [poi];
            poly.points.appendItem(poi);
            this.mSVG.appendChild(poly);

        }

        this.objects.set(this.active, obj);
        this.action = "edit"
        this.mSVG.appendChild(p);
    }

    this.edit = (x, y) => {
        let obj = this.objects.get(this.active);
        if (!obj) {
            return;
        }

        let p = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        p.setAttribute("cx", x);
        p.setAttribute("cy", y);
        p.setAttribute("r", 5);
        p.setAttribute("class", "image-mapper-point");
        p.setAttribute("data-index", this.active);
        p.setAttribute("data-point", obj.points.length);
        obj.points.push({ x: x, y: y })
        obj.circles.push(p);
        this.mSVG.appendChild(p);

        let ftype = obj.ftype;
        if (ftype == "rect") {
            this.createRect(obj);
            this.action = "add";
        }
        if (ftype == "circle") {
            this.createCircle(obj);
            this.action = "add";
        }

        if (ftype == "polygon") {
            this.createPolygon(obj);
            //this.action = "add";
        }

        this.activate(this.active);
    };

    this.deactivate = (active) => {
        let obj = this.objects.get(active);
        if (!obj)
            return
        for (let i = 0; i < obj.circles.length; i++) {
            obj.circles[i].setAttribute("class", "hide-point");
        }
        if (!obj.element)
            return;
        obj.element.classList.remove("selected");
    }

    this.activate = (active) => {
        let obj = this.objects.get(active);
        if (!obj)
            return
        for (let i = 0; i < obj.circles.length; i++) {
            obj.circles[i].setAttribute("class", "image-mapper-point");
        }
        if (!obj.element)
            return;
        obj.element.classList.add("selected");
    }

    this.createRect = (obj) => {
        let x1 = Math.min(obj.points[0].x, obj.points[1].x);
        let x2 = Math.max(obj.points[0].x, obj.points[1].x);
        let y1 = Math.min(obj.points[0].y, obj.points[1].y);
        let y2 = Math.max(obj.points[0].y, obj.points[1].y);
        let p = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        p.setAttribute("x", x1);
        p.setAttribute("y", y1);
        p.setAttribute("width", (x2 - x1));
        p.setAttribute("height", (y2 - y1));
        p.setAttribute("class", "image-mapper-shape");
        p.setAttribute("data-index", this.active);
        obj.element = p;
        this.mSVG.appendChild(p);
    }

    this.createCircle = (obj) => {
        let x = obj.points[0].x;
        let y = obj.points[0].y;
        let r = (obj.points[0].x - obj.points[1].x) * (obj.points[0].x - obj.points[1].x) +
            (obj.points[0].y - obj.points[1].y) * (obj.points[0].y - obj.points[1].y);
        r = Math.sqrt(r);
        let p = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        p.setAttribute("cx", x);
        p.setAttribute("cy", y);
        p.setAttribute("r", r);
        p.setAttribute("class", "image-mapper-shape");
        p.setAttribute("data-index", this.active);
        obj.element = p;
        this.mSVG.appendChild(p);
    }

    this.createPolygon = (obj) => {
        let n = obj.points.length;
        let poi = this.mSVG.createSVGPoint();
        poi.x = obj.points[n - 1].x;
        poi.y = obj.points[n - 1].y;
        obj.polygon.push(poi);
        obj.element.points.appendItem(poi);

    }


    this.move = (active, point, dx, dy) => {
        let obj = this.objects.get(active);
        if (point == -1)
            for (let i = 0; i < obj.points.length; i++) {
                obj.points[i].x += dx;
                obj.points[i].y += dy;
            }
        else {
            obj.points[point].x += dx;
            obj.points[point].y += dy;
        }
    }
    this.render = (active) => {
        let obj = this.objects.get(active);
        if (!obj)
            return;
        for (let i = 0; i < obj.circles.length; i++) {
            let a = obj.circles[i];
            let x = obj.points[i].x;
            let y = obj.points[i].y;
            a.setAttribute("cx", x);
            a.setAttribute("cy", y);
        }
        let ftype = obj.ftype;
        if (ftype == "rect") {
            this.renderRect(obj);
        }
        if (ftype == "circle") {
            this.renderCircle(obj);
        }
        if (ftype == "polygon") {
            this.renderPolygon(obj);
        }


    };
    this.renderRect = (obj) => {
        if (obj.points.length < 2)
            return;
        let x1 = Math.min(obj.points[0].x, obj.points[1].x);
        let x2 = Math.max(obj.points[0].x, obj.points[1].x);
        let y1 = Math.min(obj.points[0].y, obj.points[1].y);
        let y2 = Math.max(obj.points[0].y, obj.points[1].y);
        let p = obj.element;
        p.setAttribute("x", x1);
        p.setAttribute("y", y1);
        p.setAttribute("width", (x2 - x1));
        p.setAttribute("height", (y2 - y1));

    }

    this.renderCircle = (obj) => {
        if (obj.points.length < 2)
            return;
        let x = obj.points[0].x;
        let y = obj.points[0].y;
        let r = (obj.points[0].x - obj.points[1].x) * (obj.points[0].x - obj.points[1].x) +
            (obj.points[0].y - obj.points[1].y) * (obj.points[0].y - obj.points[1].y);
        r = Math.sqrt(r);
        let p = obj.element;
        p.setAttribute("cx", x);
        p.setAttribute("cy", y);
        p.setAttribute("r", r);
    }


    this.renderPolygon = (obj) => {
        for (let i = 0; i < obj.points.length; i++) {
            let a = obj.polygon[i];
            a.x = obj.points[i].x;
            a.y = obj.points[i].y;
        }
    };

    this.click = (x, y) => {
        if (this.action == "add")
            this.add(x, y);
        else
            this.edit(x, y);
    }


    this.delete = () => {
        let obj = this.objects.get(this.active);
        this.active = 0;
        this.action = "add";
        if (!obj)
            return
        obj.deleted = true;
        for (let i = 0; i < obj.circles.length; i++) {
            this.mSVG.removeChild(obj.circles[i])
        }
        if (!obj.element)
            return;
        this.mSVG.removeChild(obj.element)
    }

    this.scale = (x) =>
    {
        return ((x * this.w) / this.mSVG.width.baseVal.value);
    }

    this.mSVG.addEventListener("mousedown", (e) => {
        this.x = this.scale(e.offsetX);
        this.y = this.scale(e.offsetY);


        if (e.target.dataset.index) {
            let active = parseInt(e.target.dataset.index);
            //edit figure
            if (this.action == "edit") {
                if (this.active == active) {
                    this.action = "add";
                }
                else
                    return;
            }

            if (active != this.active) {
                this.deactivate(this.active)
                this.active = active;
                this.activate(this.active);
            }
            this.active = active;


            if (e.target.dataset.point != null)
                this.activepoint = parseInt(e.target.dataset.point)
            else {
                e.target.classList.add("image-move");
                this.activepoint = -1;
            }
            this.isDrawing = true
        }
        else {
            this.click(this.x, this.y);
        }
    });

    window.addEventListener("mouseup", (e) => {
        if (this.isDrawing) {
            this.x = 0;
            this.y = 0;
            this.isDrawing = false;
            if (this.active > 0) {
                let obj = this.objects.get(this.active)
                if (!obj.element)
                    return;
                obj.element.classList.remove("image-move");
            }
        }
    });


    this.mSVG.addEventListener("mousemove", (e) => {
        if (!this.isLoad)
            return;
        if (this.isDrawing) {
            this.move(this.active, this.activepoint, this.scale(e.offsetX) - this.x, this.scale(e.offsetY) - this.y);
            this.x = this.scale(e.offsetX);
            this.y = this.scale(e.offsetY);
            this.render(this.active);
        }

    });

}