function showItem(id){
    reset();
    document.getElementById(id).hidden = false;
}

function reset(){
    document.getElementById("hello").hidden = true;
    document.getElementById("about").hidden = true;
    document.getElementById("projects").hidden = true;
    document.getElementById("contact").hidden = true;
}