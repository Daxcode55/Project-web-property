let navbar = document.querySelector('.flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
}


// window scroll onclick
let Right = () => {
    const element = document.getElementById("wraper-card-kategori");
    element.scrollLeft += 100;
}

let Left = () => {
    const element = document.getElementById("wraper-card-kategori");
    element.scrollLeft -= 100;
}


// Tablinks Function
function openTablinks(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultopen").click();

