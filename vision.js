(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vision_atlas_", frames: [[0,0,2217,842],[0,844,2217,842]]}
];


// symbols:



(lib.vision_2x = function() {
	this.spriteSheet = ss["vision_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.visionbw_2x = function() {
	this.spriteSheet = ss["vision_atlas_"];
	this.gotoAndStop(1);
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


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCDFDF").ss(1,1,1).p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYg");
	this.shape.setTransform(2.1,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(65,65,65,0.008)").s().p("AgpAqQgSgRAAgZQAAgYASgSQARgRAYAAQAZAAARARQASASAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_1.setTransform(2.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-4.9,-5.4,14,14), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009DE2").s().p("EAaZA5CQgMgLgBgRIAAgFQAAgOAKgMQAJgMAPgCQgCmPiWlEQiGkgkEj2QjZjMlTjNQjCh1m5joQmpjfjTiCQlRjRjYjVQkEj/iEksQiVlQAAmfMAAAgxEIXkAAMAAAAxEQAAO4EyJYQB9D1C+DVQCKCdDfC+IFpEzQDFCyB3ClQCVDPBMD2QBWEXACFlQAPACAKAMQAKALAAAPQABARgMANQgLAMgRABIgDAAQgPAAgMgKg");
	this.shape.setTransform(175.8,366);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,351.6,732), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCAQQgTgBAKgVQgEgHADgBQAEgCADAFIAEgCQADgCAGAIQADAEAEAAQABATgQAAIgCAAg");
	mask.setTransform(1.5,1.6);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A18").s().p("AgCAMQgQgCAIgRQgDgEAFAAQAEAAADAEIABgCQADgBAFAGQACADADAAQABANgNAAIgDAAg");
	this.shape.setTransform(1.3,1.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0.4,2.7,2.4), null);


(lib.bullet_null = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCDFDF").ss(1,1,1).p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(65,65,65,0)").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(1.1,0.7,0.222,0.222,0,0,0,180.8,369.2);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-81.2,78,162.4);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Слой_1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.1,81.3,0.152,0.068,0,0,0,39.1,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.96,x:38.8,y:81.7},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,70.2,11.9,11);


(lib.bullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.658,0.633,0,0,0,2.3,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:2.1,regY:1.6,scaleX:0.69,scaleY:0.67,x:-0.1,y:-0.3,alpha:0.958},0).wait(1).to({scaleX:0.73,scaleY:0.71,y:-0.2,alpha:0.917},0).wait(1).to({scaleX:0.76,scaleY:0.74,y:-0.3,alpha:0.875},0).wait(1).to({scaleX:0.79,scaleY:0.78,alpha:0.833},0).wait(1).to({scaleX:0.83,scaleY:0.81,alpha:0.792},0).wait(1).to({scaleX:0.86,scaleY:0.85,alpha:0.75},0).wait(1).to({scaleX:0.89,scaleY:0.88,y:-0.4,alpha:0.708},0).wait(1).to({scaleX:0.93,scaleY:0.92,alpha:0.667},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.625},0).wait(1).to({scaleX:1,scaleY:0.99,alpha:0.583},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-0.2,alpha:0.542},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-0.1,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-0.2,y:-0.5,alpha:0.458},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.417},0).wait(1).to({scaleX:1.16,scaleY:1.17,alpha:0.375},0).wait(1).to({scaleX:1.2,scaleY:1.21,alpha:0.333},0).wait(1).to({scaleX:1.23,scaleY:1.24,alpha:0.292},0).wait(1).to({scaleX:1.26,scaleY:1.28,alpha:0.25},0).wait(1).to({scaleX:1.3,scaleY:1.31,alpha:0.208},0).wait(1).to({scaleX:1.33,scaleY:1.35,y:-0.6,alpha:0.167},0).wait(1).to({scaleX:1.37,scaleY:1.38,alpha:0.125},0).wait(1).to({scaleX:1.4,scaleY:1.42,alpha:0.083},0).wait(1).to({scaleX:1.43,scaleY:1.46,alpha:0.042},0).wait(1).to({scaleX:1.47,scaleY:1.49,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-4.4,8.6,8.3);


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bullet1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,0.6,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,8.6,8.3);


