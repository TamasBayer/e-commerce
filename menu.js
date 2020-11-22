var menuItems = document.getElementById("menu-items");
var menuIcon = document.getElementById("menu-icon");

/* ===== SCREEN SET START ===== */

if(window.innerWidth < 1320) {
    menuItems.style.maxHeight = "0px";
    menuItems.style.paddingBottom = "0px";
}

/* ===== SCREEN SET IF CHANGE ===== */

window.addEventListener('resize', function(event){
    if(window.innerWidth < 1320) {
        menuItems.style.maxHeight = "0px";
        menuItems.style.paddingBottom = "0px";
    } else if(window.innerWidth > 1320){
        menuItems.style.maxHeight = "100px";
    }
  });

/* ===== MENU ICON ===== */

menuIcon.onclick = function() {
    if(menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px"
        menuItems.style.paddingBottom = "50px";
    }
    else {
        menuItems.style.maxHeight = "0px"
        menuItems.style.paddingBottom = "0px";
    }
}