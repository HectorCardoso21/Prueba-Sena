
  

function save() {
  try {
    var personData = {
      nombre: $("#nombre").val(),
      description: $("#description").val(),
      cantidad: $("#cantidad").val(),
      precio: $("#precio").val(),
      porcentjeIva: $("#PorcentjeIva").val(),
      porcentajeDes: $("#PorcentajeDes").val(),      
      state: $("#estado").val() === "1" ? true : false,
    };
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/productos",
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
        url: "http://localhost:9000/Prueba/v1/api/productos",
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
                        <td>${item.nombre}</td>

                            <td>${item.description}</td>
                            <td>${item.cantidad}</td>
                            <td>${item.precio}</td>
                            <td>${item.porcentjeIva}</td>
                            <td>${item.porcentajeDes}</td>
                            <td>${item.state == true ? "Activo" : "Inactivo"}</td>

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



function deleteById(id) {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarlo",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        url: "http://localhost:9000/Prueba/v1/api/productos/" + id,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        success: function (response) {
          Swal.fire("¡Eliminado!", "El registro ha sido eliminado.", "success");
          loadData();
        },
        error: function (error) {
          console.error("Error en la solicitud:", error);
          Swal.fire("Error", "No se pudo eliminar el registro.", "error");
        },
      });
    }
  });
}








function update() {
  try {
    var personData = {
      nombre: $("#nombre").val(),
      description: $("#description").val(),
      cantidad: $("#cantidad").val(),
      precio: $("#precio").val(),
      porcentjeIva: $("#PorcentjeIva").val(),
      porcentajeDes: $("#PorcentajeDes").val(),      
      state: $("#state").val() === "1" ? true : false,
    };
    var id = $("#id").val();
    var jsonData = JSON.stringify(personData);
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/productos/" + id,
      data: jsonData,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      success: function (result) {
        Swal.fire(
          "¡Actualizado!",
          "El registro ha sido actualizado.",
          "success"
        ).then(() => {
          loadData();

          // Cambiar el botón a "Agregar"
          var btnAgregar = $('button[name="btnAgregar"]');
          btnAgregar.text("Agregar");
          btnAgregar.attr("onclick", "save()");
        });
      },
      error: function (error) {
        console.error("Error en la solicitud:", error);
        Swal.fire("Error", "No se pudo actualizar el registro.", "error").then(
          () => {
            loadData();

            // Cambiar el botón a "Agregar" en caso de error
            var btnAgregar = $('button[name="btnAgregar"]');
            btnAgregar.text("Agregar");
            btnAgregar.attr("onclick", "save()");
          }
        );
      },
    });
  } catch (error) {
    console.error("Error al actualizar el registro:", error);
    Swal.fire("Error", "Error al actualizar el registro.", "error").then(() => {
      loadData();

      // Cambiar el botón a "Agregar" en caso de error
      var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text("Agregar");
      btnAgregar.attr("onclick", "save()");
    });
  }
}

// Resto del código permanece igual

function findById(id) {
  if (!id) {
    console.error("ID no válido:", id);
    return;
  }

  $.ajax({
    url: "http://localhost:9000/Prueba/v1/api/productos/" + id,
    method: "GET",
    dataType: "json",
    success: function (response) {
      var data = response.data;
      $("#id").val(data.id);
      $("#nombre").val(data.nombre);
      $("#description").val(data.description);
      $("#cantidad").val(data.cantidad);
      $("#precio").val(data.precio);
      $("#PorcentajeDes").val(data.porcentajeDes);
      $("#PorcentjeIva").val(data.porcentjeIva);
      $("#state").val(data.estado);

      // Cambiar botón a "Actualizar"
      var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text("Actualizar");
      btnAgregar.attr("onclick", "update()");

      // Abrir el modal
      $("#crud-modal").modal("show");
    },
    error: function (error) {
      // Función que se ejecuta si hay un error en la solicitud
      console.error("Error en la solicitud:", error);
    },
  });
}
