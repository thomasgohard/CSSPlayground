(function(doc, win) {
	"use strict";

	var body = doc.body,
		target = doc.getElementById("target"),
		targetStyles = win.getComputedStyle(target, null),
		results = doc.createElement("div"),
		test = doc.createTextNode("vertical-align: " + targetStyles.verticalAlign);
	
	results.setAttribute("id", "results");
	results.appendChild(test);
	body.insertBefore(results, body.firstChild);
})(document, window);
