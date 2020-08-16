class Box {
    constructor(x, y, width, height) {
      
      
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.image = loadImage("Sprites/dustbingreen.png");
      
     
    }
    display(){
   
      
      
      imageMode(CENTER);
      fill(255)
      image(this.image,this.x, this.y, this.width, this.height);
  
    }
  };
  