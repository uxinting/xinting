function wuxinting() {
    "use strict";
	var width = window.innerWidth;
	var height = window.innerHeight;

	var settings = {
		star: {
			area: {
				w: 200,
				h: 200
			},
			
			begin: {
				x: [ 0,	width + 200	],
				y: [ -200, 200 ]
			}
		},
		
		drop: {
			area: {
				w: 1,
				h: 200
			},
			
			begin: {
				x: [ 0, width ],
				y: [ -200, 200 ]
			}
		}
	};
	
	var methods = {
		drawLine: function ( context, begin, end, gradient ) {
			context.strokeStyle = gradient;
			context.moveTo( begin.x, begin.y );
			context.lineTo( end.x, end.y );
			context.stroke();
		},
		
		drawHardLine: function ( context, begin, end, gradient ) {
			var times = Math.floor( methods.random( 1, 4 ) );
			for ( var i = 0; i < times; i++ )
				methods.drawLine( context, begin, end, gradient );
		},
		
		random: function ( min, max ) {
			return Math.random() * ( max - min ) + min;
		},
		
		randomPoint: function ( width, height ) {
			var point = {};
			point.x = Math.floor( Math.random() * width );
			point.y = Math.floor( Math.random() * height );
			return point;
		},
		
		randomLen: function ( max ) {
			return Math.floor( Math.random() * max );
		},
		
		toPoint: function ( arc, point, len ) {
			var np = {};
			np.x = Math.floor( point.x - len * Math.cos( arc ) );
			np.y = Math.floor( point.y + len * Math.cos( arc ) );
			return np;
		},
		
		move: function ( el, x, y ) {
			var id  = setInterval( function () {
				var top = parseInt( el.style.top ) + y;
				var left = parseInt( el.style.left ) - x;
				if ( top > height || left < -300 ) {
					clearInterval( id );
					el.remove();
				}
				
				el.style.top = top+'px';
				el.style.left = left+'px';
			}, 20);
		},
		
		speed: function ( min, max ) {
			return Math.floor( methods.random( min, max ) );
		}
	}
	
	var entity = {
		star: function () {
			var canvas = document.createElement( 'canvas' );
			canvas.width = settings.star.area.w;
			canvas.height = settings.star.area.h;
			canvas.style.position = 'fixed';
			canvas.style.zIndex = 999;
			canvas.style.top = Math.floor( methods.random( settings.star.begin.y[0], settings.star.begin.y[1] ) )+'px';
			canvas.style.left = Math.floor( methods.random( settings.star.begin.x[0], settings.star.begin.x[1] ) )+'px';
			
			var context = canvas.getContext('2d');
			
			var begin = methods.randomPoint( canvas.width, canvas.height );
			var end = methods.toPoint( 1, begin, methods.randomLen( Math.sqrt( Math.pow( canvas.width, 2) + Math.pow( canvas.height, 2 ) ) ) );
			
			var alpha = Math.random() * 0.3;
			var gradient = context.createLinearGradient(begin.x, begin.y, end.x, end.y);
			gradient.addColorStop(0,"rgba(255, 255, 255, "+ ( 0.3-alpha ) +")");
			gradient.addColorStop(1,"rgba(255, 255, 255, "+ ( 1-alpha ) +")");
			
			methods.drawHardLine( context, begin, end, gradient );
			document.body.insertBefore( canvas, document.body.firstChild);
			return canvas;
		},
		
		drop: function () {
			var canvas = document.createElement( 'canvas' );
			canvas.width = settings.drop.area.w;
			canvas.height = settings.drop.area.h;
			canvas.style.position = 'fixed';
			canvas.style.zIndex = 999;
			canvas.style.top = Math.floor( methods.random( settings.drop.begin.y[0], settings.drop.begin.y[1] ) )+'px';
			canvas.style.left = Math.floor( methods.random( settings.drop.begin.x[0], settings.drop.begin.x[1] ) )+'px';
			
			var context = canvas.getContext('2d');
			var begin = methods.randomPoint( canvas.width, canvas.height );
			var len = Math.floor( methods.random( 50, canvas.height - 50 ) );
			var end = {
				x: 0,
				y: begin.y + len
			};
			
			var alpha = Math.random() * 0.3;
			var gradient = context.createLinearGradient(begin.x, begin.y, end.x, end.y);
			gradient.addColorStop(0,"rgba(255, 255, 255, "+ ( 0.3-alpha ) +")");
			gradient.addColorStop(1,"rgba(255, 255, 255, "+ ( 1-alpha ) +")");
			
			methods.drawHardLine( context, begin, end, gradient );
			document.body.insertBefore( canvas, document.body.firstChild );
			return canvas;
		}
	}
	
	this.starsRain = function( time ) {
		setInterval( function () {
			var speed = Math.floor( methods.random( 5, 10 ) );
			methods.move( entity.star(), speed, speed );
		}, time );
	}
	
	this.rain = function( time ) {
		setInterval( function () {
			methods.move( entity.drop(), 0, methods.speed( 5, 7 ) );
		}, time );
	}
}

