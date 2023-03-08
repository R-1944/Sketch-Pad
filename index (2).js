function maketable(){
    var table = document.getElementById('tab');
    var row = document.getElementById('rows').value;
    var col =document.getElementById('cols').value;
    console.log(row+ " " +col);
    for(var i=0;i<row;i++){
        var tr=document.createElement('tr');
        for(var j=0;j<col;j++){
            var td=document.createElement('td');
            var text=document.createTextNode(" ");
            document.getElementById('rows').value = "";
            document.getElementById('cols').value = "";
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
    }
}
document.getElementById('make').addEventListener("click",maketable);

/*------------------------------colorPicker--------------------*/ 

let selectedColor = document.getElementById('ColorPicker').value
console.log("THIS IS THE COLOR ",selectedColor )

/*--------------------change color-------------------*/ 

function color_change(){
    var color=document.getElementById('colorPicker').value;
    
}

$("tr").mouseover(function(){
    $("tr").css("background-color", "yellow");
    cobl();
  });


function cobl()
{
 
    $("tr").css("background-color");
}


/*
function color_select(){
  var color = document.getElementById("#colorPicker");  
  

}
document.getElementById("colorPicker").style.backgroundColor = color_select();*/
