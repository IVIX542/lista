var opcion = document.getElementById("lista").value;
function buscar(){
    opcion = document.getElementById("lista").value;

    switch(opcion){
        case "juan":
            document.getElementById("18").checked = false;
            document.getElementById("m").checked = true;
            document.getElementById("madrid").checked = true;
            break;
        case "sofia":
            document.getElementById("f").checked = true;
            document.getElementById("18").checked = true;
            document.getElementById("madrid").checked = false;
            break;
        case "mario":
            document.getElementById("m").checked = true;
            document.getElementById("18").checked = true;
            document.getElementById("madrid").checked = true;
            break;
        case "maria":
            document.getElementById("18").checked = false;
            document.getElementById("f").checked = true;
            document.getElementById("madrid").checked = true;
            break;
        
    }
}

