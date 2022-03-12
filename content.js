(function() {
  console.log("working");
  // document.body.style.backgroundColor = 'powderblue';
})();

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
  console.log("background.js working");
}

window.setTimeout(doThis, 1000);

function doThis() {
  var localImages = ["cat-g16c636668_640.jpg",
  "cat-g80632bd7c_640.jpg",
  "cat-img.jpg",
  "cat-g35a7f95bc_640.jpg",
  "cat-gee16ef1fa_640.jpg",
  "cat-g74d3ea1ae_640.jpg",
  "cat-gffba8edca_640.jpg"];

  var allImages = document.getElementsByTagName('img');
  var imgContainers = document.querySelectorAll('[style*="background-image"]');

  for (let i=0; i < allImages.length; i++) {
    let randomId = Math.floor(Math.random() * localImages.length);
    let fileName = "images/" + localImages[randomId];
    allImages[i].src = chrome.extension.getURL(fileName);
  }

  for (let i=0; i < imgContainers.length; i++) {
    let randomId = Math.floor(Math.random() * localImages.length);
    let fileName = "images/" + localImages[randomId];
    imgContainers[i].style.backgroundImage = `url(${ fileName2 })`;
  }
}
