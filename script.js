

function generateNumberTable(){
    var number = prompt("Introdueix un numero de l'1 al 10 ");
    var element = document.getElementById("tableData");
    element.innerHTML = '';

    if(!isNaN(number)){
        for(i = 0; i < 10; i++){

            var tag = document.createElement("p");
            var text =  document.createTextNode(number + " x " + (i+1) + " = " + number * (i+1)); 
            tag.appendChild(text); 
            element.appendChild(tag);
        }    
    }else{
        alert("Només pots introduir numeros");
    }
}

function generateTable(){
    var r_number = prompt("Indica la quantiat de files per la taula");
    var c_number = prompt("Indica la quanitat de columnes per la taula");

    if(!isNaN(r_number) && !isNaN(c_number) && r_number != null && c_number != null){

        var element = document.getElementById('tableNums');
        for(i = 0; i < r_number; i++){
            let row = document.createElement('tr');
            for(u = 0; u < c_number; u++){
               let column = document.createElement("td");
               column.innerHTML = (Math.floor(Math.random()*100));
               row.appendChild(column);
            }
            element.appendChild(row);
        }

        
        
    }else{
        alert("Els valors introduits només poden contindre numeros");
    }

}








  


