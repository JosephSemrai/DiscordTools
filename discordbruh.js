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



// Channel Selector Query Offset (amount of categories above the first user element in the messages column)
const channelSelectorQueryOffset = 3;

container = document.createElement("div");
container.style.cssText = "";

found = document.getElementsByClassName("chat-3bRxxu")[0];
found.style.cssText = "flex: 1";


// Imperative UI creation
br = document.createElement("br");

welcome = document.createElement("H1");
welcomeinner = document.createTextNode("Welcome to this tool that is unnamed");
welcome.appendChild(welcomeinner);
welcome.style.cssText = "font-weight:bold; font-size: 2em; color: black; margin-bottom: 20px;";

helptext = document.createElement("H1");
innertext = document.createTextNode("Enter in a threshold \(you will leave groups that are smaller than this number\)");
helptext.appendChild(innertext);
helptext.style.cssText = "font-size: 1em; color: black; margin: 0vh 1vh 5vh 1vh;";

button = document.createElement("BUTTON");
button.style.cssText = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); margin: 0.5vh; background-color: #008CBA; border: none; color: white; padding: 1vh; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 5px;";
button.setAttribute("id", "awaitButton");
button.innerHTML = "Submit Threshold and Start";

// Input element creation
form = document.createElement("INPUT");
form.setAttribute("type", "text");
form.setAttribute("class", "joeinput");
form.setAttribute("placeholder", "Enter threshold...");
form.style.cssText = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); width: 60%; border: none; color: black; padding: 1vh; display: inline-block; font-size: 16px; border-radius: 5px;";


// Exclusion form creation
exclusionForm = document.createElement("INPUT");
exclusionForm.setAttribute("type", "text");
exclusionForm.setAttribute("class", "exclusionInput");
exclusionForm.setAttribute("placeholder", "Enter a group name to exclude...");
exclusionForm.style.cssText = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); width: 60%; border: none; color: black; padding: 1vh; display: inline-block; font-size: 16px; border-radius: 5px;";

exclusionFormSubmitButton = document.createElement("BUTTON");
exclusionFormSubmitButton.style.cssText = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); margin: 0.5vh; background-color: #008CBA; border: none; color: white; padding: 1vh; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 5px;";
exclusionFormSubmitButton.setAttribute("id", "awaitButton");
exclusionFormSubmitButton.innerHTML = "Add Group";

// Create the card and add all elements to it
card = document.createElement("DIV");
card.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; margin-left: auto; margin-right: auto; margin-top: auto; margin-bottom: auto; background-color: white; width: 80%; height: 90%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px; text-align: center; border-radius: 5px;"
found.innerHTML = "";
found.appendChild(card);
card.appendChild(welcome);
card.appendChild(helptext);
card.appendChild(br);
card.appendChild(form);
card.appendChild(button);
card.appendChild(br);
card.appendChild(exclusionForm);
card.appendChild(exclusionFormSubmitButton)



// Add listener to the submit button so that we can execute the following function upon receiving a value;
document.getElementById("awaitButton").onclick = function () {

  // Input validation
  if (!form.value) return alert("Please enter a number.");

    // const autoClick = confirm("Would you like to automatically leave the groups? (Press cancel for no) CURRENTLY NOT RECOMMENDED, WILL FREEZE DISCORD, PROCEED AT YOUR OWN RISK; JUST SPAM CLICK THE PROMPTS INSTEAD");
    const threshold = form.value;

    i = channelSelectorQueryOffset;
    while (document.getElementsByClassName("channel-2QD9_O")[i] != undefined) {
        const innerChannelElement = document.getElementsByClassName("channel-2QD9_O")[i + channelSelectorQueryOffset].children[0]

        const channelDescriptors = innerChannelElement.children[1]
        const channelActions = innerChannelElement.children[2]
        
        const memberCount = channelDescriptors.children[1].children[0] ? channelDescriptors.children[1].children[0].innerHTML : 0; // 0 members represents a non-group channel
        const channelName = channelDescriptors.children[0].children[0].innerHTML;
        
        const leaveAction = channelActions.children[0];
        
        (memberCount < threshold) ? leaveAction.click() : console.log(`Skipping ${channelName}`);
        
        i++;
    }

};



