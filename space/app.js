(function() {

		var lastTime = 0;

		var vendors = ['ms', 'moz', 'webkit', 'o'];

		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {

			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];

			window.cancelRequestAnimationFrame = window[vendors[x]+

			  'CancelRequestAnimationFrame'];

		}



		if (!window.requestAnimationFrame)

			window.requestAnimationFrame = function(callback, element) {

				var currTime = new Date().getTime();

				var timeToCall = Math.max(0, 16 - (currTime - lastTime));

				var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 

				  timeToCall);

				lastTime = currTime + timeToCall;

				return id;

			};



		if (!window.cancelAnimationFrame)

			window.cancelAnimationFrame = function(id) {

				clearTimeout(id);

			};

	}())



	var layers = [],

		objects = [],

		

		world = document.getElementById( 'world' ),

		viewport = document.getElementById( 'viewport' ),

		

		d = 10,

		p = 4,

		worldXAngle = 0,

		worldYAngle = 0;

	

	viewport.style.webkitPerspective = p;

	viewport.style.MozPerspective = p;

	viewport.style.oPerspective = p;

	

	generate();

		function createSun() {
	

		var div = document.createElement( 'div'  );

		div.className = 'sunBase';

		var x = 0;

		var y = 0;

		var z = -5;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'sunLayer';

			

			var x = 0;

			var y = 0;

			var z = -5;

			var a = Math.random() * 360;
			//var s = .25 + Math.random();
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

	function createMerc() {
	

		var div = document.createElement( 'div'  );

		div.className = 'cloudBase';

		var x = 0;

		var y = 0;

		var z = -50;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'cloudLayer';

			

			var x = 0;

			var y = 0;

			var z = -50;

			var a = Math.random() * 360;
			//var s = .25 + Math.random();
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
	
	function createVenus() {

	

		var div = document.createElement( 'div'  );

		div.className = 'venusBase';

		var x = 0;

		var y = 0;

		var z = -100;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'venusLayer';

			

			var x = 0;

			var y = 0;

			var z = -100;

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

	function createEarth() {

	

		var div = document.createElement( 'div'  );

		div.className = 'earthBase';

		var x = 0;

		var y = 0;

		var z = -150;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'earthLayer';

			

			var x = 0;

			var y = 0;

			var z = -150;

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
	
	function createMoon() {

	

		var div = document.createElement( 'div'  );

		div.className = 'moonBase';

		var x = 0;

		var y = 0;

		var z = -155;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'moonLayer';

			

			var x = 0;

			var y = 0;

			var z = -155;

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
	
	function createMars() {

	

		var div = document.createElement( 'div'  );

		div.className = 'marsBase';

		var x = 0;

		var y = 0;

		var z = -200;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'marsLayer';

			

			var x = 0;

			var y = 0;

			var z = -200;

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
	
	function createAsteroid() {

	

		var div = document.createElement( 'div'  );

		div.className = 'asteroidBase';

		var x = 0;

		var y = 0;

		var z = -225;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'asteroidLayer';

			

			var x = 0;

			var y = 0;

			var z = -225;

			var a = Math.random() * 360;

			var s = 1;

			//x *= .2; y *= .2;

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
	
	function createJupiter() {

	

		var div = document.createElement( 'div'  );

		div.className = 'jupiterBase';

		var x = 0;

		var y = 0;

		var z = -250;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'jupiterLayer';

			

			var x = 0;

			var y = 0;

			var z = -250;

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
	
	function createSaturn() {

	

		var div = document.createElement( 'div'  );

		div.className = 'saturnBase';

		var x = 0;

		var y = 0;

		var z = -300;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'saturnLayer';

			

			var x = 0;

			var y = 0;

			var z = -300;

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
	
	function createUranus() {

	

		var div = document.createElement( 'div'  );

		div.className = 'uranusBase';

		var x = 0;

		var y = 0;

		var z = -350;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'uranusLayer';

			

			var x = 0;

			var y = 0;

			var z = -350;

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
	
	function createNeptune() {

	

		var div = document.createElement( 'div'  );

		div.className = 'neptuneBase';

		var x = 0;

		var y = 0;

		var z = -400;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'neptuneLayer';

			

			var x = 0;

			var y = 0;

			var z = -400;

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
	
	function createPluto() {

	

		var div = document.createElement( 'div'  );

		div.className = 'plutoBase';

		var x = 0;

		var y = 0;

		var z = -450;

		var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

		div.style.webkitTransform = t;

		div.style.MozTransform = t;

		div.style.oTransform = t;

		world.appendChild( div );

		

		

			var cloud = document.createElement( 'div' );

			cloud.className = 'plutoLayer';

			

			var x = 0;

			var y = 0;

			var z = -450;

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
	
	
	
			


	window.addEventListener( 'mousewheel', onContainerMouseWheel );

	window.addEventListener( 'DOMMouseScroll', onContainerMouseWheel ); 
	
	window.addEventListener( 'keypress', checkKey ); 
	


	/**window.addEventListener( 'mousemove', function( e ) {

		worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;

		worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;

		updateView();

	} );**/



	document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38' ) {
        // up arrow
		d += 10;
		updateView();
    }
	else if(e.keyCode == '40'){
		d -= 10;
		updateView();
	}
   

}
  



	function generate() {

		objects = [];

		if ( world.hasChildNodes() ) {

			while ( world.childNodes.length >= 1 ) {

				world.removeChild( world.firstChild );       

			} 

		}
		
			objects.push( createSun());
			objects.push( createMerc());
			objects.push( createVenus());	
			objects.push( createEarth());
			objects.push( createMoon());
			objects.push( createMars());
			objects.push( createAsteroid());
			objects.push( createJupiter());
			objects.push( createSaturn());
			objects.push( createUranus());
			objects.push( createNeptune());
			objects.push( createPluto());
			
			objects.push(createAllText());
			
	}

	

	function updateView() {

		var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';

		world.style.webkitTransform = t;

		world.style.MozTransform = t;

		world.style.oTransform = t;
		
		
		

	}

	

	function onContainerMouseWheel( event ) {

			

		event = event ? event : window.event;

		d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );

		updateView();

		

	}

	

	function update (){

		

		for( var j = 0; j < layers.length; j++ ) {

			var layer = layers[ j ];

			layer.data.a += layer.data.speed;

			var t = 'translateX( ' + layer.data.x + 'px ) translateY( ' + layer.data.y + 'px ) translateZ( ' + layer.data.z + 'px ) rotateY( ' + ( - worldYAngle ) + 'deg ) rotateX( ' + ( - worldXAngle ) + 'deg ) scale( ' + layer.data.s + ')';

			layer.style.webkitTransform = t;

			layer.style.MozTransform = t;

			layer.style.oTransform = t;

		}

		

		requestAnimationFrame( update );

		

	}

	

	update();