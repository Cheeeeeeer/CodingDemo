class particles{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = random(4,42);
    }
    update(){
        this.x += random(-10,10);
        this.y += random(-10,10);
        
        //add some constarin to keep particles inside the screen
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
    show(){
        noStroke();
        let px = floor(this.x/vScale);
        let py = floor(this.y/vScale);
        let col = video.get(px,py);
        let a = slider.value();
        console.log(col);
        
        fill(col[0],col[1],col[2],a);

        ellipse(this.x,this.y,this.size,this.size);
    }
}