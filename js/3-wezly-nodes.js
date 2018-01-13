'use strict';
var pierwszyDiv = document.getElementById("parFirst");
//var rodzicDiva = pierwszyDiv.parentElement
//console.log(rodzicDiva);
//var dzieciDiva = pierwszyDiv.childNodes;
//console.log(dzieciDiva);
//var childrenDiva = pierwszyDiv.children;
//console.log(childrenDiva)
//var dzieciDiva = pierwszyDiv.firstChild;
//console.log(dzieciDiva)
//var dzieciDiva = pierwszyDiv.lastChild;
//console.log(dzieciDiva)
//var rodzenstwoNastepne = pierwszyDiv.nextSibling;
//console.log(rodzenstwoNastepne);
//var rodzenstwoNastepne = pierwszyDiv.nextElementSibling;
//console.log(rodzenstwoNastepne);
//var rodzenstwoPoprzednie = pierwszyDiv.previousSibling;
//console.log(rodzenstwoPoprzednie);
//var rodzenstwoPoprzednie = pierwszyDiv.previousElementSibling;
//console.log(rodzenstwoPoprzednie);
//var dzieciElementu = pierwszyDiv.childNodes;
//dzieciElementu.forEach(function (element) {
//    console.log(element);
//})
//var dzieciElementu = pierwszyDiv.children;
//for (var i=0; i < dzieciElementu.length; i++) {
//    console.log(dzieciElementu[i]);
//}
var dzieciElementu = pierwszyDiv.childNodes;
dzieciElementu.forEach(function (element) {
    console.log("nodeType = " + element.nodeType);
})