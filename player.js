class Player{
      constructor(){
			this.image = new Image();
			this.image.src = 'right.png';
			 this.ox;
			this.oy;
			this.jumpCount = 0;
          this.w = canvas.height * 0.07;
			 this.h = this.w * (1040/900);
          this.x = spawnx;
          this.y = spawny;
          this.color = 'red';
          this.SpeedX = 0;
          this.SpeedY=0;
			 this.gravity = 9;
			 this.friction = levelFriction;
			 this.maxSpeed = 12; //useless
			this.jumpHeight = 62.2;
			this.acceleration = 1; // also pretty useless
      }
      
      draw(){
			canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
			//create(this.x, this.y, this.w, this.h, this.color);
      }	
	
		respawn(){
			this.SpeedX = 0;
			this.SpeedY = 0;
			this.x = spawnx;
         this.y = spawny;
		}
	  collisionDetect(){
		  if(this.x <= 0){
              this.SpeedX = 0;
				 this.x = 1;
          }
          else if (this.x >= canvas.width-this.w){
              this.SpeedX = 0;
				 this.x = canvas.width-this.w-1;
          }
          if(this.y <= 0){
              this.SpeedY = 0
				 this.y = 1;
          }
          else if (this.y >= canvas.height-this.h){
              this.SpeedY = 0;
				 this.y = canvas.height - this.h - 1;
				  this.jumpCount = 0;
          }	
		  
		  platforms.forEach(platform =>{
			  if (this.x + this.w > platform.x && this.x < platform.x + platform.w) {
				  if (this.y + this.h > platform.y && this.y < platform.y + platform.h) {
							if(this.y <= platform.y){
		this.y = platform.y - 1 - this.h;
		this.SpeedY= 0;
		this.jumpCount = 0;
		
		}
		else if(this.y >= platform.y - platform.h){
			this.SpeedY= 0;
			this.y = platform.y + platform.h+1;
			
		}
						}
			  }
		  });
		  
		  
		  respawns.forEach(platform =>{
			  if (this.x + this.w > platform.x && this.x < platform.x + platform.w) {
				  if (this.y + this.h > platform.y && this.y < platform.y + platform.h) {
							if(this.y <= platform.y){
		this.respawn();
		}
		else if(this.y >= platform.y - platform.h){
			this.respawn();
			
		}
						}
			  }
		  });
		  
		  
		  projectiles.forEach(platform =>{
			  if (this.x + this.w > platform.x && this.x < platform.x + platform.w) {
				  if (this.y + this.h > platform.y && this.y < platform.y + platform.h) {
							if(this.y <= platform.y){
		this.respawn();
		}
		else if(this.y >= platform.y - platform.h){
			this.respawn();
			
		}
						}
			  }
		  });
		  
		  
		  gateways.forEach(gateway =>{
			  if((this.x <= gateway.w + gateway.x && this.x >= gateway.x) || (this.x + this.w >= gateway.x && this.x + this.w <= gateway.x + gateway.w)){
		if((this.y <= gateway.h + gateway.y && this.y >= gateway.y) || (this.y + this.h >= gateway.y && this.y  <= gateway.y + gateway.h)){
			//this.SpeedX = 0;
			//this.SpeedY = 0;
			this.image = null; 
			music.pause();
			window.location.href = gateway.link;
		}
			  }
		  });
		  
		  movingPlatforms.forEach(platform =>{
			  if (this.x + this.w > platform.x && this.x < platform.x + platform.w) {
				  if (this.y + this.h > platform.y && this.y < platform.y + platform.h) {
							if(this.y <= platform.y){
		this.y = platform.y - 1 - this.h;
		this.SpeedY= 0;
		this.x += platform.xSpeed * 2;
		//this.SpeedX += (platform.xSpeed - this.SpeedX) * this.friction;
		this.jumpCount = 0;
		}
		else if(this.y >= platform.y - platform.h){
			this.SpeedY= 0;
			this.y = platform.y + platform.h+1;
			
		}
						}
			  }
		  });
		  
		  
		  
		  
		}
		 
	  jump(){
		 if(this.jumpCount <= 1){
		 this.jumpCount += 1;
       this.SpeedY =-this.jumpHeight;
		 }
	  }
      move(){
			
             if(keyDown== "KeyD" || keyDown == "ArrowRight"){
                 this.SpeedX += this.acceleration;
					  this.image.src = 'right.png';
             }
             else if(keyDown== "KeyA" || keyDown == "ArrowLeft"){
                 this.SpeedX -= this.acceleration;
					  this.image.src = 'left.png';
             }
				 

          
         
         this.ox = this.x;
			this.oy = this.y;
         this.x += this.SpeedX;
         this.y += this.SpeedY;
          
			
			
			if(this.SpeedY <= 5) this.SpeedY += this.gravity;
			if(this.SpeedX >= -this.maxSpeed || this.SpeedX <= this.maxSpeed) this.SpeedX *= this.friction;
			
			this.collisionDetect();

      }
  }   