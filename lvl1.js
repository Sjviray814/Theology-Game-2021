var canvas = document.getElementById('canvas');
      var canvasContext= canvas.getContext('2d');
      var keyDown;
		var keyUp;
var spawnx = 50;
var spawny = 600;
const music = new Audio('music.mp3');
music.loop = true;
var levelFriction = .925;
      

   document.addEventListener("keydown", e => {
    keyDown = e.code; 
    });
		 
	document.addEventListener("keyup", e => {
		keyUp = e.code;
		if(keyUp == "KeyW" || keyUp == "ArrowUp") player1.jump();
		else if (keyUp == "KeyP") musicToggle();
    	keyReset();
    
    });
      
   window.onload=function(){
      canvas = document.getElementById('canvas');
      canvasContext= canvas.getContext('2d');
      
      doBoth();
		
		spawnRocks();
		setInterval(spawnRocks, 2000);

 
  }
    function doBoth(){
      moveEverything();
      drawEverything();
      requestAnimationFrame(doBoth);
      
    }
		 
	function keyReset(){
		keyDown = "";	
	}
    function moveEverything(){
        player1.move();
		 
	 }

    
    function drawEverything(){
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      player1.draw();
		platforms.forEach(platform =>{
			platform.draw();
		});
		gateways.forEach(gateway =>{
			gateway.draw();
		});
		respawns.forEach(respawn =>{
			respawn.draw();
		});
		projectiles.forEach(projectile =>{
			projectile.move();
			projectile.draw();
			
		});
		 
		 canvasContext.font='20px serif';
      canvasContext.fillStyle='white';
      canvasContext.fillText("Level 1", 10, 690);
		  canvasContext.fillStyle='red';
		 canvasContext.fillText("When you enter a new level, press P again to start the music", 580, 130);
		  canvasContext.fillStyle='white';
		 canvasContext.font='25px serif';
		 canvasContext.fillText("Dodge the rocks and make it to the end.", 680, 30); 
		 canvasContext.fillText("Getting hit by a rock will cause you", 680, 60);
		 canvasContext.fillText("to respawn at the beginning.", 680, 90);
		
		drawDevil();
		drawRocks();
		volumeIcon();
    }

  function create(x, y, width, height, color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x, y, width, height);
  }

function spawnRocks(){
	
	projectiles.push(new Projectile(1050, 410, 30, 30, -5, 0, ''));
	projectiles.push(new Projectile(1050, 610, 30, 30, -5, 0, ''));
	
}
function drawRocks(){
	var image = new Image();
	image.src = 'rock.png';
	for(let n = 0; n < projectiles.length; n++){
		canvasContext.drawImage(image, projectiles[n].x-10, projectiles[n].y-15, 50, 50);
	}
}

function drawDevil(){
	var image = new Image();
	image.src = 'devil.png';
	canvasContext.drawImage(image, 20, 80, 60, 60);		
	var image2 = new Image();
	image2.src = 'textbubble1.png';
	canvasContext.drawImage(image2, 0, 0, 170, 90);
}

function volumeIcon(){
	var image = new Image();
	if(music.paused){
		image.src = 'volumeOff.png';
	}else{
		image.src = 'volumeOn.png';
	}
	canvasContext.drawImage(image, 90, 669, 30, 30);
}
        
  
let player1 = new Player();
