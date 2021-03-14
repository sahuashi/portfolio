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

function showProjectProfile(id){
    hideProjects(true);
    document.getElementById(id).hidden=false;
}

function hideProjects(boolean) {
    [...document.getElementsByClassName("project")].forEach(element => element.hidden = boolean);
}

function goBack(){
    [...document.getElementsByClassName("profile")].forEach(element => element.hidden = true);
    hideProjects(false);
}