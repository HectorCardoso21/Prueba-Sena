function loadTypedocuments() {
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/cliente/typedocuments",
      method: "GET",
      dataType: "json",
      success: function (response) {
        var html = "";
        if (response.status && Array.isArray(response.data)) {
          response.data.forEach(function (item) {
            html += `<option value="${item.id}">${item.name}</option>`;
          });
          $("#typeDocument_id").html(html); // Corregir el ID del select
        } else {
          console.error("Error: No se pudo obtener la lista de tipos de documentos.");
        }
      },
      error: function (error) {
        console.error("Error en la solicitud:", error.statusText); // Muestra el mensaje de error de la solicitud
      },
    });
  }
  

function save() {
  try {
    var personData = {
      nombre: $("#nombre").val(),
      apellido: $("#apellido").val(),
      address: $("#address").val(),
      document: $("#document").val(),
      ubication: $("#ubication").val(),
      telefono: $("#telefono").val(),
      typeDocument: $("#typeDocument").val(),
      

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
                            <td>${item.document}</td>
                            <td>${item.ubication}</td>
                            <td>${item.telefono}</td>
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
          url: "http://localhost:9000/Prueba/v1/api/cliente/" + id,
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
          apellido: $("#apellido").val(),
          address: $("#address").val(),
          document: $("#Document").val(),
          ubication: $("#ubication").val(),
          telefono: $("#telefono").val(),
          typeDocument: $("#typeDocument").val(),
          
    
          state: $("#state").val() === "1" ? true : false,
        };
      var id = $("#id").val();
      var jsonData = JSON.stringify(personData);
      $.ajax({
        url: "http://localhost:9000/Prueba/v1/api/cliente/" + id,
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
      url: "http://localhost:9000/Prueba/v1/api/cliente/" + id,
      method: "GET",
      dataType: "json",
      success: function (response) {
        var data = response.data;
        $("#id").val(data.id);
        $("#nombre").val(data.nombre);
        $("#apellido").val(data.apellido);
        $("#address").val(data.address);
        $("#Document").val(data.document);
        $("#ubication").val(data.ubication);
        $("#telefono").val(data.telefono);
        $("#typeDocument").val(data.typeDocument);
        $("#state").val(data.state);
  
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


  $(document).ready(function() {
    $('#filterName').keyup(function() {
        var filterValue = $(this).val().toLowerCase().trim();
        
        $.ajax({
            url: 'http://localhost:9000/Prueba/v1/api/cliente/listFiltros',
            type: 'GET',
            dataType: 'json',
            data: { nombreCliente: filterValue },
            success: function(data) {
                var resultData = $('#resultData');
                resultData.empty(); // Limpiar tabla antes de agregar nuevos datos
                
                $.each(data, function(data , index) {
                  resultData.append('<tr><td>' + data.nombre + '</td><td>' + data.apellido + '</td><td>');
              });
              
            },
            error: function(xhr, status, error) {
                console.error('Error al obtener datos: ' + error);
            }
        });
    });
});
