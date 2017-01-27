var template;

define("infowindow", 
	   ["dojo/dom","esri/InfoTemplate","esri/layers/FeatureLayer", "dojo/domReady!"],
function(dom,InfoTemplate,FeatureLayer) {
function initialize(){
	var l3 = dom.byId("properties_id").value;
	var infotext = dom.byId("txt_id").value;
	
	 var template = new InfoTemplate();
		template.setTitle("Feature Info");
		template.setContent(infotext);
	 
	  var leakPointslayer = new FeatureLayer(l3, {
		
		infoTemplate: template,
		outFields: ["*"]
	});

	  map1.addLayer(leakPointslayer);
}

				  return {
					  init:function (){
						
						  initialize();
					  }
				  }
});