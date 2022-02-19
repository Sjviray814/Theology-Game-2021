var canvas = document.getElementById('canvas');
      var canvasContext= canvas.getContext('2d');
      var keyDown;
		var keyUp;

  var spawnx = 50;
var spawny = 200;  
var levelFriction = .9;

const music = new Audio('music.mp3');
music.loop = true;

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
		 movingPlatforms.forEach(platform =>{
			platform.move();
			platform.draw();
		});
		 
		 spikes();
		 clouds();
		 drawDevil();
		 canvasContext.font='20px serif';
      canvasContext.fillStyle='white';
      canvasContext.fillText("Level 2", 10, 690); 
		 
		 volumeIcon();
    }

  function create(x, y, width, height, color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x, y, width, height);
  }

	function spikes(){
		var image = new Image();
		image.src = 'spikes.png';
		for(let n = 0; n <= 8; n++){
		canvasContext.drawImage(image, (90 * n) + 160, 490, 100, 230);	
		}
	}

	function clouds(){
		var image = new Image();
		image.src = 'cloud.png';
		for(let n = 0; n < movingPlatforms.length; n++){
		canvasContext.drawImage(image, movingPlatforms[n].x - 25, movingPlatforms[n].y, movingPlatforms[n].w + 40, movingPlatforms[n].h);
	}
	}

function drawDevil(){
	var image = new Image();
	image.src = 'devil.png';
	canvasContext.drawImage(image, 960, 640, 60, 60);		
	var image2 = new Image();
	image2.src = 'textbubble2.png';
	canvasContext.drawImage(image2, 940, 540, 150, 95);
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
