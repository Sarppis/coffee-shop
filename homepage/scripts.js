'use strict';

/*USEFULL RESOURCES
 1. https://developers.google.com/maps/documentation/javascript/symbols#custom_paths
 2. https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 3. https://developers.google.com/maps/documentation/javascript/shapes
*/

function initialize() {
	let line_finland,
		line_brazil,
		line_canada,
		line_guatemula,
		line_egypt,
		line_ghana,
		line_bangladish,
		line_ethiopia,
		coffee_lines,
		mapOptions,
		map,
		flag,
		squirrel,
		marker,
		marker2; // GLOBALVARIABLES

	// Central area of the map. This is just to make all the areas scale to fit the area of the div
	const CENTER = new google.maps.LatLng(39.3999, 8.2245);

	flag =
		'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
	squirrel = './images/squirrel.png';
	mapOptions = {
		center: CENTER,
		zoom: 2,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	marker = new google.maps.Marker({
		map: map,
		draggable: true,
		//icon: squirrel,

		position: { lat: 62.898, lng: 27.6782 },
	});

	marker2 = new google.maps.Marker({
		map: map,
		draggable: true,
		icon: flag,
		position: { lat: -1.4345, lng: -48.4794 },
	});

	marker.setMap(map); // Set the bouncing marker on destination(finland)
	marker2.setMap(map); // Set the bouncing marker on destination(finland)

	const ETHIOPIA_COORDINATES = [
			new google.maps.LatLng(9.145, 40.4897),
			new google.maps.LatLng(62.898, 27.6782),
		],
		BRAZIL_COORDINATES = [
			new google.maps.LatLng(-1.4345, -48.4794),
			new google.maps.LatLng(62.898, 27.6782),
		],
		CANADA_COORDINATES = [
			new google.maps.LatLng(43.6532, -79.3832),
			new google.maps.LatLng(62.898, 27.6782),
		],
		GUATEMALA_COORDINATES = [
			new google.maps.LatLng(15.7835, -90.2308),
			new google.maps.LatLng(62.898, 27.6782),
		],
		EGYPT_COORDINATES = [
			new google.maps.LatLng(26.8206, 30.8025),
			new google.maps.LatLng(62.898, 27.6782),
		],
		GHANA_COORDINATES = [
			new google.maps.LatLng(5.6037, -0.187),
			new google.maps.LatLng(62.898, 27.6782),
		],
		BANGLADISH_COORDINATES = [
			new google.maps.LatLng(23.8103, 90.4125),
			new google.maps.LatLng(62.898, 27.6782),
		];

	let lineSymbol = {
		path: 'M 0,-1 0,1',
		strokeOpacity: 1,
		scale: 1.5,
		offset: '100%',
	};

	const COFFEE_BEAN_SYMBOL = {
		path:
			'M 127.1 146.5 c 1.3 7.7 8 13.5 16 13.5 h 16.5 c 9.8 0 17.6 -8.5 16.3 -18 c -3.8 -28.2 -16.4 -54.2 -36.6 -74.7 c -14.4 -14.7 -23.6 -33.3 -26.4 -53.5 C 111.8 5.9 105 0 96.8 0 H 80.4 C 70.6 0 63 8.5 64.1 18 c 3.9 31.9 18 61.3 40.6 84.4 c 12 12.2 19.7 27.5 22.4 44.1 Z m 112 0 c 1.3 7.7 8 13.5 16 13.5 h 16.5 c 9.8 0 17.6 -8.5 16.3 -18 c -3.8 -28.2 -16.4 -54.2 -36.6 -74.7 c -14.4 -14.7 -23.6 -33.3 -26.4 -53.5 C 223.8 5.9 217 0 208.8 0 h -16.4 c -9.8 0 -17.5 8.5 -16.3 18 c 3.9 31.9 18 61.3 40.6 84.4 c 12 12.2 19.7 27.5 22.4 44.1 Z M 400 192 H 32 c -17.7 0 -32 14.3 -32 32 v 192 c 0 53 43 96 96 96 h 192 c 53 0 96 -43 96 -96 h 16 c 61.8 0 112 -50.2 112 -112 s -50.2 -112 -112 -112 Z m 0 160 h -16 v -96 h 16 c 26.5 0 48 21.5 48 48 s -21.5 48 -48 48 Z',
		scale: 0.05,
		strokeOpacity: 1,
		strokeColor: '#fff',
		fillColor: '#26ff9d',
		fillOpacity: 1,
		strokeWeight: 2,
	};

	let icons = [
		{
			icon: lineSymbol,
			offset: '0',
			repeat: '7px',
		},
		{
			icon: COFFEE_BEAN_SYMBOL,
			offset: '1',
		},
	];
	line_ethiopia = new google.maps.Polyline({
		path: ETHIOPIA_COORDINATES,
		strokeOpacity: 0,
		geodesic: true,
		icons: icons,
		map: map,
	});

	line_brazil = new google.maps.Polyline({
		path: BRAZIL_COORDINATES,
		strokeOpacity: 0,
		geodesic: true,
		icons: icons,
		map: map,
	});

	line_canada = new google.maps.Polyline({
		path: CANADA_COORDINATES,
		strokeOpacity: 0,
		geodesic: true,
		icons: icons,
		map: map,
	});
	line_guatemula = new google.maps.Polyline({
		path: GUATEMALA_COORDINATES,
		strokeOpacity: 0,
		geodesic: true,
		icons: icons,
		map: map,
	});
	line_egypt = new google.maps.Polyline({
		path: EGYPT_COORDINATES,
		strokeOpacity: 0,
		geodesic: true,
		icons: icons,
		map: map,
	});

	line_ghana = new google.maps.Polyline({
		path: GHANA_COORDINATES,
		strokeOpacity: 0,
		geodesic: true,
		icons: icons,
		map: map,
	});
	line_bangladish = new google.maps.Polyline({
		path: BANGLADISH_COORDINATES,
		strokeOpacity: 0,
		geodesic: true,
		icons: icons,
		map: map,
	});

	coffee_lines = [
		line_brazil,
		line_canada,
		line_guatemula,
		line_egypt,
		line_ghana,
		line_bangladish,
		line_ethiopia,
	];

	animatePlaneLine(line_brazil);
	animatePlaneLine(line_canada);
	animatePlaneLine(line_guatemula);
	animatePlaneLine(line_egypt);
	animatePlaneLine(line_ghana);
	animatePlaneLine(line_bangladish);
	animatePlaneLine(line_ethiopia);

	function animatePlaneLine(targetLine) {
		let count = 0;
		setInterval(function() {
			count = (count + 1) % 200;

			let icons = targetLine.get('icons');
			icons[1].offset = count / 2 + '%';
			targetLine.set('icons', icons);
		}, 100);
	}
}

// DOM MANIPULATION
let basket = {
	coffee: { total: 0 },
	tea: { total: 0 },
	chocolate: { total: 0 },
};

let buttons = document.querySelectorAll('button');
let shopping_basket = document.getElementById('shopping_basket');
shopping_basket.addEventListener('click', function() {
	alert(JSON.stringify(basket));
});

buttons.forEach(button =>
	button.addEventListener('click', function() {
		basket[this.dataset.product].total += 1;
		alert(`${this.dataset.product}  is added to Basket`);
	}),
);
