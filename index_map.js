var map1;

require([ "infowindow","esri/map", "esri/dijit/Search", "dojo/dom", "esri/dijit/Scalebar",
		"esri/layers/ArcGISDynamicMapServiceLayer","esri/dijit/BasemapGallery", 
		"esri/dijit/Legend", "dojo/_base/array", "dojo/domReady!" ], 
		function(infowindow,Map, Search, dom, Scalebar,
		ArcGISDynamicMapServiceLayer, BasemapGallery, Legend, arrayUtils) {
	map1 = new Map("map", {
		basemap : "satellite", // For full list of pre-defined basemaps,
								// navigate to http://arcg.is/1JVo6Wd
		center : [ -76.627362, 39.283028 ], // longitude, latitude
		zoom : 10

	});

	var l1 = dom.byId("layer1_id").value;
	var l2 = dom.byId("layer2_id").value;

	var layer1 = new ArcGISDynamicMapServiceLayer(l1, {
		"opacity" : 0.7

	});

	var layer2 = new ArcGISDynamicMapServiceLayer(l2, {
		"opacity" : 0.8

	});

	// basemap gallery
	var basemapGallery = new BasemapGallery({
		showArcGISBasemaps : true,
		map : map1
	}, "basemapGallery");
	basemapGallery.startup();

	// adding scale to map
	var scalebar = new Scalebar({
		map : map1,
		scalebarUnit : "dual",

	});

	// add the legend
	map1.on("layers-add-result", function(evt) {
		var layerInfo = arrayUtils.map(evt.layers, function(layer, index) {
			return {
				layer : layer.layer,
				title : layer.layer.name
			};
		});
		if (layerInfo.length > 0) {
			var legendDijit = new Legend({
				map : map1,
				layerInfos : layerInfo
			}, "legendDiv");
			legendDijit.startup();
		}
		

	});

   
	// add Search
	var search = new Search({
		map : map1
	}, "search");
	search.startup();
	infowindow.init();

});
