
var list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {  
	createXElement(i);
}

var close = document.getElementsByClassName("close");

deleteElement();
checkClass();

function checkClass(){
	for(i = 0; i < list.length; i++){
		list[i].onclick = function() {
			if (this.classList.contains("checked")){
				this.classList.remove("checked");
			}
			else{
			this.classList.add("checked")
			}
			isItDone();
		}
	}

}

function deleteElement(){
	for (i = 0; i < close.length; i++) {
  		close[i].onclick = function() {
    		var div = this.parentElement;
    		div.style.display = "none";
  		}
	}
}

function createXElement(i){

	  var span = document.createElement("span");
	  var text = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(text);
	  list[i].appendChild(span);
}

function addNewElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("newActivity").value;
  var textValue = document.createTextNode(inputValue);
  li.appendChild(textValue);
  if (inputValue === '') {
    alert("Pole tekstowe nie może pozostać puste!");
  } else {
    document.getElementById("acitivitiesList").appendChild(li);
  }
  document.getElementById("newActivity").value = "";

  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  doneInfo.style.display="none";
  li.appendChild(span);

  deleteElement();
  checkClass();
}

function isItDone(){
	var list = document.getElementsByTagName("li");
	let checked=0;

	for(i=0; i<list.length; i++){
		if(list[i].classList.contains("checked")){
			checked=checked+1;
		}
		if(checked==list.length){
			var doneInfo = document.getElementById("doneInfo")
			doneInfo.style.display="block";
			doneInfo.style.animationName="backgroundFadeIn";
			for(i=0; i<list.length; i++)
			//	list[i].style.animationName="fade";
				list[i].style.display="none";
			var close = document.getElementsByClassName("close");
			for(i=0; i<close.length; i++)
				close[i].style.display="none";			
		}
	}	
}
