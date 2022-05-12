
function Theme(){
    var type = document.getElementById("themetype");
    var checkbox = document.getElementById("theme");
    if(checkbox.checked == true)
    {
        document.cookie = "theme=dark";
        document.cookie = "max-age="+(60 * 60 * 24 * 30);
        document.cookie = "path=/";
        document.cookie = "SameSite=Lax";
        document.body.classList.toggle("bg-dark");
        type.innerHTML = "Dark";
    }
    if(checkbox.checked == false)
    {
        document.cookie = "theme=light";
        document.cookie = "max-age="+(60 * 60 * 24 * 30);
        document.cookie = "path=/";
        document.cookie = "SameSite=Lax";
        document.body.classList.toggle("bg-dark");
        type.innerHTML = "Light";
        
    }
}
window.onload = function(){
    var name = "theme=";
    var mode = "";
    var decoded_cookie = decodeURIComponent(document.cookie);
    var carr = decoded_cookie.split(';');
    for(var i=0; i<carr.length;i++){
    var c = carr[i];
    while(c.charAt(0)==' '){
        c=c.substring(1);
    }
    if(c.indexOf(name) == 0) {
        mode = c.substring(name.length, c.length);
    }
    }
    var type = document.getElementById("themetype");
    var checkbox = document.getElementById("theme");
    if(mode == "light")
    {
        checkbox.checked = false;
    }
    if(mode == "dark")
    {
        checkbox.checked = true;
    }
    if(checkbox.checked == true)
    {
        document.body.classList.toggle("bg-dark");
        type.innerHTML = "Dark";
    }
    if(checkbox.checked == false)
    {
        type.innerHTML = "Light";
        
    }
}