//Main logo and Theme changer.

var icon = document.getElementById('color-changer');
var main = document.getElementById('logo');
icon.onclick = function (){
    document.body.classList.toggle('change-theme');
    if(document.body.classList.contains('change-theme')){
        main.src = "Images/icon-dark.png"
    }else{
        main.src = "Images/icon.png"
    }
}

//Music Player

var mysong = document.getElementById("my-song");
var icon = document.getElementById("music-icon");

icon.onclick =function (){
    if(mysong.paused){
        mysong.play();
    }else{
        mysong.pause();
    }
}

//Project Refactor

const position = document.documentElement;
position.addEventListener("mousemove", e =>{
    position.style.setProperty("--x",e.clientX+'px');
})

//Parallax Effect

var text = document.getElementById('text');
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(text);
var parallaxInstance = new Parallax(scene);

//smtp server for message
function sendingEmail(){
            Email.send({
                SecureToken:"e5697484-5f59-4f8f-b11a-1fa65b317be5",
                To : 'adigpt02@gmail.com',
                From : document.getElementById("email").value,
                Subject : "This is the subject",
                Body : "Name: "+document.getElementById("name-mail").value
                        + "<br> Email: " +document.getElementById("email").value
                        + "<br> Message: " +document.getElementById("message-mail").value
            }).then(
                message => alert("Message Send Successfully")
            );
        }
