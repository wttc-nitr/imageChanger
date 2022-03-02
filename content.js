(function() {
  console.log("working");
  // document.body.style.backgroundColor = 'powderblue';
})();

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
  var arr = document.querySelectorAll("img");
  for (var i=0; i < arr.length; i++){
      arr[i].src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g_Wi6ssBGAm8sIj819VE2AHaHz%26pid%3DApi&f=1";
  }
}
