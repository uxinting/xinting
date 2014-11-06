x.js
	流星雨：45度向左下方下流星雨(雨为白色，所以应该有深色背景)
		x.starsRain();
	
	雨：垂直向下下雨(雨为白色，所以应该有深色背景)
		x.rain();
		
	进度条：白色进度条
		x.process( options );
		options = { 
			h: 3,//high
			top: '40px',
			left: '40px',
			range: 300,
			background: '#000000',
			forground: '#ffffff',
			begin: { x: 0, y: 1 },
			end: { x: 300, y: 1},
			time: 2000,
			step: 2
		}, 可更改
		
	提示框：默认黑底白字
		x.alert( options );
		options = {
			h: 20,
			left: '200px',
			top: '200px',
			time: 2000,
			background: '#000000',
			forground: '#ffffff',
			text: '提示',
			font: '16px 微软雅黑',
		}