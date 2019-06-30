


var counter=-1;
document.getElementById("btn").onclick= function(){
  edata()
};

document.getElementById("rbtn").onclick=function(){
  selectswitch()
};


function edata(){
  let task=document.getElementById("taskinput").value;
  let list=document.getElementById("list");
  list.innerHTML+=` <li>${task}</li> `;
  counter++;
  list.children[counter].setAttribute('onclick' ,'striked(counter)')
  list.children[counter].style.textDecoration ="none"
  document.getElementById("taskinput").value=""
  document.getElementById("rbtn").style.visibility ="visible"
  console.log(counter);
}

function striked(counter){
for(var i = 0;i<=counter;i++){
        var s = document.getElementById("list").children[i].style.textDecoration;
        if(s == "none")
        {
            document.getElementById("list").children[i].style.textDecoration = "line-through"
            document.getElementById("list").children[i].setAttribute("class", "striked")
        }
        else {
            document.getElementById(i).style.textDecoration = "none"
            document.getElementById(i).removeAttribute("class","striked")}
          }
}
/*
function rdata(){
  let list=document.getElementById("list");
  //list.remove(list.children[0].children[counter]);
  //console.log(list.children[counter]);
  list.children[counter].remove();
  counter--;

}
*/

function selectswitch(){
var striked= document.getElementsByClassName('striked');
console.log(striked);
for(var i=0; i<striked.length; i++){
        striked[i].parentNode.removeChild(striked[i])
        i=-1;
    }
  }
