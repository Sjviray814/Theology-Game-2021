var platforms = [];
var gateways = [];
var respawns = [];
var projectiles = [];
var movingPlatforms=[];
platforms.push(new Obstacle(950, 300, 200, 100, "black"));
//platforms.push(new Obstacle(0, 300, 100, 100, "black"));
gateways.push(new Gateway(980, 200, 100, 100, "lime", "lvl3.html"));
platforms.push(new Obstacle3(0, 280, 148, 422, 'tower.png'));
movingPlatforms.push(new movingPlatform(200, 380, 100, 30, 1, 0, 290, 400));
movingPlatforms.push(new movingPlatform(530, 280, 100, 30, -1, 0, 400, 300));
movingPlatforms.push(new movingPlatform(690, 330, 100, 30, 1, 0, 830, 350));
respawns.push(new Obstacle2(0, 510, 970, 250, 'transparent'));

gateways.push(new Gateway(980, 600, 120, 120, 'transparent', 'easterEggSecond.html'));