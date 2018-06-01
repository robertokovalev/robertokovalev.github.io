(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vision_atlas_", frames: [[2219,0,1135,1581],[0,0,2217,842],[0,844,2217,842]]}
];


// symbols:



(lib.big_baloon1 = function() {
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
	this.instance = new lib.big_baloon1();
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


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.658,0.633,0,0,0,5.3,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6,regY:6,scaleX:0.69,scaleY:0.67,x:0.5,y:0.6,alpha:0.958},0).wait(1).to({scaleX:0.73,scaleY:0.71,alpha:0.917},0).wait(1).to({scaleX:0.76,scaleY:0.74,x:0.6,alpha:0.875},0).wait(1).to({scaleX:0.79,scaleY:0.78,y:0.7,alpha:0.833},0).wait(1).to({scaleX:0.83,scaleY:0.81,alpha:0.792},0).wait(1).to({scaleX:0.86,scaleY:0.85,alpha:0.75},0).wait(1).to({scaleX:0.89,scaleY:0.88,x:0.7,alpha:0.708},0).wait(1).to({scaleX:0.93,scaleY:0.92,y:0.8,alpha:0.667},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.625},0).wait(1).to({scaleX:1,scaleY:0.99,alpha:0.583},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:0.9,alpha:0.542},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0.8,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.458},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:0.9,alpha:0.417},0).wait(1).to({scaleX:1.16,scaleY:1.17,y:1,alpha:0.375},0).wait(1).to({scaleX:1.2,scaleY:1.21,alpha:0.333},0).wait(1).to({scaleX:1.23,scaleY:1.24,alpha:0.292},0).wait(1).to({scaleX:1.26,scaleY:1.28,y:1.1,alpha:0.25},0).wait(1).to({scaleX:1.3,scaleY:1.31,x:1,alpha:0.208},0).wait(1).to({scaleX:1.33,scaleY:1.35,alpha:0.167},0).wait(1).to({scaleX:1.37,scaleY:1.38,alpha:0.125},0).wait(1).to({scaleX:1.4,scaleY:1.42,y:1.2,alpha:0.083},0).wait(1).to({scaleX:1.43,scaleY:1.46,alpha:0.042},0).wait(1).to({scaleX:1.47,scaleY:1.49,x:1.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.5,8.6,8.2);


(lib.ballon_rest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(0.9,0.3,1,1,0,0,0,16.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({regX:16.5,regY:23,scaleX:1.01,scaleY:1.01,x:0.8,y:0.2},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:0.7},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:0.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0.6},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:0.5,y:0},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:0.4},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:-0.1},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:0.3},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:0.2},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.17,scaleY:1.16},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:0.1,y:-0.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-0.1,y:-0.3},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-0.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-0.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-0.2},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-0.4},0).wait(1).to({scaleX:1.27,scaleY:1.26},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-0.3},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-0.2,y:-0.3},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-0.1,y:-0.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:0,y:0},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:0.1},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.22,scaleY:1.21},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:0.2},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:0.3},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:0.4},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:0.5},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:0.6},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0.7},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:0.8},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-22.8,33,46);


