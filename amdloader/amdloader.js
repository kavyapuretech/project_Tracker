require([ "dojo/dom", "dojo/_base/xhr", "dojo/domReady!" ], function(dom, xhr) {

	var url1 = require.toUrl("./amdloader/footer.html");
	var url2 = require.toUrl("./amdloader/message.html");
	var url3 = require.toUrl("./amdloader/widgets.htm");
	var url4 = require.toUrl("./amdloader/webnote.htm");
	
	// footer code
	xhr.get({
		url : url1,
		load : function(html) {
			dom.byId("hiddenfooter").innerHTML = html;
		}
	});

	//message pop up
	xhr.get({
		url : url2,
		load : function(html) {
			dom.byId("message_popup").innerHTML = html;
			
		}
	});
	
	//widgets window
	xhr.get({
		url : url3,
		load : function(html) {
			dom.byId("widgetid").innerHTML = html;
			
		}
	});
	
	//widgets webnote
	xhr.get({
		url : url4,
		load : function(html) {
			dom.byId("webnoteid").innerHTML = html;
			
		}
	});
});