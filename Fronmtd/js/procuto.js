
  

function save() {
  try {
    var personData = {
      nombre: $("#nombre").val(),
      description: $("#description").val(),
      cantidad: $("#cantidad").val(),
      precio: $("#precio").val(),
      PorcentjeIva: $("#PorcentjeIva").val(),
      PorcentajeDes: $("#PorcentajeDes").val(),      
      state: $("#state").val() === "1" ? true : false,
    };
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/cliente",
      method: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(personData),
      success: function (data) {
        var id = data.id;
        console.log(data.data);
        alert("Registro agregado con éxito" + id);
        loadData();
      },
      error: function (error) {
        alert(
          "Error al guardar los datos. Por favor, inténtalo de nuevo más tarde."
        );
        console.error("Error en la solicitud:", error);
      },
    });
  } catch (error) {
    console.error("Error obteniendo el cliente:", error);
  }
}
function loadData() {
    console.log("ejecutando loadData");
    $.ajax({
        url: "http://localhost:9000/Prueba/v1/api/cliente",
        method: "GET",
        dataType: "json",
        success: function (response) {
            console.log(response.data);
            var html = "";
            var data = response.data;

            // Filtrar los datos

            // Si no hay datos filtrados, mostrar un mensaje
            if (data.length === 0) {
                html = '<tr><td colspan="9" class="text-center">No se encontraron registros</td></tr>';
            } else {
                data.forEach(function (item) {
                    // Construir el HTML para cada objeto
                    if (!item.deletedAt) {
                        html += `<tr>
                            <td>${item.state == true ? "Activo" : "Inactivo"}</td>
                            <td>${item.nombre}</td>
                            <td>${item.apellido}</td>
                            <td>${item.address}</td>
                            <td>${item.Document}</td>
                            <td>${item.ubication}</td>
                            <td>${item.Telefono}</td>
                            <td>${item.typeDocument}</td>
                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="findById(${item.id})">
                                    <img src="../asset/icon/pencil-square.svg">
                                </button>
                                <button type="button" class="btn btn-secondary" onclick="deleteById(${item.id})">
                                    <img src="../asset/icon/trash3.svg">
                                </button>
                            </td>
                        </tr>`;
                    }
                });
            }

            $("#resultData").html(html);
        },
        error: function (error) {
            console.error("Error en la solicitud:", error);
        },
    });
}
