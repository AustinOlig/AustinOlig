// Initial content set
window.onload = function(){
    document.getElementById('main-content').style.display = "initial";
}

// Changes tabs (TO BE OPTIMIZED)
function openTab(evt, tabContentName) {
    var i, tabContents, tabs, hero;
    tabContents = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabContents.length; i++) {
        tabs[i].className = tabs[i].className.replace(" is-active", "");
    }

    evt.currentTarget.className += " is-active";
    document.getElementById(tabContentName).style.display = "initial";

    hero = document.getElementById('hero');
    if (hero.className.includes('is-info')) {
        hero.className = hero.className.replace("is-info", "is-primary");
    } else if (hero.className.includes('is-primary')) {
        hero.className = hero.className.replace("is-primary", "is-success");
    } else if (hero.className.includes('is-success')) {
        hero.className = hero.className.replace("is-success", "is-warning");
    } else if (hero.className.includes('is-warning')) {
        hero.className = hero.className.replace("is-warning", "is-info");
    } 
}

// Set navbar-burger to active when clicked
$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});