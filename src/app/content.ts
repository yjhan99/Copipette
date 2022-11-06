import * as d3 from 'd3';
import './content.css';
import { useRef, useEffect, useState, Fragment} from 'react';
chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            console.log("We're in the injected content script!")
        }
    })
    // var apiKey = "trnsl.1.1.20171031T094741Z.b8618875ef69a6bb.d4baa2b7efd346de3d5d51c9d805ab3cc18aada9";
    // var langDirection = "en-zh"

    var newdiv=document.createElement("div");
    newdiv.setAttribute('class', 'newdiv');
    document.body.appendChild(newdiv);
    var pipette = document.createElement("img");
    pipette.src = "https://ifh.cc/g/Jvlrbc.png";
    pipette.setAttribute('class', 'pipette');
    document.body.appendChild(pipette);
    var bubble = document.createElement('div');
    bubble.setAttribute('class', 'bubble');
    document.body.appendChild(bubble);

    // Lets listen to mouseup DOM events.
    document.addEventListener('mouseup', function (e) {
        console.log("document.addEventListener.mouseup().e:" + JSON.stringify(e))
        var selection = window.getSelection().toString();
        if (selection.length > 0) {
            renderRectangle(e.pageX-20, e.pageY+5, 200, 100);
            renderPipette(e.pageX-20, e.pageY-30, 40, 50)
            translateText(e.pageX-20, e.pageY+5, selection);
        }
    }, false);
    // Close the bubble when we click on the screen.
    document.addEventListener('mousedown', function (e) {
        bubble.style.visibility = 'hidden';
        newdiv.style.visibility = 'hidden';
        pipette.style.visibility = 'hidden';
    }, false);


    function renderRectangle(left, top, width, height) {
        if (document.createElement) {
          newdiv.style.position="absolute";
          newdiv.style.left = left+"px";
          newdiv.style.top  = top+"px";
          newdiv.style.width = width+"px";
          newdiv.style.height = height+"px";
          newdiv.style.backgroundColor = 'white';
          newdiv.style.visibility = 'visible';
          newdiv.id = 'newdiv';
          //document.body.appendChild(newdiv);
          }
        }
    function renderPipette(left, top, width, height){
        if (document.createElement) {
            pipette.style.position="absolute";
            pipette.style.left = left+"px";
            pipette.style.top  = top+"px";
            pipette.style.width = width+"px";
            pipette.style.height = height+"px";
            pipette.style.visibility = 'visible';
            pipette.id = 'pipette';
        }
    }
    function translateText(mouseX, mouseY, selection) {
        renderBubble(mouseX, mouseY, selection)
    }
    // Move that bubble to the appropriate location.
    function renderBubble(mouseX, mouseY, selection) {
        bubble.innerHTML = selection;
        bubble.style.top = mouseY + 10 + 'px';
        bubble.style.left = mouseX + 10 + 'px';
        bubble.style.visibility = 'visible';
        bubble.style.position = 'absolute';
    }
// // Add bubble to the top of the page.
// var bubble = document.createElement('div');
// bubble.setAttribute('class', 'bubble');
// document.body.appendChild(bubble);

// // Lets listen to mouseup DOM events.
// document.addEventListener('mouseup', function (e) {
//   var selection = window.getSelection().toString();
//   if (selection.length > 0) {
//     translateText(e.clientX-20, e.clientY+30, selection);
//   }
// }, false);

// // Close the bubble when we click on the screen.
// document.addEventListener('mousedown', function (e) {
//   bubble.style.visibility = 'hidden';
// }, false);

// function translateText(mouseX, mouseY, selection) {
//   var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + apiKey + "&text=" + selection + "&lang=" + langDirection
//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//         if (/^[a-z\d\-_\s]+$/i.test(data.text[0])) {
//           renderBubble(mouseX, mouseY, "Translation not found.");
//         } else {
//           renderBubble(mouseX, mouseY, data.text[0]);
//         }
//     })
//     .catch(function(err) {
//         console.error('An error ocurred', err);
//     });
// }

// // Move that bubble to the appropriate location.
// function renderBubble(mouseX, mouseY, selection) {
//   bubble.innerHTML = selection;
//   bubble.style.top = mouseY + 'px';
//   bubble.style.left = mouseX + 'px';
//   bubble.style.visibility = 'visible';
// }
})