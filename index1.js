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
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
document.getElementById('make').addEventListener("click",maketable);
