var layer1_url;
var layer2_url;
var configdata;
var properiesdata;
var citydata;

$(document).ready(function() {

	configdata = xmlreader("config_file/config.xml");
	propertiesdata = xmlreader("config_file/properies.xml");
    //citydata = xmlreader("config_flie/citylayout.xml");
	test(configdata);
	test2(propertiesdata);
	//loadcitydata(citydata);
});

function xmlreader(filename) {

	if (window.XMLHttpRequest)

	{

		xmlhttp = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome,
		// Opera, Safari

	}

	else

	{

		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // code for IE6, IE5

	}

	xmlhttp.open("GET", filename, false);

	xmlhttp.send();

	return xmlhttp;

}

function test(xml) {
	var xmlDoc = xml.responseXML;
	var dyanamiclayer0 = xmlDoc.getElementsByTagName('dynamiclayer')[0];
	var dyanamiclayer0_url = dyanamiclayer0.getElementsByTagName("url")[0];
	var layer_url1 = dyanamiclayer0_url.childNodes[0];

	var dyanamiclayer1 = xmlDoc.getElementsByTagName('dynamiclayer2')[0];
	var dyanamiclayer1_url = dyanamiclayer1.getElementsByTagName("url")[0];
	var layer_url2 = dyanamiclayer1_url.childNodes[0];

	document.getElementById("layer1_id").value = layer_url1.nodeValue;
	document.getElementById("layer2_id").value = layer_url2.nodeValue;
}
function test2(xml) {
	var xmlDoc = xml.responseXML;
	var dyanamiclayer0 = xmlDoc.getElementsByTagName('featureservicelayer')[0];
	var dyanamiclayer0_url = dyanamiclayer0.getElementsByTagName("url")[0];
	var properties_id = dyanamiclayer0_url.childNodes[0];

	document.getElementById("properties_id").value = properties_id.nodeValue;

	var attributes = dyanamiclayer0.getElementsByTagName("attributes");
	var txt = "";
	for (i = 0; i < attributes.length; i++) {

		txt += "<b>"
				+ attributes[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
				+ "</b> : "
				+ attributes[i].getElementsByTagName("value")[0].childNodes[0].nodeValue
				+ "<br>";

	}

	document.getElementById("txt_id").value = txt;
	
var citylogo = xmlDoc.getElementsByTagName('citylogo')[0];

	document.getElementById("cityfavicon").href = citylogo.childNodes[0].nodeValue
	document.getElementById("citymainlogo").src = citylogo.childNodes[0].nodeValue
.innetHTML

}

function loadcitydata(xml) {
	var xmlDoc = citydata.responseXML;
	
	var citylogo = xmlDoc.getElementsByTagName('citylogo')[0];
	
	document.getElementById("cityfavicon").href = citylogo.childNodes[0].nodeValue
	document.getElementById("citymainlogo").src = citylogo.childNodes[0].nodeValue

}
