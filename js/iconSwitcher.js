  var basemapstatus = "off";
  var legendstatus = "off";
 
 
 function openBasemap(){
		
		 	 if(basemapstatus == "off"){
				document.getElementById("basemapdiv").style.display="block";
				document.getElementById("legendDiv").style.display="none";
				basemapstatus = "on";
			}
			 else if(basemapstatus == "on"){
				 document.getElementById("basemapdiv").style.display="none";
				 basemapstatus = "off";
				
			 } 
		 }
		 
function openLegend(){
		 
			 if(legendstatus == "off"){
				document.getElementById("legendDiv").style.display="block";
				document.getElementById("basemapdiv").style.display="none";
				legendstatus = "on";
			}
			 else if(legendstatus == "on"){
				 document.getElementById("legendDiv").style.display="none";
				 legendstatus = "off";
				
			 }
		 
		 }