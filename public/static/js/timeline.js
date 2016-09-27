// var myHeading = document.querySelector('h1');
// timeline

// var timeline = (function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    // console.log('sdf');
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    // console.log('here');
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events

  if (window.addEventListener) {
      addEventListener('DOMContentLoaded', callbackFunc, false); 
      addEventListener('load', callbackFunc, false); 
      addEventListener('scroll', callbackFunc, false); 
      addEventListener('resize', callbackFunc, false); 
  } else if (window.attachEvent)  {
      attachEvent('onDOMContentLoaded', callbackFunc); // IE9+ :(
      attachEvent('onload', callbackFunc);
      attachEvent('onscroll', callbackFunc);
      attachEvent('onresize', callbackFunc);
  }
  // window.addEventListener("load", callbackFunc);
  // window.addEventListener("resize", callbackFunc);
  // window.addEventListener("scroll", callbackFunc);
  // console.log('final');
// })();
