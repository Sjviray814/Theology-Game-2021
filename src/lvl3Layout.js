var platforms = [];
var gateways = [];
var respawns = [];
var projectiles = [];
var movingPlatforms=[];
var length = 250;
platforms.push(new Obstacle(880, 300, 250, 100, "black"));
platforms.push(new Obstacle(0, 300, 250, 100, "black"));
gateways.push(new Gateway(980, 200, 100, 100, "lime", "Ending.html"));
respawns.push(new Obstacle2(0, 600, 1100, 100, 'transparent'));
respawns.push(new Obstacle2(500, 480, 140, 120, 'transparent'));

gateways.push(new Gateway(980, 100, 80, 80, 'transparent', 'easterEggNumber3.html'));