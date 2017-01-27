require(["dojo/dom", "dojo/on", "dojo/dom-style"],

function (dom, on,domStyle) {
  
    var isqueryclicked = true;
    on(dom.byId("querywidget"), "click", function (e) {
        if ( isqueryclicked === false) {
        	var myNode = dom.byId("querywindow");
        	  domStyle.set(myNode, "display", "none");
        	  isqueryclicked = true;
        } else {
        	var myNode = dom.byId("querywindow");
      	  domStyle.set(myNode, "display", "block");
      	isqueryclicked = false;
        }
    });
    
    
});