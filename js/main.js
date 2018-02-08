// Define a function with two parameters i.e. id and targetId
function loadImage(id, targetId) {
  // Fetch the HTML element by id
  var el = document.getElementById(id);
  // Fetch a target element to add a class to, but only if a targetId is provided. Otherwise, we revert to the element above
  var targetEl = targetId ? document.getElementById(targetId) : el;
  // Instantiate the imageToLoad variable
  var imageToLoad;
  /* There are 3 (mutually exclusive) cases to set the value of imageToLoad :
    * if data-image is provided, we use that value
    * if the browser doesn't support srcset and currentSrc , we use the src value of the <img> 
    * otherwise we can simply use currentSrc */
  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }
  // We check if imageToLoad holds a value
  if (imageToLoad) {
    // We then create a new image from which the src is the value of the imageToLoad
    var img = new Image();
    img.src = imageToLoad;
    // When the image is completely loaded by the browser, we add the CSS class is-loaded to the target element
    img.onload = function() {
      targetEl.classList.add("is-loaded");
    };
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");
});

document.addEventListener("DOMContentLoaded", function() {
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");
});
