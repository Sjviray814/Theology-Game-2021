var canvas = document.getElementById('canvas');
      var canvasContext= canvas.getContext('2d');
      var keyDown;
		var keyUp;
var spawnx = 50;
var spawny = 200;
const music = new Audio('music.mp3');
music.loop = true;
var levelFriction = .9;

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
		canvasContext.font='20px serif';
      canvasContext.fillStyle='white';
      
		canvasContext.fillText("Use A and D or arrow keys to move sideways  You will jump whenever you release W or up arrow", 10, 20); 
		canvasContext.fillText("To glide, jump and then hold left or right while in midair", 10, 50); 
		 canvasContext.fillText("Jump again in midair to double jump, make sure you release and rehold left or right again to keep gliding", 10, 80);
		 canvasContext.fillText("Press P to start and pause the music", 10, 110);
		 canvasContext.fillText("This is a gateway, reach it to" , 780, 230);
		  canvasContext.fillText("advance to the next level" , 780, 250);
		 
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
		 canvasContext.fillStyle='white';
		 canvasContext.fillText("Tutorial", 10, 690); 
		 canvasContext.font='40px serif';
		canvasContext.fillText("This is LAVA, if you touch it you respawn", 10, 500); 
		 
		 drawDevil();
		 volumeIcon();
    }

  function create(x, y, width, height, color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x, y, width, height);
  }


function drawDevil(){
	var image = new Image();
	image.src = 'devil.png';
	canvasContext.drawImage(image, 980, 630, 60, 60);		
	var image2 = new Image();
	image2.src = 'textbubble.png';
	canvasContext.drawImage(image2, 980, 560, 100, 60);
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
