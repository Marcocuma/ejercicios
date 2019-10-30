navigator.geolocation.watchPosition(function(position) {
	document.write(position.coords.latitude, position.coords.longitude);
});
