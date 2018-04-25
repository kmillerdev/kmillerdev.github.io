function createTextStart() {

		var div = document.createElement( 'div'  );

		div.className = 'startTextBase';

		var x = 0;

		var y = 0;

		var z = -1;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'startTextLayer';

			

			var x = 0;

			var y = 0;

			var z = -1;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}


function createTextMerc1() {

		var div = document.createElement( 'div'  );

		div.className = 'mercTextBase1';

		var x = 0;

		var y = 0;

		var z = -60;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'mercTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -60;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	
	
	function createTextMerc2() {

		var div = document.createElement( 'div'  );

		div.className = 'mercTextBase2';

		var x = 0;

		var y = 0;

		var z = -70;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'mercTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -70;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextMerc3() {

		var div = document.createElement( 'div'  );

		div.className = 'mercTextBase3';

		var x = 0;

		var y = 0;

		var z = -85;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'mercTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -85;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextSun1() {

		var div = document.createElement( 'div'  );

		div.className = 'sunTextBase3';

		var x = 0;

		var y = 0;

		var z = -10;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'sunTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -10;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextSun2() {

		var div = document.createElement( 'div'  );

		div.className = 'sunTextBase2';

		var x = 0;

		var y = 0;

		var z = -20;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'sunTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -20;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextSun3() {

		var div = document.createElement( 'div'  );

		div.className = 'sunTextBase3';

		var x = 0;

		var y = 0;

		var z = -35;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'sunTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -35;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextVenus1() {

		var div = document.createElement( 'div'  );

		div.className = 'venusTextBase1';

		var x = 0;

		var y = 0;

		var z = -110;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'venusTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -110;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	function createTextVenus2() {

		var div = document.createElement( 'div'  );

		div.className = 'venusTextBase2';

		var x = 0;

		var y = 0;

		var z = -120;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'venusTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -120;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	function createTextVenus3() {

		var div = document.createElement( 'div'  );

		div.className = 'venusTextBase3';

		var x = 0;

		var y = 0;

		var z = -135;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'venusTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -135;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}

function createTextEarth1() {

		var div = document.createElement( 'div'  );

		div.className = 'earthTextBase1';

		var x = 0;

		var y = 0;

		var z = -160;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'earthTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -160;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}

function createTextEarth2() {

		var div = document.createElement( 'div'  );

		div.className = 'earthTextBase2';

		var x = 0;

		var y = 0;

		var z = -170;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'earthTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -170;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
function createTextEarth3() {
	
	

		var div = document.createElement( 'div'  );

		div.className = 'earthTextBase3';

		var x = 0;

		var y = 0;

		var z = -185;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'earthTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -185;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextMoon() {
	
	

		var div = document.createElement( 'div'  );

		div.className = 'moonTextBase';

		var x = 0;

		var y = 0;

		var z = -153;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'moonTextLayer';

			

			var x = 0;

			var y = 0;

			var z = -153;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextMars1() {

		var div = document.createElement( 'div'  );

		div.className = 'marsTextBase1';

		var x = 0;

		var y = 0;

		var z = -210;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'marsTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -210;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}

	function createTextMars2() {

		var div = document.createElement( 'div'  );

		div.className = 'marsTextBase2';

		var x = 0;

		var y = 0;

		var z = -220;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'marsTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -220;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextMars3() {

		var div = document.createElement( 'div'  );

		div.className = 'marsTextBase3';

		var x = 0;

		var y = 0;

		var z = -235;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'marsTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -235;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	
	
	function createTextJupiter1() {

		var div = document.createElement( 'div'  );

		div.className = 'jupTextBase1';

		var x = 0;

		var y = 0;

		var z = -260;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'jupTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -260;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextJupiter2() {

		var div = document.createElement( 'div'  );

		div.className = 'jupTextBase2';

		var x = 0;

		var y = 0;

		var z = -270;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'jupTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -270;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}

	function createTextJupiter3() {

		var div = document.createElement( 'div'  );

		div.className = 'jupTextBase3';

		var x = 0;

		var y = 0;

		var z = -285;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'jupTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -285;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextSaturn1() {
	

		var div = document.createElement( 'div'  );

		div.className = 'satTextBase1';

		var x = 0;

		var y = 0;

		var z = -310;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'satTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -310;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextSaturn2() {
	

		var div = document.createElement( 'div'  );

		div.className = 'satTextBase2';

		var x = 0;

		var y = 0;

		var z = -320;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'satTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -320;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextSaturn3() {
	

		var div = document.createElement( 'div'  );

		div.className = 'satTextBase3';

		var x = 0;

		var y = 0;

		var z = -335;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'satTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -335;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
function createTextUranus1() {
	

		var div = document.createElement( 'div'  );

		div.className = 'uraTextBase1';

		var x = 0;

		var y = 0;

		var z = -360;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'uraTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -360;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}	
	
	function createTextUranus2() {
	

		var div = document.createElement( 'div'  );

		div.className = 'uraTextBase2';

		var x = 0;

		var y = 0;

		var z = -370;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'uraTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -370;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextUranus3() {
	

		var div = document.createElement( 'div'  );

		div.className = 'uraTextBase3';

		var x = 0;

		var y = 0;

		var z = -385;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'uraTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -385;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
function createTextNeptune1() {
	

		var div = document.createElement( 'div'  );

		div.className = 'nepTextBase1';

		var x = 0;

		var y = 0;

		var z = -410;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'nepTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -410;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextNeptune2() {
	

		var div = document.createElement( 'div'  );

		div.className = 'nepTextBase2';

		var x = 0;

		var y = 0;

		var z = -420;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'nepTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -420;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
	
	function createTextNeptune3() {
	

		var div = document.createElement( 'div'  );

		div.className = 'nepTextBase3';

		var x = 0;

		var y = 0;

		var z = -435;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'nepTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -435;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}

function createTextPluto1() {
	

		var div = document.createElement( 'div'  );

		div.className = 'plutoTextBase1';

		var x = 0;

		var y = 0;

		var z = -460;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'plutoTextLayer1';

			

			var x = 0;

			var y = 0;

			var z = -460;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}	
	
	function createTextPluto2() {
	

		var div = document.createElement( 'div'  );

		div.className = 'plutoTextBase2';

		var x = 0;

		var y = 0;

		var z = -470;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'plutoTextLayer2';

			

			var x = 0;

			var y = 0;

			var z = -470;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}

	function createTextPluto3() {
	

		var div = document.createElement( 'div'  );

		div.className = 'plutoTextBase3';

		var x = 0;

		var y = 0;

		var z = -480;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'plutoTextLayer3';

			

			var x = 0;

			var y = 0;

			var z = -480;

			var a = Math.random() * 360;

			var s = 1;

			x *= .2; y *= .2;

			cloud.data = { 

				x: x,

				y: y,

				z: z,

				a: a,

				s: s,

				speed: .1 * Math.random()

			};

			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

			cloud.style.webkitTransform = t;

			cloud.style.MozTransform = t;

			cloud.style.oTransform = t;

		

			div.appendChild( cloud );

			layers.push( cloud );

		

		

		return div;

	}
function createAllText(){
	createTextStart();
	createTextSun1();
	createTextSun2();
	createTextSun3();
	createTextMerc1();
	createTextMerc2();
	createTextMerc3();
	createTextVenus1();
	createTextVenus2();
	createTextVenus3();
	createTextEarth1();
	createTextEarth2();
	createTextEarth3();
	createTextMoon();
	createTextMars1();
	createTextMars2();
	createTextMars3();
	
	createTextJupiter1();
	createTextJupiter2();
	createTextJupiter3();
	createTextSaturn1();
	createTextSaturn2();
	createTextSaturn3();
	createTextUranus1();
	createTextUranus2();
	createTextUranus3();
	createTextNeptune1();
	createTextNeptune2();
	createTextNeptune3();
	createTextPluto1();
	createTextPluto2();
	createTextPluto3();
}