var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var sp = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  sp.className = "close";
  sp.appendChild(txt);
  myNodelist[i].appendChild(sp);
}

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var taskNameValue = document.getElementById("taskNameInput").value;
  var taskDescValue = document.getElementById("taskDescInput").value;
  
  var taskNameText = document.createTextNode(taskNameValue);
  var taskDescText = document.createTextNode("Description: " + taskDescValue);
  
  var taskContent = document.createElement('strong');
  taskContent.appendChild(taskNameText);
  li.appendChild(taskContent);
  li.appendChild(document.createElement('br'));
  li.appendChild(taskDescText);
  
  if (taskNameValue === '' || taskDescValue === '') {
    alert("Both task name and description are required");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  
  document.getElementById("taskNameInput").value = "";
  document.getElementById("taskDescInput").value = "";

  var sp = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  sp.className = "close";
  sp.appendChild(txt);
  li.appendChild(sp);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