(lib.baloon_is_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// Слой_1
	this.instance = new lib.big_baloon1();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-23,0.029,0.029);

	this.instance_1 = new lib.ballon_rest();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.1,1,1,0,0,0,16.5,22.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(1).to({regX:-0.3,regY:-0.4,x:-7.5,y:-19.5},0).wait(1).to({x:2.3,y:-15.3},0).wait(1).to({x:12.1,y:-11},0).wait(1).to({x:21.7,y:-6.7},0).wait(1).to({x:31.4,y:-2.3},0).wait(1).to({x:41,y:2.2},0).wait(1).to({x:50.6,y:7},0).wait(1).to({x:59,y:11.6},0).wait(1).to({x:67.5,y:18.6},0).wait(1).to({x:74.8,y:26.1},0).wait(1).to({x:81.4,y:34.4},0).wait(1).to({x:86.4,y:43.9},0).wait(1).to({x:87.1,y:53},0).wait(1).to({x:83.9,y:63.8},0).wait(1).to({x:78.3,y:72.8},0).wait(1).to({x:70.5,y:79.8},0).wait(1).to({x:61,y:82.8},0).wait(1).to({x:50.3,y:83.1},0).wait(1).to({x:39.6,y:82.3},0).wait(1).to({x:29.1,y:80.8},0).wait(1).to({x:18.6,y:78.9},0).wait(1).to({x:8,y:76.5},0).wait(1).to({x:-1.5,y:73.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-23,33,46);


(lib.baloon_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ballon_rest();
	this.instance.parent = this;

	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(0,0,1,1,0,0,0,16.5,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-22.8,33,46);


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
		
		/* Нажмите для перехода к кадру и начала воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на указанный кадр, и воспроизведение продолжается с него.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
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

	// baloon
	this.button_3 = new lib.baloon_button();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(503.3,34.7);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.baloon_button(), 3);

	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(503.3,34.7,1,1,0,0,0,16.5,22.9);
	this.movieClip_2._off = true;

	this.instance = new lib.baloon_is_back();
	this.instance.parent = this;
	this.instance.setTransform(503.5,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_3}]}).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({_off:false},0).wait(1).to({regY:23,scaleX:1.02,scaleY:1.02,x:512.8,y:28.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:523.4,y:23.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:534.6,y:19.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:546,y:17.3},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:557.7,y:15.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:569.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:581,y:17.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:592.3,y:20.3},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:603,y:24.9},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:612.8,y:31.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:621.5,y:39},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:628.9,y:48},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:635.1,y:58},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:640,y:68.6},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:643.9,y:79.7},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:646.9,y:91},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:649.1,y:102.5},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:649.4,y:112.5},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:640.4,y:122.1},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:631.8,y:129.9},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:622.6,y:137.3},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:612.7,y:143.7},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:602,y:148.8},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:592.1,y:151.3},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:579.7,y:153.8},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:568.1,y:156.2},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:556.5,y:158.7},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:545.1,y:161.2},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:533.6,y:163.8},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:522.2,y:166.5},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:510.8,y:169.2},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:499.4,y:172},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:488.1,y:174.9},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:476.8,y:177.9},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:465.4,y:181.2},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:455,y:184.7},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:443.7,y:188.9},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:432.7,y:193.2},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:421.8,y:197.7},0).wait(1).to({scaleX:2,scaleY:2,x:411,y:202.2},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:400.2,y:206.9},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:389.5,y:211.7},0).wait(1).to({scaleX:2.07,scaleY:2.07,x:379,y:216.7},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:368.4,y:221.9},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:358,y:227.4},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:347.8,y:233.3},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:337.9,y:239.7},0).wait(1).to({scaleX:2.38,scaleY:2.38,x:331.3,y:246.8},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:325.3,y:258.5},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:321.7,y:269.8},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:320.5,y:281.5},0).wait(1).to({scaleX:2.72,scaleY:2.71,x:322.2,y:291.6},0).wait(1).to({scaleX:2.8,scaleY:2.8,x:326.9,y:303.8},0).wait(1).to({scaleX:2.89,scaleY:2.88,x:331.5,y:314},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:336.2,y:325.1},0).wait(1).to({scaleX:3.06,scaleY:3.05,x:342.8,y:332.8},0).wait(1).to({scaleX:3.14,scaleY:3.14,x:351.6,y:340.3},0).wait(1).to({scaleX:3.22,scaleY:3.22,x:363,y:347.9},0).wait(1).to({scaleX:3.31,scaleY:3.31,x:372.3,y:353.4},0).wait(1).to({scaleX:3.39,scaleY:3.39,x:383.6,y:358.4},0).wait(1).to({scaleX:3.48,scaleY:3.48,x:394.7,y:362.6},0).wait(1).to({scaleX:3.56,scaleY:3.56,x:405.8,y:366.3},0).wait(1).to({scaleX:3.65,scaleY:3.65,x:417.1,y:369.5},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:428.8,y:371.6},0).wait(1).to({scaleX:3.82,scaleY:3.82,x:440.4,y:372.5},0).wait(1).to({scaleX:3.9,scaleY:3.9,x:452.2,y:373.2},0).wait(1).to({scaleX:3.99,scaleY:3.99,x:464,y:373.8},0).wait(1).to({scaleX:4.07,scaleY:4.07,x:475.8,y:374.4},0).wait(1).to({scaleX:4.16,scaleY:4.16,x:488.5,y:374.8},0).wait(1).to({scaleX:4.24,scaleY:4.24,x:498.7,y:374.9},0).wait(1).to({scaleX:4.49,scaleY:4.48,x:498.9,y:374.4},0).wait(1).to({scaleX:4.73,scaleY:4.73,x:499.1,y:373.9},0).wait(1).to({scaleX:4.97,scaleY:4.97,x:499.3,y:373.3},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:499.4,y:372.9},0).wait(1).to({scaleX:5.46,scaleY:5.45,x:499.6,y:372.3},0).wait(1).to({scaleX:5.7,scaleY:5.7,x:499.8,y:371.8},0).wait(1).to({scaleX:5.94,scaleY:5.94,x:499.9,y:371.3},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:500.1,y:370.8},0).wait(1).to({scaleX:6.42,scaleY:6.42,x:500.3,y:370.2},0).wait(1).to({scaleX:6.67,scaleY:6.66,x:500.5,y:369.8},0).wait(1).to({scaleX:6.91,scaleY:6.91,x:500.6,y:369.2},0).wait(1).to({scaleX:7.15,scaleY:7.15,x:500.8,y:368.7},0).wait(1).to({scaleX:7.39,scaleY:7.39,x:501,y:368.2},0).wait(1).to({scaleX:7.64,scaleY:7.63,x:501.2,y:367.7},0).wait(1).to({scaleX:7.88,scaleY:7.88,x:501.3,y:367.1},0).wait(1).to({scaleX:8.12,scaleY:8.12,x:501.5,y:366.6},0).wait(1).to({scaleX:8.36,scaleY:8.36,x:501.7,y:366.1},0).wait(1).to({scaleX:8.61,scaleY:8.6,x:501.9,y:365.6},0).wait(1).to({scaleX:8.85,scaleY:8.85,x:502.1,y:365.1},0).wait(1).to({scaleX:9.09,scaleY:9.09,x:502.2,y:364.6},0).wait(1).to({scaleX:9.33,scaleY:9.33,x:502.4,y:364.1},0).wait(1).to({scaleX:9.58,scaleY:9.57,x:502.6,y:363.5},0).wait(1).to({scaleX:9.82,scaleY:9.82,x:502.8,y:363},0).wait(1).to({scaleX:10.06,scaleY:10.06,x:503,y:362.5},0).wait(1).to({scaleX:10.3,scaleY:10.3,x:503.3,y:362},0).wait(1).to({scaleX:11.44,scaleY:11.44,x:502.7,y:365.6},0).wait(1).to({scaleX:12.58,scaleY:12.57,x:502.2,y:369.2},0).wait(1).to({scaleX:13.71,scaleY:13.71,x:501.6,y:372.8},0).wait(1).to({scaleX:14.85,scaleY:14.84,x:501.1,y:376.4},0).wait(1).to({scaleX:15.99,scaleY:15.98,x:500.6,y:380},0).wait(1).to({scaleX:17.12,scaleY:17.11,x:500,y:383.6},0).wait(1).to({scaleX:18.26,scaleY:18.25,x:499.5,y:387.2},0).wait(1).to({scaleX:19.39,scaleY:19.39,x:499,y:390.8},0).wait(1).to({scaleX:20.53,scaleY:20.52,x:498.4,y:394.4},0).wait(1).to({scaleX:21.67,scaleY:21.66,x:497.9,y:398},0).wait(1).to({scaleX:22.8,scaleY:22.8,x:497.4,y:401.6},0).wait(1).to({scaleX:23.94,scaleY:23.93,x:496.8,y:405.2},0).wait(1).to({scaleX:25.08,scaleY:25.07,x:496.3,y:408.8},0).wait(1).to({scaleX:26.21,scaleY:26.2,x:495.8,y:412.4},0).wait(1).to({scaleX:27.35,scaleY:27.34,x:495.2,y:416},0).wait(1).to({scaleX:28.49,scaleY:28.48,x:494.7,y:419.6},0).wait(1).to({scaleX:29.62,scaleY:29.61,x:494.2,y:423.1},0).wait(1).to({scaleX:30.76,scaleY:30.75,x:493.7,y:426.8},0).wait(1).to({scaleX:31.89,scaleY:31.88,x:493.2,y:430.4},0).wait(1).to({scaleX:33.03,scaleY:33.02,x:492.7,y:434},0).wait(1).to({scaleX:34.17,scaleY:34.16,x:492.1,y:437.6},0).wait(1).to({scaleX:35.3,scaleY:35.29,x:491.6,y:441.1},0).wait(1).to({scaleX:36.44,scaleY:36.43,x:491.1,y:444.8},0).wait(1).to({scaleX:37.58,scaleY:37.56,x:490.7,y:448.3},0).wait(1).to({x:441.4,y:450.2},0).wait(1).to({x:392,y:452},0).wait(1).to({x:342.6,y:453.8},0).wait(1).to({x:293.3,y:455.6},0).wait(1).to({x:243.9,y:457.4},0).wait(1).to({x:194.6,y:459.3},0).wait(1).to({x:145.2,y:461.1},0).wait(1).to({x:95.9,y:462.9},0).wait(1).to({x:46.5,y:464.7},0).wait(1).to({x:-2.9,y:466.5},0).wait(1).to({x:-52.3,y:468.3},0).wait(1).to({x:-101.6,y:470.2},0).wait(1).to({x:-151,y:472},0).wait(1).to({x:-200.3,y:473.8},0).wait(1).to({x:-249.7,y:475.6},0).wait(1).to({x:-299,y:477.4},0).wait(1).to({x:-348.4,y:479.3},0).wait(1).to({x:-397.7,y:481.1},0).wait(1).to({x:-447.1,y:482.9},0).wait(1).to({x:-496.5,y:484.7},0).wait(1).to({x:-545.8,y:486.5},0).wait(1).to({x:-595.2,y:488.3},0).wait(1).to({x:-644.6,y:490.1},0).to({_off:true},1).wait(1));

	// Bullet
	this.instance_1 = new lib.bullet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(967.3,363.4,1,1,0,0,0,0.5,0.5);

	this.instance_2 = new lib.bullet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(767.8,391.6,1,1,0,0,0,0.5,0.5);

	this.instance_3 = new lib.bullet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(545.6,392.5,1,1,0,0,0,0.5,0.5);

	this.instance_4 = new lib.bullet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(368.9,414.4,1,1,0,0,0,0.5,0.5);

	this.instance_5 = new lib.bullet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(93,387.1,1,1,0,0,0,0.5,0.5);

	this.instance_6 = new lib.bullet();
	this.instance_6.parent = this;
	this.instance_6.setTransform(186.8,416.2,1,1,0,0,0,0.5,0.5);

	this.instance_7 = new lib.bullet();
	this.instance_7.parent = this;
	this.instance_7.setTransform(196.8,376.1,1,1,0,0,0,0.5,0.5);

	this.instance_8 = new lib.bullet();
	this.instance_8.parent = this;
	this.instance_8.setTransform(296.1,327.8,1,1,0,0,0,0.5,0.5);

	this.instance_9 = new lib.bullet();
	this.instance_9.parent = this;
	this.instance_9.setTransform(431.8,288.7,1,1,0,0,0,0.5,0.5);

	this.instance_10 = new lib.bullet();
	this.instance_10.parent = this;
	this.instance_10.setTransform(250.3,339.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},144).wait(1));

	// Vision
	this.instance_11 = new lib.visionbw_2x();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,81,0.462,0.462);

	this.instance_12 = new lib.vision_2x();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,81,0.462,0.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},121).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,246.7,1024,458.2);
// library properties:
lib.properties = {
	id: '7DDA48D0916E43478959750BE71FA6DA',
	width: 1024,
	height: 470,
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