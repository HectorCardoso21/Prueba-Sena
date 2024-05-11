
  
// Llamar a la función loadData() al cargar la página
$(document).ready(function () {
    loadData();
});














function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');
}


function openModal() {
    document.getElementById('crud-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('crud-modal').classList.add('hidden');
}








