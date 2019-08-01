window.setInterval(callbruh(), 20);


function callbruh() { var element = document.getElementsByClassName("memberOnline-1CIh-0 member-3W1lQa")[3]
	var e = element.ownerDocument.createEvent('MouseEvents');

	e.initMouseEvent('contextmenu', true, true,
		 element.ownerDocument.defaultView, 1, 0, 0, 0, 0, false,
		 false, false, false,2, null);


	!element.dispatchEvent(e);


	var ringbutton = document.getElementsByClassName("item-1Yvehc")[3];
	if (ringbutton) {
		ringbutton.click();

	}
	console.log("calling");
}


for (let i = 0; i < 500; i++)
{
	window.setTimeout(callbruh,500 + (i*35));
	
}