function tips() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	var settings = {
		process: {
			h: 3,
			top: '40px',
			left: '40px',
			range: 300,
			background: '#000000',
			forground: '#ffffff',
			begin: { x: 0, y: 1 },
			end: { x: 300, y: 1},
			time: 2000,
			step: 2
		},
		
		message: {
			h: 20,
			left: '200px',
			top: '200px',
			time: 2000,
			background: '#000000',
			forground: '#ffffff',
			text: '提示',
			font: '14px 微软雅黑 Times New Roma',
		}
	}
	
	var entity = {
		process: function ( opt ) {
			if ( typeof opt !== 'undefine' ) {
				for ( var item in opt ) {
					settings.process[item] = opt[item];
				}
			}
		
			var canvas = document.createElement( 'canvas' );
			canvas.width = settings.process.range;
			canvas.height = settings.process.h;
			canvas.style.position = 'fixed';
			canvas.style.top = settings.process.top;
			canvas.style.left = settings.process.left;
			canvas.style.zIndex = 999;
			
			var context = canvas.getContext('2d');
			methods.drawLine( context, settings.process.begin, settings.process.end, settings.process.background );
			document.body.insertBefore( canvas, document.body.firstChild);
			
			return canvas;
		},
		
		message: function ( opt ) {
			if ( typeof opt !== 'undefine' ) {
				for ( var item in opt ) {
					settings.message[item] = opt[item];
				}
			}
			
			var canvas = document.createElement( 'canvas' );
			settings.message.size = parseInt( settings.message.font );
			
			canvas.height = settings.message.h;
			canvas.style.position = 'fixed';
			canvas.style.top = settings.message.top;
			canvas.style.left = settings.message.left;
			canvas.style.opacity = 0;
			canvas.style.zIndex = 999;
			
			var context = canvas.getContext( '2d' );
			canvas.width = settings.message.w = methods.extent( settings.message.text, settings.message.size );
			canvas.height = settings.message.h = settings.message.size * 2;
			canvas.style.left = ( width - settings.message.w ) / 2 + 'px';
			
			//background
			context.fillStyle = settings.message.background;
			context.fillRect( 0, 0, settings.message.w, settings.message.h );
			
			//text
			context.fillStyle = settings.message.forground;
			context.font = settings.message.font;
			context.textBaseline = 'bottom';
			context.fillText( settings.message.text, settings.message.w * 0.1, settings.message.size * 1.5 );
			
			document.body.insertBefore( canvas, document.body.firstChild);
			
			return canvas;
		}
	}
	
	var methods = {
	
		drawLine: function ( context, begin, end, gradient ) {
			context.beginPath();
			context.strokeStyle = gradient;
			context.moveTo( begin.x, begin.y );
			context.lineTo( end.x, end.y );
			context.stroke();
			context.closePath();
		},
		
		move: function ( el ) {
			var context = el.getContext('2d');
			var current = 0;
			var id = setInterval( function () {
				if ( current >= settings.process.range ) {
					clearInterval( id );
					return;
				}
				
				current += settings.process.step;
				settings.process.end.x = current;
				methods.drawLine( context, settings.process.begin, settings.process.end, settings.process.forground );
			}, settings.process.time * settings.process.step / settings.process.range);
		},
        
        extent: function ( text, size ) {
            var el = document.createElement( 'div' );
            el.setAttribute( 'style', 'position:absolute;font-size:' + size + 'px;visibility:hidden;' )
            el.innerHTML = text;
            document.body.appendChild( el )
            return el.offsetWidth * 1.2
        },
		
		show: function ( el ) {
			var opacity = 0.01;
			
			var id = setInterval( function () {
				el.style.opacity = opacity;
				opacity += 0.05;
				
				if ( el.style.opacity >= 1 ) {
					setTimeout( function () {
						methods.hide( el );
					}, settings.message.time );
					clearInterval( id );
				}
			}, 20);
		},
		
		hide: function ( el ) {
			var opacity = 1;
			
			var id = setInterval( function () {
				el.style.opacity = opacity;
				opacity -= 0.05;
				
				if ( el.style.opacity <= 0 ) {
					el.remove();
					clearInterval( id );
				}
			}, 20 );
		}
	}
	
	this.process = function ( opt ) {
		methods.move( entity.process( opt ) );
	}
	
	this.alert = function ( opt ) {
		methods.show( entity.message( opt ) );
	}
}

var x = {
	starsRain: function () {
		new wuxinting().starsRain( 200 );
	},
	
	rain: function () {
		new wuxinting().rain( 200 );
	},
	
	process: function ( options ) {
		new tips().process( options );
	},
	
	alert: function ( options ) {
		new tips().alert( options );
	}
}