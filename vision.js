(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vision_atlas_", frames: [[2219,0,1135,1581],[0,0,2217,842],[0,844,2217,842]]}
];


// symbols:



(lib.big_baloon = function() {
	this.spriteSheet = ss["vision_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.vision_2x = function() {
	this.spriteSheet = ss["vision_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.visionbw_2x = function() {
	this.spriteSheet = ss["vision_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.big_baloon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,33,46), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCDFDF").ss(1,1,1).p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1,-1,14,14), null);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AocCUIAAknIQ5AAIAAEng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.1,-14.8,108.2,29.6);


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.658,0.633,0,0,0,5.3,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6,regY:6,scaleX:0.69,scaleY:0.67,x:0.5,y:0.6,alpha:0.958},0).wait(1).to({scaleX:0.73,scaleY:0.71,alpha:0.917},0).wait(1).to({scaleX:0.76,scaleY:0.74,x:0.6,alpha:0.875},0).wait(1).to({scaleX:0.79,scaleY:0.78,y:0.7,alpha:0.833},0).wait(1).to({scaleX:0.83,scaleY:0.81,alpha:0.792},0).wait(1).to({scaleX:0.86,scaleY:0.85,alpha:0.75},0).wait(1).to({scaleX:0.89,scaleY:0.88,x:0.7,alpha:0.708},0).wait(1).to({scaleX:0.93,scaleY:0.92,y:0.8,alpha:0.667},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.625},0).wait(1).to({scaleX:1,scaleY:0.99,alpha:0.583},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:0.9,alpha:0.542},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0.8,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.458},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:0.9,alpha:0.417},0).wait(1).to({scaleX:1.16,scaleY:1.17,y:1,alpha:0.375},0).wait(1).to({scaleX:1.2,scaleY:1.21,alpha:0.333},0).wait(1).to({scaleX:1.23,scaleY:1.24,alpha:0.292},0).wait(1).to({scaleX:1.26,scaleY:1.28,y:1.1,alpha:0.25},0).wait(1).to({scaleX:1.3,scaleY:1.31,x:1,alpha:0.208},0).wait(1).to({scaleX:1.33,scaleY:1.35,alpha:0.167},0).wait(1).to({scaleX:1.37,scaleY:1.38,alpha:0.125},0).wait(1).to({scaleX:1.4,scaleY:1.42,y:1.2,alpha:0.083},0).wait(1).to({scaleX:1.43,scaleY:1.46,alpha:0.042},0).wait(1).to({scaleX:1.47,scaleY:1.49,x:1.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.6,8.6,8.2);


// stage content:
(lib.vision = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
		
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_143 = function() {
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(144);
		}
	}
	this.frame_144 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(1).call(this.frame_144).wait(1));

	// button
	this.button_1 = new lib.start();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(943.9,77.2);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.start(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({_off:true},1).wait(144));

	// baloon
	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(503.3,-46.5,1,1,0,0,0,16.5,23);
	this.movieClip_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({_off:false},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:512.8,y:-53},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:523.4,y:-57.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:534.6,y:-61.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:546,y:-64},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:557.7,y:-65.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:569.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:581,y:-64},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:592.3,y:-61},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:603,y:-56.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:612.8,y:-50.1},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:621.5,y:-42.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:628.9,y:-33.3},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:635.1,y:-23.3},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:640,y:-12.7},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:643.9,y:-1.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:646.9,y:9.7},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:649.1,y:21.2},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:649.4,y:31.2},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:640.4,y:40.7},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:631.8,y:48.6},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:622.6,y:55.9},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:612.7,y:62.4},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:602,y:67.4},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:592.1,y:70},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:579.7,y:72.4},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:568.1,y:74.9},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:556.5,y:77.3},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:545.1,y:79.9},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:533.6,y:82.4},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:522.2,y:85.1},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:510.8,y:87.8},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:499.4,y:90.6},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:488.1,y:93.5},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:476.8,y:96.5},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:465.4,y:99.8},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:455,y:103.3},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:443.7,y:107.5},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:432.7,y:111.8},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:421.8,y:116.3},0).wait(1).to({scaleX:2,scaleY:2,x:411,y:120.8},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:400.2,y:125.5},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:389.5,y:130.3},0).wait(1).to({scaleX:2.07,scaleY:2.07,x:379,y:135.3},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:368.4,y:140.5},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:358,y:146},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:347.8,y:151.8},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:337.9,y:158.2},0).wait(1).to({scaleX:2.38,scaleY:2.38,x:331.3,y:165.4},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:325.3,y:177},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:321.7,y:188.4},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:320.5,y:200},0).wait(1).to({scaleX:2.72,scaleY:2.71,x:322.2,y:210.1},0).wait(1).to({scaleX:2.8,scaleY:2.8,x:326.9,y:222.4},0).wait(1).to({scaleX:2.89,scaleY:2.88,x:331.5,y:232.5},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:336.2,y:243.6},0).wait(1).to({scaleX:3.06,scaleY:3.05,x:342.8,y:251.3},0).wait(1).to({scaleX:3.14,scaleY:3.14,x:351.6,y:258.8},0).wait(1).to({scaleX:3.22,scaleY:3.22,x:363,y:266.4},0).wait(1).to({scaleX:3.31,scaleY:3.31,x:372.3,y:271.8},0).wait(1).to({scaleX:3.39,scaleY:3.39,x:383.6,y:276.8},0).wait(1).to({scaleX:3.48,scaleY:3.48,x:394.7,y:281.1},0).wait(1).to({scaleX:3.56,scaleY:3.56,x:405.8,y:284.8},0).wait(1).to({scaleX:3.65,scaleY:3.65,x:417.1,y:287.9},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:428.8,y:290},0).wait(1).to({scaleX:3.82,scaleY:3.82,x:440.4,y:290.9},0).wait(1).to({scaleX:3.9,scaleY:3.9,x:452.2,y:291.6},0).wait(1).to({scaleX:3.99,scaleY:3.99,x:464,y:292.2},0).wait(1).to({scaleX:4.07,scaleY:4.07,x:475.8,y:292.8},0).wait(1).to({scaleX:4.16,scaleY:4.16,x:488.5,y:293.2},0).wait(1).to({scaleX:4.24,scaleY:4.24,x:498.7,y:293.3},0).wait(1).to({scaleX:4.49,scaleY:4.48,x:498.9,y:292.7},0).wait(1).to({scaleX:4.73,scaleY:4.73,x:499.1,y:292.2},0).wait(1).to({scaleX:4.97,scaleY:4.97,x:499.3,y:291.7},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:499.4,y:291.1},0).wait(1).to({scaleX:5.46,scaleY:5.45,x:499.6,y:290.6},0).wait(1).to({scaleX:5.7,scaleY:5.7,x:499.8,y:290.1},0).wait(1).to({scaleX:5.94,scaleY:5.94,x:499.9,y:289.5},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:500.1,y:289},0).wait(1).to({scaleX:6.42,scaleY:6.42,x:500.3,y:288.4},0).wait(1).to({scaleX:6.67,scaleY:6.66,x:500.5,y:287.9},0).wait(1).to({scaleX:6.91,scaleY:6.91,x:500.6,y:287.3},0).wait(1).to({scaleX:7.15,scaleY:7.15,x:500.8,y:286.8},0).wait(1).to({scaleX:7.39,scaleY:7.39,x:501,y:286.2},0).wait(1).to({scaleX:7.64,scaleY:7.63,x:501.2,y:285.7},0).wait(1).to({scaleX:7.88,scaleY:7.88,x:501.3,y:285.2},0).wait(1).to({scaleX:8.12,scaleY:8.12,x:501.5,y:284.6},0).wait(1).to({scaleX:8.36,scaleY:8.36,x:501.7,y:284.1},0).wait(1).to({scaleX:8.61,scaleY:8.6,x:501.9,y:283.5},0).wait(1).to({scaleX:8.85,scaleY:8.85,x:502.1,y:283},0).wait(1).to({scaleX:9.09,scaleY:9.09,x:502.2,y:282.4},0).wait(1).to({scaleX:9.33,scaleY:9.33,x:502.4,y:281.9},0).wait(1).to({scaleX:9.58,scaleY:9.57,x:502.6,y:281.4},0).wait(1).to({scaleX:9.82,scaleY:9.82,x:502.8,y:280.9},0).wait(1).to({scaleX:10.06,scaleY:10.06,x:503,y:280.3},0).wait(1).to({scaleX:10.3,scaleY:10.3,x:503.3,y:279.8},0).wait(1).to({scaleX:11.44,scaleY:11.44,x:502.7,y:283.3},0).wait(1).to({scaleX:12.58,scaleY:12.57,x:502.2,y:286.8},0).wait(1).to({scaleX:13.71,scaleY:13.71,x:501.6,y:290.3},0).wait(1).to({scaleX:14.85,scaleY:14.84,x:501.1,y:293.8},0).wait(1).to({scaleX:15.99,scaleY:15.98,x:500.6,y:297.2},0).wait(1).to({scaleX:17.12,scaleY:17.11,x:500,y:300.7},0).wait(1).to({scaleX:18.26,scaleY:18.25,x:499.5,y:304.2},0).wait(1).to({scaleX:19.39,scaleY:19.39,x:499,y:307.7},0).wait(1).to({scaleX:20.53,scaleY:20.52,x:498.4,y:311.2},0).wait(1).to({scaleX:21.67,scaleY:21.66,x:497.9,y:314.6},0).wait(1).to({scaleX:22.8,scaleY:22.8,x:497.4,y:318.1},0).wait(1).to({scaleX:23.94,scaleY:23.93,x:496.8,y:321.6},0).wait(1).to({scaleX:25.08,scaleY:25.07,x:496.3,y:325.1},0).wait(1).to({scaleX:26.21,scaleY:26.2,x:495.8,y:328.6},0).wait(1).to({scaleX:27.35,scaleY:27.34,x:495.2,y:332},0).wait(1).to({scaleX:28.49,scaleY:28.48,x:494.7,y:335.5},0).wait(1).to({scaleX:29.62,scaleY:29.61,x:494.2,y:339},0).wait(1).to({scaleX:30.76,scaleY:30.75,x:493.7,y:342.5},0).wait(1).to({scaleX:31.89,scaleY:31.88,x:493.2,y:346},0).wait(1).to({scaleX:33.03,scaleY:33.02,x:492.7,y:349.4},0).wait(1).to({scaleX:34.17,scaleY:34.16,x:492.1,y:353},0).wait(1).to({scaleX:35.3,scaleY:35.29,x:491.6,y:356.4},0).wait(1).to({scaleX:36.44,scaleY:36.43,x:491.1,y:359.9},0).wait(1).to({scaleX:37.58,scaleY:37.56,x:490.7,y:363.4},0).wait(1).to({x:441.4,y:365.2},0).wait(1).to({x:392,y:367},0).wait(1).to({x:342.6,y:368.8},0).wait(1).to({x:293.3,y:370.7},0).wait(1).to({x:243.9,y:372.5},0).wait(1).to({x:194.6,y:374.3},0).wait(1).to({x:145.2,y:376.1},0).wait(1).to({x:95.9,y:377.9},0).wait(1).to({x:46.5,y:379.8},0).wait(1).to({x:-2.9,y:381.6},0).wait(1).to({x:-52.3,y:383.4},0).wait(1).to({x:-101.6,y:385.2},0).wait(1).to({x:-151,y:387},0).wait(1).to({x:-200.3,y:388.8},0).wait(1).to({x:-249.7,y:390.7},0).wait(1).to({x:-299,y:392.5},0).wait(1).to({x:-348.4,y:394.3},0).wait(1).to({x:-397.7,y:396.1},0).wait(1).to({x:-447.1,y:397.9},0).wait(1).to({x:-496.5,y:399.8},0).wait(1).to({x:-545.8,y:401.6},0).wait(1).to({x:-595.2,y:403.4},0).wait(1).to({x:-644.6,y:405.2},0).to({_off:true},1).wait(1));

	// Bullet
	this.instance = new lib.bullet();
	this.instance.parent = this;
	this.instance.setTransform(967.3,282.2,1,1,0,0,0,0.5,0.5);

	this.instance_1 = new lib.bullet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(767.8,310.4,1,1,0,0,0,0.5,0.5);

	this.instance_2 = new lib.bullet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(545.6,311.3,1,1,0,0,0,0.5,0.5);

	this.instance_3 = new lib.bullet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(368.9,333.2,1,1,0,0,0,0.5,0.5);

	this.instance_4 = new lib.bullet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(93,305.9,1,1,0,0,0,0.5,0.5);

	this.instance_5 = new lib.bullet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(186.8,335,1,1,0,0,0,0.5,0.5);

	this.instance_6 = new lib.bullet();
	this.instance_6.parent = this;
	this.instance_6.setTransform(196.8,294.9,1,1,0,0,0,0.5,0.5);

	this.instance_7 = new lib.bullet();
	this.instance_7.parent = this;
	this.instance_7.setTransform(296.1,246.6,1,1,0,0,0,0.5,0.5);

	this.instance_8 = new lib.bullet();
	this.instance_8.parent = this;
	this.instance_8.setTransform(431.8,207.5,1,1,0,0,0,0.5,0.5);

	this.instance_9 = new lib.bullet();
	this.instance_9.parent = this;
	this.instance_9.setTransform(250.3,258.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},144).wait(1));

	// Vision
	this.instance_10 = new lib.visionbw_2x();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,0.462,0.462);

	this.instance_11 = new lib.vision_2x();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,0.462,0.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},121).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,194,1024,388.9);
// library properties:
lib.properties = {
	id: '7DDA48D0916E43478959750BE71FA6DA',
	width: 1024,
	height: 388,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/vision_atlas_.png", id:"vision_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7DDA48D0916E43478959750BE71FA6DA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;