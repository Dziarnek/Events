var list = document.getElementById("list"),
    addElem = document.getElementById("addElem"),
    i = 0;

addElem.addEventListener('click', function() {
    i += + 1;
    var element = document.createElement('li');
    element.innerHTML = ('Element ' + i + " liczone innym sposobem " + document.getElementsByTagName('li').length);
    list.appendChild(element);
});