require(["dojo/dom", "dojo/on", "dojo/dom-style"],

function (dom, on,domStyle) {
  
    var isClicked = true;
    on(dom.byId("Webnotes"), "click", function (e) {
        if (isClicked === false) {
        	var myNode = dom.byId("noteswindow");
        	  domStyle.set(myNode, "display", "none");
            isClicked = true;
        } else {
        	var myNode = dom.byId("noteswindow");
      	  domStyle.set(myNode, "display", "block");
            isClicked = false;
        }
    });  
    });