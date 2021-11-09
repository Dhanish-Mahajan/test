function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);

	video= createCapture()
	video.size(800,400)
	video.parent('game_console')

	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.om('pose', gotPoses)
}

function gotPoses(results)
{
	if (results.length>0) {
		console.log
		noseX = result[0].posee.nose.x;
		noseY = results[0].pose.nose.y;		
	}
}

function draw() {
	game()
}






