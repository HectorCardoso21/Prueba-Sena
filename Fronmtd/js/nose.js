function openTab(tabName) {
    // Oculta todos los contenidos de las pestañas
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Desactiva todas las pestañas
    var tabBtns = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(tabName).style.display = "block";

    // Activa la pestaña seleccionada
    event.currentTarget.classList.add("active");
}
