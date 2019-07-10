// Please note that due to the different CSS classes that Discord applies to the buttons depending on your device, the "automatic leave button presser" may not work. Thus, it is recommended that you just press the leave button yourself rapidly after running the tool.

// var aTags = document.getElementsByClassName("channel-2QD9_O");
// var searchText = "Nitro";
// var found;

// for (var i = 0; i < aTags.length; i++) {
//     if (aTags[i].textContent == searchText) {
//         found = aTags[i];
//         break;
//     }
// }

confirm("This app is dependent on it being updated as it relies on some tricky math with Discord's offset between the close variables and the actual user row. You may leave groups that you don't intend to leave if this hasn't been updated. Do you understand?");

bruhoffset = 4; //current discord offset

found = document.getElementsByClassName("wrapper-2h3Puq")[0];
found.setAttribute("class", "wrapper-2h3Puq");
found.style.cssText = "z-index: 9000; height:15vh;";


//create linebreak element
br = document.createElement("br");

welcome = document.createElement("H1");
welcomeinner = document.createTextNode("Welcome to this tool that is unnamed");
welcome.appendChild(welcomeinner);
welcome.style.cssText = "font-weight:bold; font-size: 2em; color: red; margin: 0vh 1vh 0vh 1vh; background: -webkit-linear-gradient(#FF8008, #FFC837); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";

helptext = document.createElement("H1");
innertext = document.createTextNode("Enter in a threshold \(you will leave groups that are smaller than this number\)");
helptext.appendChild(innertext);
helptext.style.cssText = "font-weight:bold; font-size: 1.5em; color: black; margin: 0vh 1vh 0vh 1vh;";

button = document.createElement("BUTTON");
button.style.cssText = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); margin: 1vh; background-color: #008CBA; border: none; color: white; padding: 1vh; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 30px;";
button.setAttribute("id", "joesebutton");
button.innerHTML = "Submit Threshold";

form = document.createElement("INPUT");
form.setAttribute("type", "text");
form.setAttribute("class", "joeinput");
form.setAttribute("placeholder", "Enter threshold...");
form.style.cssText = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); margin: 1vh; border: none; color: black; padding: 1vh; display: inline-block; font-size: 16px; border-radius: 30px;";

card = document.createElement("DIV");
card.style.cssText = "margin-left: auto; margin-right: auto; background-color: white; width: 80%; height: 90%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px; text-align: center; border-radius: 40px;"
found.innerHTML = "";
found.appendChild(card);
card.appendChild(welcome);
card.appendChild(br);
card.appendChild(form);
card.appendChild(button);
card.appendChild(br);
card.appendChild(helptext);

document.getElementById("joesebutton").onclick = function () {

    autoClick = confirm("Would you like to automatically leave the groups? (Press cancel for no) CURRENTLY NOT RECOMMENDED, WILL FREEZE DISCORD, PROCEED AT YOUR OWN RISK; JUST SPAM CLICK THE PROMPTS INSTEAD");
    threshold = form.value;

    i = 4;
    while (document.getElementsByClassName("channel-2QD9_O")[i] != undefined) {
        activitySelector = document.getElementsByClassName("channel-2QD9_O")[i].querySelector("a").querySelector(".name-2WpE7M").querySelector(".activity-525YDR");
        console.log(i);

        if (activitySelector != null) // checks if it actually has an activity status
        {

            content = document.getElementsByClassName("channel-2QD9_O")[i].querySelector("a").querySelector(".name-2WpE7M").querySelector(".activity-525YDR").innerHTML;
            if (content.substring(0, 1) < threshold) {
                console.log(content);
                console.log(i);
                console.log(bruhoffset);
                document.getElementsByClassName("close-3hZ5Ni")[i - bruhoffset].click();

                if (autoClick) {
                    var aTags = document.getElementsByClassName("button-38aScr");
                    var searchText = "Leave Group";
                    var found;

                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].textContent == searchText) {
                            found = aTags[i];
                            break;
                        }
                    }
                    found.click();
                }
            }
        }

        i++;
    }

};
