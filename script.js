function showItem(id){
    reset();
    document.getElementById(id).hidden = false;
    if(document.getElementById("projects").hidden) {
        document.getElementById("return").hidden = true;
    }
    else {
        var arr = [...document.getElementsByClassName("profile")];
        if (arr.some(e => e.hidden === false)) {
            document.getElementById("return").hidden = false;
        }
    }
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
    document.getElementById("return").hidden = !boolean;
}

function goBack(){
    [...document.getElementsByClassName("profile")].forEach(element => element.hidden = true);
    hideProjects(false);
}

const contactform = document.getElementById('contactform').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.init(config);
    emailjs.sendForm('contact', 'contact', this)
        .then(function () {
            console.log('message sent!');
        }, function (error) {
            console.log('error: ', error);
        });
});

