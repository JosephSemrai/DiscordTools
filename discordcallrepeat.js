window.setInterval(callbruh(), 20);


function callbruh() { let element = document.getElementsByClassName("member-3-YXUe")[3]
	let e = element.ownerDocument.createEvent('MouseEvents');

	e.initMouseEvent('contextmenu', true, true,
		 element.ownerDocument.defaultView, 1, 0, 0, 0, 0, false,
		 false, false, false,2, null);


	!element.dispatchEvent(e);


	let ringButton = document.getElementsByClassName("item-1Yvehc")[3];
	if (ringButton) {
		ringButton.click();

	}
		     
	let name = element.children[0].children[1].children[0].children[0].innerText
	console.log("Calling " + name);
}


for (let i = 0; i < 500; i++)
{
	window.setTimeout(callbruh,500 + (i*35));
	
}

