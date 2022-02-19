var canvas = document.getElementById('canvas');
      var canvasContext= canvas.getContext('2d');
      var keyDown;
		var keyUp;
var spawnx = 50;
var spawny = 200;

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
		 canvasContext.font='25px serif';
      canvasContext.fillStyle='white';		 
		 canvasContext.fillText("Yes, this jump is makeable", 20, 30); 
		 canvasContext.font='20px serif';
      canvasContext.fillText("Level 3", 10, 690); 
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
		drawBuildings();
		volumeIcon();
		drawDevil();
    }
	

  function create(x, y, width, height, color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x, y, width, height);
  }

      
function drawBuildings(){
	var offset = 20;
	var image = new Image();
	image.src = 'building1.png';
	canvasContext.drawImage(image, 80, 570-offset, 150, 150);		
	var image2 = new Image();
	image2.src = 'building2.png';
	canvasContext.drawImage(image2, 300, 610-offset, 150, 110);
	var image3 = new Image();
	image3.src = 'building3.png';
	canvasContext.drawImage(image3, 500, 500-offset, 150, 220);
	var image4 = new Image();
	image4.src = 'building4.png';
	canvasContext.drawImage(image4, 700, 620-offset, 150, 105);
	var image5 = new Image();
	image5.src = 'building5.png';
	canvasContext.drawImage(image5, 900, 630-offset, 150, 95);
}

function drawDevil(){
	var image = new Image();
	image.src = 'devil.png';
	canvasContext.drawImage(image, 960, 550, 60, 60);		
	var image2 = new Image();
	image2.src = 'textbubble3.png';
	canvasContext.drawImage(image2, 940, 450, 150, 95);
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
