
const menumovil = document.getElementById("menu_movil");
const nav = document.getElementById("navmovil");

menumovil.addEventListener("mousedown", (e)=>{

    if(nav.style.display === "flex"){
        nav.style.display = "none";
    }else {
        nav.style.display = "flex";
    }

});

const cuenta = document.getElementById("cuenta");
const submenu = document.getElementById("submenu");

    
cuenta.addEventListener("mousedown", (e)=>{
    if(submenu.style.display === "flex"){
        submenu.style.display = "none";
    }else {
        submenu.style.display = "flex";
    }
});
