class Obstacle{
	constructor(x, y, w, h, color){
		this.image = new Image();
		this.image.src = 'sandstone.png';
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = color;
	}
	draw(){
		//create(this.x, this.y, this.w, this.h, this.color);
		canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
}


class Obstacle2{
	constructor(x, y, w, h, color){
		this.image = new Image();
		this.image.src = 'sandstone.png';
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = color;
	}
	draw(){
		create(this.x, this.y, this.w, this.h, this.color);
		//canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
}

class Obstacle3{
	constructor(x, y, w, h, image){
		this.image = new Image();
		this.image.src = image;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		//this.color = color;
	}
	draw(){
		//create(this.x, this.y, this.w, this.h, this.color);
		canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
}


class Gateway{
	constructor(x, y, w, h, color, link){
		this.image = new Image();
		this.image.src = 'gateway.png';
		this.x = x;
		this.y = y+8;
		this.w = w;
		this.h = h;
		this.color = color;
		this.link = link;
	}
	draw(){
		if(this.color == 'transparent'){
		create(this.x, this.y, this.w, this.h, this.color);
		}
		else{
		canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
		}
	}
}






class Projectile{
	constructor(x, y, w, h, xSpeed, ySpeed, image){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		this.image = new Image();
		this.image.src = image;
	}
	
	draw(){
		//create(this.x, this.y, this.w, this.h, "red");
		//canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
	
	move(){
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
	
	
	
}


class movingPlatform{
	constructor(x, y, w, h, xSpeed, ySpeed, fx, fy){
		this.x = x;
		this.y = y;
		this.ox = x;
		this.oy = y;
		this.w = w;
		this.h = h;
		this.fx = fx;
		this.fy = fy;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}
	
	draw(){
		//create(this.x, this.y, this.w, this.h, "red");
		//canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
	
	move(){
		if(this.xSpeed > 0){
			if(this.x >= this.fx){
				this.xSpeed = -this.xSpeed;
				this.fx = [this.ox, this.ox = this.fx][0];
		}			
		}
		
		if(this.xSpeed < 0){
			if(this.x <= this.fx){
				this.xSpeed = -this.xSpeed;
				this.fx = [this.ox, this.ox = this.fx][0];
		}			
		}
		
		if(this.ySpeed > 0){
			if(this.y >= this.fy){
				this.ySpeed = -this.ySpeed;
				this.fy = [this.oy, this.oy = this.fy][0];
		}			
		}
		
		if(this.ySpeed < 0){
			if(this.y <= this.fy){
				this.ySpeed = -this.ySpeed;
				this.fy = [this.oy, this.oy = this.fy][0];
		}			
		}
		
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
	
	
	
}