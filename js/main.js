$( document ).ready(function() {
  //Function for the dropdown tab
//   $('.dropdown-toggle').dropdown();

 
  //Leaflet code for map
  
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});
	
	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
}

  //Longitude and latitude coordinates for locations
  var lnglat = [47.620124, -122.313287]; 
  var mymap = L.map('mapid').setView(lnglat, 13);
  var slulnglat = [47.62388, -122.33067];
  var dtlnglat = [47.61245, -122.33805];

	//apply layers to the map
	L.control.layers(mapLayers).addTo(mymap);
	satLayer.addTo(mymap);
	
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5nZWx1aCIsImEiOiJjaW5wa25pcmcxMDAzdWFtMzhrdmpscnNiIn0.DK0YYY3D2VvBPMnNUhrkvA', {
			maxZoom: 17,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'Coffee'
		}).addTo(mymap);


		L.marker(lnglat).addTo(mymap)
			.bindPopup("<b>Capitol Hill</b>").openPopup();
    L.marker(slulnglat).addTo(mymap)
			.bindPopup("<b>S Lake Union</b>").openPopup();
    L.marker(dtlnglat).addTo(mymap)
			.bindPopup("<b>Downtown</b>").openPopup();
  
		var popup = L.popup();

		function onMapClick(e) {
			popup
// 				.setLatLng(e.latlng)
// 				.setContent("You clicked the map at " + e.latlng.toString())
// 				.openOn(mymap);
		}

		mymap.on('click', onMapClick);
	
});
