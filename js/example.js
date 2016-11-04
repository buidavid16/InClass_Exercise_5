window.onload = function() {


// ADD NEW ITEM TO END OF LIST
var itemList = document.getElementsByTagName("ul")[0];
var endItem = document.createElement("li");
var endItemText = document.createTextNode("cream");

endItem.appendChild(endItemText);
itemList.appendChild(endItem);


// ADD NEW ITEM START OF LIST
var startItem = document.createElement("li");
var startItemText = document.createTextNode("kale");

startItem.appendChild(startItemText);
itemList.insertBefore(startItem, document.getElementsByTagName("li")[0]);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(var i = 0; i < itemList.children.length; i++) {
  document.getElementsByTagName("li")[i].className = "cool";
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var itemCount = document.createElement("SPAN");
var textCount = document.createTextNode(String(itemList.children.length));

itemCount.appendChild(textCount);
document.getElementsByTagName("h2")[0].appendChild(itemCount);

}
