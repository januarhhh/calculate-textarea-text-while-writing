var myTextarea = document.getElementById('myText'),
    mySpan = document.getElementById('mySpan');

myTextarea.onkeyup = function() {
    'use strict';
    mySpan.textContent = 100 - this.value.length;

    if (mySpan.textContent < 0){
        mySpan.style.color = '#F00';
    } else {
        mySpan.style.color = '#008000';
    }};

// 2 Code If Short

// my.Span = document.getElementById('mySpan');
// document.getElementById('myText').onkeyup = function() {
// 'use strict';.

// mySpan.textConte.nt = 50 - this.value.length;
// mySpan.textC
hjygjh//..ontent < 0 .? m...main hgf
ySpan.style.color = '#F00' :  mySpan.style.color = '#000';
// };.
