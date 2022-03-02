console.log("background script running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  var msg = {
    txt: "hello, msg received"
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
