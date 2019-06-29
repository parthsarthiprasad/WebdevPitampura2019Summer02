document.getElementById("btn").onclick = function(){enter(document.getElementById("text").value)}
document.getElementById("delete").onclick = function(){remove()}


let counter = 0;

function enter(val){
    var task = val;
    let item = document.createElement('li');
    counter++
    item.innerHTML = val;
    item.setAttribute('onclick', 'strike('+counter+')')
    item.setAttribute('id', counter)
    item.style.textDecoration = "none"
    list.appendChild(item)
    document.getElementById("text").value = " "
    document.getElementById("delete").style.visibility = "visible"
}

for(var i = 0;i<=counter;i++){
    function strike(i){
        var s = document.getElementById(i).style.textDecoration;
        if(s == "none")
        {
            document.getElementById(i).style.textDecoration = "line-through"
        }
        else {document.getElementById(i).style.textDecoration = "none"}
    }
}

function remove(){
    console.log("clicked")
    for(var i = 1; i<=counter;i++){
        if(document.getElementById(i) == "null"){}
        else{
            var s = document.getElementById(i).style.textDecoration;
            if(s == "line-through")
            {
                document.getElementById("list").removeChild(list.childNodes[i]);
            }   
        }
    }
}


