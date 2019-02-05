
function _(id){
  return document.getElementById(id);	
}
var droppedIn = false;
function drag_start(event) {
   _('app_status').innerHTML = "Dragging the "+event.target.getAttribute('id');
   event.dataTransfer.dropEffect = "move";
   event.dataTransfer.setData("text", event.target.getAttribute('id') );
   console.log(event.dataTransfer);
}
function drag_enter(event) {
   _('app_status').innerHTML = "You are dragging over the "+event.target.getAttribute('id');
}
function drag_leave(event) {
   _('app_status').innerHTML = "You left the "+event.target.getAttribute('id');
}
function drag_drop(event) {
   event.preventDefault(); /* Prevent undesirable default behavior while dropping */
   var elem_id = event.dataTransfer.getData("text");
   if(_(elem_id).className!== "objects")
   return;
   event.target.appendChild( _(elem_id) );
   _('app_status').innerHTML = "Dropped "+elem_id+" into the "+event.target.getAttribute('id')+" Zone";
   //_(elem_id).removeAttribute("draggable");
   //_(elem_id).style.cursor = "default";
   droppedIn = true;
}
function drag_end(event) {
   if(droppedIn == false){
       _('app_status').innerHTML = "You let the "+event.target.getAttribute('id')+" go.";
   }
 droppedIn = false;
}

function drag_drop_Bin(event){
    event.preventDefault(); 
    var elem_id = event.dataTransfer.getData("text");
    var ID = document.getElementById(elem_id);
    event.target.appendChild( ID);
    event.target.removeChild(ID);
}
function readDropZone(){
   for(var i=0; i < _("drop_zone").children.length; i++){
       alert(_("drop_zone").children[i].id+" is in the drop zone");
   }
   /* Run Ajax request to pass any data to your server */
}



$(document).ready(function(){
$(".objects").click(function(){
    alert("Tibia");
});

});
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element.";
});

document.addEventListener("dragend", function(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
});

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
});

const Objects = document.querySelectorAll('.objects');

Objects.forEach(checkbox => checkbox.addEventListener('ondragstart', drag_start));
Objects.forEach(checkbox => checkbox.addEventListener('ondragend', drag_end));
var objectNR = 1;
function CreateObject(){
    var div = document.createElement('div');
           
    div.className = 'objects';       
    div.draggable = true;
    div.id = "object"+ objectNR;
    div.innerHTML = document.getElementById("objectText").value;
    document.getElementById("objectText").value = "";
    objectNR++;
    
    //document.getElementsByTagName('body')[0].appendChild(div);
    // document.createElement(div);
    document.body.appendChild(div);

}