(lib.baloon_svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A0D8F7","#008AD1"],[0,1],0,0.5,0,-0.2).s().p("AgTAGQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAigJQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAgBAAIghAJIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape.setTransform(-33.8,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A0D8F7","#008AD1"],[0,1],0,0.3,0.1,-0.4).s().p("AgRAFIgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAfgIQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgfAHIgBABQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1.setTransform(-33.8,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A0D8F7","#008AD1"],[0,1],0,0.4,0.1,-0.3).s().p("AgQAFQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAbgGQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgbAHQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_2.setTransform(-33.7,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A0D8F7","#008AD1"],[0,1],0,0.5,0,-0.4).s().p("AgOAEQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIAYgGIACABIABACQABAAAAABQAAABAAAAQgBABAAAAQgBAAAAAAIgYAHIgCAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_3.setTransform(-33.7,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EE7C00","#E2000F"],[0,1],-1.7,2.6,1.7,-2.6).s().p("AgFAaQgKgDgGgJQgGgJACgKQADgKAJgGQAJgGAKACIAAAAQALADAFAJQAGAJgCAKQgDALgJAFQgHAEgHAAIgFAAg");
	this.shape_4.setTransform(-18,33.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE7C00").s().p("AAOAzIAIg9IgagFQgdgFgKgHQARgcAeAGQAfAFAJAhIgIABIgIA9g");
	this.shape_5.setTransform(-21.5,37.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EE7C00","#E2000F"],[0,1],-0.9,3.1,1,-2.8).s().p("AgFAWQgJgCgFgIQgFgIACgIQADgKAIgFQAIgFAIACQAKADAFAIQAFAIgDAIQgCAKgIAFQgFADgGAAIgGgBg");
	this.shape_6.setTransform(-23.6,31.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#008AD1","#2F2482"],[0,1],-2.8,4.3,3.3,-4).s().p("AAQAXQgMgEgCgMIgLgDQgFAFgHABQgHABgFgEQgIgHACgJQACgHAGgEQAFgDAHABQAHACAEAGQADAGgBAHIAAAAIAJACIAAgBQABgHAHgEQAGgEAIACIABAAQAHACAEAGQAEAGgCAIQgCAHgGAEQgFADgFAAIgFAAg");
	this.shape_7.setTransform(-23.9,38.6);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-24.4,45,1,1,0,0,0,1.5,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A51380").s().p("AgCAQQgTgBAKgVQgEgHADgBQAEgCADAFIAEgCQADgCAGAIQADAEAEAAQABATgQAAIgCAAg");
	this.shape_8.setTransform(-24.4,45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4007D").s().p("AAIAUIgBAAIAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIAAABIgLgDIgCgBQgDgCADgEIAVgcIACABIgCAZQAFACgBAGQgCAFgDAAIgBAAg");
	this.shape_9.setTransform(-25.4,40.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A0D8F7").s().p("Ag1AJIAHgdQAEggAUgPQATgNAUAHQAXAHAJAYQALAagNAjQgMAcgZATQgQAKgNAAQggAAgChDg");
	this.shape_10.setTransform(-22.2,40.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFEC00").s().p("AAIBZIgJAHIgNgHIgNADIAWg/Ig7h0IAMAEIALgHIAQAIIAPgKIAPAKIAIgIIAKAGIAQgMIALAIIgfBiIAAAQIAuAzIgJALIgUgHIgMAQg");
	this.shape_11.setTransform(-34.3,37.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009DE2").s().p("AgBAUQgIAAgFgGQgGgGABgHIAAgCQABgIAGgFQAGgFAIAAQAIABAFAHQAGAGgBAHQgBAJgGAFQgFAEgHAAIgCAAg");
	this.shape_12.setTransform(-34.2,39.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#281A5E").s().p("Ah5ByIhfjaIAdgJIBNCXIAkg0IASgMIgZgQIAuhFIAhAcIAxAFIBZgIIBRCtIkBAAIgQgkIgxA/g");
	this.shape_13.setTransform(-13.6,51.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A0D8F7","#009DE2"],[0,1],7.7,54.5,-6.6,-63.5).s().p("AgDKcQgPghgJjbQgJjaACkVQABkUAMitQALisAOAhQAOAhAKDbQAJDagCEVQgCEUgLCtQgJCRgNAAQgBAAgCgGg");
	this.shape_14.setTransform(0,-26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#009DE2","#A0D8F7"],[0,1],23.3,-11.9,-16.2,17.1).s().p("AiWIRQhQisgMkVQgMkTA/jcQA+jbBlghQBjghBQCsQBQCsAMEVQAMETg/DcQg+DbhlAhQgQAGgPAAQhRAAhDiRg");
	this.shape_15.setTransform(0,-26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#009DE2","#A0D8F7"],[0,1],-11.6,-32.9,11.7,32.8).s().p("AlfHcQiSjGAAkWQAAkVCSjGQCSjFDNAAQDOAACSDFQCSDGAAEVQAAEWiSDGQiSDFjOAAQjNAAiSjFg");
	this.shape_16.setTransform(0,-26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#009DE2","#A0D8F7"],[0,1],19.4,-27.3,-13.5,39.2).s().p("AmfIRQjaisgikVQghkUCsjbQCsjbEVghQETghDcCsQDbCsAhEVQAhETisDbIAAABQisDbkVAhQgsAGgqAAQjhAAi4iRg");
	this.shape_17.setTransform(0,-26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E2000F").ss(0.8,0,0,22.9).p("AAAEIIAAoP");
	this.shape_18.setTransform(0,67.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2000F").s().p("Ai5ASQgIAAgFgFQgFgFAAgIQAAgHAFgFQAFgFAIAAIFzAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAg");
	this.shape_19.setTransform(0,62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E2000F").ss(0.6,0,0,22.9).p("ACNgoIkZAAIAMBRIEBAAg");
	this.shape_20.setTransform(0,89.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2000F").s().p("AiAApIgMhRIEZAAIgMBRg");
	this.shape_21.setTransform(0,89.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#EE7C00").ss(0.6,0,0,22.9).p("AgaFJIA0qR");
	this.shape_22.setTransform(9,60.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E2000F").ss(0.6,0,0,22.9).p("AAbFJIg1qR");
	this.shape_23.setTransform(-9,60.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#EE7C00").ss(0.6,0,0,22.9).p("AgxFJIBjqR");
	this.shape_24.setTransform(17.9,60.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#E2000F").ss(0.6,0,0,22.9).p("AAzFJIhkqR");
	this.shape_25.setTransform(-17.9,60.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#EE7C00","#E2000F"],[0,1],18,0,-10.6,0).s().p("AiACoIgzlPIFnAAIgzFPg");
	this.shape_26.setTransform(0,76.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-93.7,134.7,188.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.baloon_svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.4,21.2,0.245,0.245,0,0,0,-0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-1,-1.8,33.1,47), null);


(lib.ballon_rest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(0.9,0.3,1,1,0,0,0,16.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({regX:15.4,regY:21.2,scaleX:1.01,scaleY:1.01,x:-0.3,y:-1.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-1.7},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-0.4},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-1.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-0.5},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-0.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-1.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-0.7},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-0.8},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:-2.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-0.9},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-1},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-2.2},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-1.1},0).wait(1).to({scaleX:1.17,scaleY:1.16},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:-2.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-1.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:-2.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-1.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-1.4},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:-2.5},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-1.5},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:-2.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-1.6},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.27,scaleY:1.26,y:-2.7},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-1.7},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-1.6,y:-2.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-1.5,y:-2.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-1.4,y:-2.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-1.3},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:-2.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-1.2},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.22,scaleY:1.21},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-1.1},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-1,y:-2.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:-2.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:-2.1},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-0.9},0).wait(1).to({scaleX:1.15,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-0.8,y:-2},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-2.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-2},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-0.7},0).wait(1).to({scaleX:1.11,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-0.6,y:-1.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-2},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-1.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-0.5},0).wait(1).to({scaleX:1.07,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-0.4},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.03,y:-1.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:-1.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-0.3,y:-1.8},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-24.7,33,46);


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
	this.instance = new lib.ballon_rest();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,1,1,0,0,0,16.5,22.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({regX:-1.6,regY:-2.8,x:-8.8,y:-21.9},0).wait(1).to({x:1,y:-17.7},0).wait(1).to({x:10.8,y:-13.4},0).wait(1).to({x:20.4,y:-9.1},0).wait(1).to({x:30.1,y:-4.7},0).wait(1).to({x:39.7,y:-0.2},0).wait(1).to({x:49.3,y:4.6},0).wait(1).to({x:57.7,y:9.2},0).wait(1).to({x:66.2,y:16.2},0).wait(1).to({x:73.5,y:23.7},0).wait(1).to({x:80.1,y:32},0).wait(1).to({x:85.1,y:41.5},0).wait(1).to({x:85.8,y:50.6},0).wait(1).to({x:82.6,y:61.4},0).wait(1).to({x:77,y:70.4},0).wait(1).to({x:69.2,y:77.4},0).wait(1).to({x:59.7,y:80.4},0).wait(1).to({x:49,y:80.7},0).wait(1).to({x:38.3,y:79.9},0).wait(1).to({x:27.8,y:78.4},0).wait(1).to({x:17.3,y:76.5},0).wait(1).to({x:6.7,y:74.1},0).wait(1).to({x:-2.8,y:71.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.baloon_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ballon_rest();
	this.instance.parent = this;

	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(0.8,0.2,1,1,0,0,0,16.5,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-24.7,33,46);


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
		
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(145);
		}
	}
	this.frame_145 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(1).call(this.frame_144).wait(1).call(this.frame_145).wait(1));

	// baloon
	this.button_3 = new lib.baloon_button();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(503.3,39.7);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.baloon_button(), 3);

	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(503.3,39.7,1,1,0,0,0,16.5,22.9);
	this.movieClip_2._off = true;

	this.instance = new lib.baloon_is_back();
	this.instance.parent = this;
	this.instance.setTransform(503.5,-39);

	this.instance_1 = new lib.ballon_rest();
	this.instance_1.parent = this;
	this.instance_1.setTransform(519.8,62.6,1,1,0,0,0,16.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_3}]}).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.movieClip_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({_off:false},0).wait(1).to({regX:15.4,regY:21.2,scaleX:1.02,scaleY:1.02,x:511.7,y:31.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:522.3,y:26.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:533.4,y:22.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:544.8,y:20.3},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:556.4,y:18.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:568.1,y:18.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:579.7,y:20.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:591,y:23.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:601.7,y:27.7},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:611.5,y:34},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:620.1,y:41.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:627.5,y:50.7},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:633.6,y:60.6},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:638.5,y:71.2},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:642.4,y:82.2},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:645.4,y:93.5},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:647.5,y:105},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:647.8,y:114.9},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:638.8,y:124.4},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:630.2,y:132.2},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:620.9,y:139.5},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:611,y:145.9},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:600.3,y:151},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:590.3,y:153.4},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:577.9,y:155.9},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:566.3,y:158.3},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:554.7,y:160.7},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:543.2,y:163.2},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:531.8,y:165.7},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:520.3,y:168.3},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:508.9,y:171},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:497.5,y:173.7},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:486.1,y:176.6},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:474.7,y:179.6},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:463.4,y:182.9},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:452.9,y:186.3},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:441.6,y:190.5},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:430.6,y:194.7},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:419.6,y:199.1},0).wait(1).to({scaleX:2,scaleY:2,x:408.8,y:203.6},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:398,y:208.3},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:387.3,y:213},0).wait(1).to({scaleX:2.07,scaleY:2.07,x:376.7,y:218},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:366.1,y:223.2},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:355.7,y:228.6},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:345.4,y:234.3},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:335.4,y:240.5},0).wait(1).to({scaleX:2.38,scaleY:2.38,x:328.7,y:247.5},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:322.6,y:259},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:318.9,y:270.2},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:317.6,y:281.7},0).wait(1).to({scaleX:2.72,scaleY:2.71,x:319.2,y:291.7},0).wait(1).to({scaleX:2.8,scaleY:2.8,x:323.8,y:303.8},0).wait(1).to({scaleX:2.89,scaleY:2.88,x:328.3,y:313.8},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:332.9,y:324.8},0).wait(1).to({scaleX:3.06,scaleY:3.05,x:339.5,y:332.3},0).wait(1).to({scaleX:3.14,scaleY:3.14,x:348.1,y:339.7},0).wait(1).to({scaleX:3.22,scaleY:3.22,x:359.5,y:347.1},0).wait(1).to({scaleX:3.31,scaleY:3.31,x:368.6,y:352.4},0).wait(1).to({scaleX:3.39,scaleY:3.39,x:379.9,y:357.3},0).wait(1).to({scaleX:3.48,scaleY:3.48,x:390.8,y:361.4},0).wait(1).to({scaleX:3.56,scaleY:3.56,x:401.9,y:364.9},0).wait(1).to({scaleX:3.65,scaleY:3.65,x:413.1,y:367.9},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:424.7,y:369.9},0).wait(1).to({scaleX:3.82,scaleY:3.82,x:436.2,y:370.6},0).wait(1).to({scaleX:3.9,scaleY:3.9,x:447.9,y:371.1},0).wait(1).to({scaleX:3.99,scaleY:3.99,x:459.6,y:371.6},0).wait(1).to({scaleX:4.07,scaleY:4.07,x:471.3,y:372},0).wait(1).to({scaleX:4.16,scaleY:4.16,x:484,y:372.3},0).wait(1).to({scaleX:4.24,scaleY:4.24,x:494.1},0).wait(1).to({scaleX:4.49,scaleY:4.48,x:494,y:371.3},0).wait(1).to({scaleX:4.73,scaleY:4.73,x:493.9,y:370.4},0).wait(1).to({scaleX:4.97,scaleY:4.97,x:493.8,y:369.4},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:493.7,y:368.5},0).wait(1).to({scaleX:5.46,scaleY:5.45,x:493.6,y:367.5},0).wait(1).to({scaleX:5.7,scaleY:5.7,x:493.5,y:366.6},0).wait(1).to({scaleX:5.94,scaleY:5.94,x:493.4,y:365.6},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:493.3,y:364.6},0).wait(1).to({scaleX:6.42,scaleY:6.42,x:493.2,y:363.7},0).wait(1).to({scaleX:6.67,scaleY:6.66,x:493.1,y:362.8},0).wait(1).to({scaleX:6.91,scaleY:6.91,x:493,y:361.8},0).wait(1).to({scaleX:7.15,scaleY:7.15,y:360.8},0).wait(1).to({scaleX:7.39,scaleY:7.39,x:492.8,y:359.9},0).wait(1).to({scaleX:7.64,scaleY:7.63,y:358.9},0).wait(1).to({scaleX:7.88,scaleY:7.88,x:492.7,y:357.9},0).wait(1).to({scaleX:8.12,scaleY:8.12,x:492.6,y:357},0).wait(1).to({scaleX:8.36,scaleY:8.36,x:492.5,y:356.1},0).wait(1).to({scaleX:8.61,scaleY:8.6,x:492.4,y:355.1},0).wait(1).to({scaleX:8.85,scaleY:8.85,x:492.3,y:354.1},0).wait(1).to({scaleX:9.09,scaleY:9.09,x:492.2,y:353.2},0).wait(1).to({scaleX:9.33,scaleY:9.33,y:352.3},0).wait(1).to({scaleX:9.58,scaleY:9.57,x:492.1,y:351.3},0).wait(1).to({scaleX:9.82,scaleY:9.82,x:492,y:350.3},0).wait(1).to({scaleX:10.06,scaleY:10.06,x:491.9,y:349.4},0).wait(1).to({scaleX:10.3,scaleY:10.3,y:348.5},0).wait(1).to({scaleX:11.44,scaleY:11.44,x:490.1,y:350.1},0).wait(1).to({scaleX:12.58,scaleY:12.57,x:488.3,y:351.6},0).wait(1).to({scaleX:13.71,scaleY:13.71,x:486.5,y:353.1},0).wait(1).to({scaleX:14.85,scaleY:14.84,x:484.8,y:354.7},0).wait(1).to({scaleX:15.99,scaleY:15.98,x:483,y:356.2},0).wait(1).to({scaleX:17.12,scaleY:17.11,x:481.2,y:357.8},0).wait(1).to({scaleX:18.26,scaleY:18.25,x:479.4,y:359.4},0).wait(1).to({scaleX:19.39,scaleY:19.39,x:477.6,y:360.9},0).wait(1).to({scaleX:20.53,scaleY:20.52,x:475.8,y:362.5},0).wait(1).to({scaleX:21.67,scaleY:21.66,x:474,y:364},0).wait(1).to({scaleX:22.8,scaleY:22.8,x:472.3,y:365.6},0).wait(1).to({scaleX:23.94,scaleY:23.93,x:470.5,y:367.1},0).wait(1).to({scaleX:25.08,scaleY:25.07,x:468.7,y:368.7},0).wait(1).to({scaleX:26.21,scaleY:26.2,x:466.9,y:370.2},0).wait(1).to({scaleX:27.35,scaleY:27.34,x:465.1,y:371.8},0).wait(1).to({scaleX:28.49,scaleY:28.48,x:463.4,y:373.3},0).wait(1).to({scaleX:29.62,scaleY:29.61,x:461.6,y:374.8},0).wait(1).to({scaleX:30.76,scaleY:30.75,x:459.9,y:376.4},0).wait(1).to({scaleX:31.89,scaleY:31.88,x:458.1,y:378},0).wait(1).to({scaleX:33.03,scaleY:33.02,x:456.3,y:379.5},0).wait(1).to({scaleX:34.17,scaleY:34.16,x:454.5,y:381.1},0).wait(1).to({scaleX:35.3,scaleY:35.29,x:452.8,y:382.6},0).wait(1).to({scaleX:36.44,scaleY:36.43,x:451,y:384.2},0).wait(1).to({scaleX:37.58,scaleY:37.56,x:449.4,y:385.7},0).wait(1).to({x:400,y:387.6},0).wait(1).to({x:350.7,y:389.4},0).wait(1).to({x:301.3,y:391.2},0).wait(1).to({x:252,y:393},0).wait(1).to({x:202.6,y:394.8},0).wait(1).to({x:153.2,y:396.7},0).wait(1).to({x:103.9,y:398.5},0).wait(1).to({x:54.5,y:400.3},0).wait(1).to({x:5.1,y:402.1},0).wait(1).to({x:-44.2,y:403.9},0).wait(1).to({x:-93.6,y:405.7},0).wait(1).to({x:-142.9,y:407.6},0).wait(1).to({x:-192.3,y:409.4},0).wait(1).to({x:-241.7,y:411.2},0).wait(1).to({x:-291,y:413},0).wait(1).to({x:-340.4,y:414.8},0).wait(1).to({x:-389.8,y:416.7},0).wait(1).to({x:-439.1,y:418.5},0).wait(1).to({x:-488.5,y:420.3},0).wait(1).to({x:-537.8,y:422.1},0).wait(1).to({x:-587.2,y:423.9},0).wait(1).to({x:-636.6,y:425.7},0).wait(1).to({x:-685.9,y:427.5},0).to({_off:true},1).wait(2));

	// shape
	this.instance_2 = new lib.shape1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(259.8,246.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).wait(1));

	// Bullet
	this.button_4 = new lib.bullet();
	this.button_4.name = "button_4";
	this.button_4.parent = this;
	this.button_4.setTransform(298.9,327.9);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.bullet(), 3);

	this.instance_3 = new lib.bullet1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(967.9,368.4,1,1,0,0,0,0.5,0.5);

	this.instance_4 = new lib.bullet1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(768.4,396.6,1,1,0,0,0,0.5,0.5);

	this.instance_5 = new lib.bullet1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(546.2,397.5,1,1,0,0,0,0.5,0.5);

	this.instance_6 = new lib.bullet1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(369.5,419.4,1,1,0,0,0,0.5,0.5);

	this.instance_7 = new lib.bullet1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(93.6,392.1,1,1,0,0,0,0.5,0.5);

	this.instance_8 = new lib.bullet1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(187.4,421.2,1,1,0,0,0,0.5,0.5);

	this.instance_9 = new lib.bullet1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(197.4,381.1,1,1,0,0,0,0.5,0.5);

	this.instance_10 = new lib.bullet1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(432.4,293.7,1,1,0,0,0,0.5,0.5);

	this.instance_11 = new lib.bullet1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(250.9,344.3);

	this.instance_12 = new lib.bullet_null("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(298.9,327.9,0.658,0.658,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11,p:{x:250.9}},{t:this.instance_10,p:{x:432.4}},{t:this.instance_9,p:{x:197.4}},{t:this.instance_8,p:{x:187.4}},{t:this.instance_7,p:{x:93.6}},{t:this.instance_6,p:{x:369.5}},{t:this.instance_5,p:{x:546.2}},{t:this.instance_4,p:{x:768.4}},{t:this.instance_3,p:{x:967.9}},{t:this.button_4}]},144).to({state:[{t:this.instance_11,p:{x:250.3}},{t:this.instance_10,p:{x:431.8}},{t:this.instance_9,p:{x:196.8}},{t:this.instance_8,p:{x:186.8}},{t:this.instance_7,p:{x:93}},{t:this.instance_6,p:{x:368.9}},{t:this.instance_5,p:{x:545.6}},{t:this.instance_4,p:{x:767.8}},{t:this.instance_3,p:{x:967.3}},{t:this.instance_12}]},1).wait(1));

	// Ресурс 1baloon.svg
	this.instance_13 = new lib.visionbw_2x();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,86,0.462,0.462);

	this.instance_14 = new lib.vision_2x();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,86,0.462,0.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},121).to({state:[{t:this.instance_14}]},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,252.5,1024,460);
// library properties:
lib.properties = {
	id: '7DDA48D0916E43478959750BE71FA6DA',
	width: 1024,
	height: 475,
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