function loadClientes() {
  $.ajax({
    url: "http://localhost:9000/Prueba/v1/api/cliente",
    method: "GET",
    dataType: "json",
    success: function (response) {
      var html = "";
      if (response.status && Array.isArray(response.data)) {
        response.data.forEach(function (item) {
          html += `<option value="${item.id}">${item.nombre}</option>`;
        });
        $("#cliente_id").html(html); // Corregir el ID del select
      } else {
        console.error("Error: No se pudo obtenef.");
      }
    },
    error: function (error) {
      console.error("Error en la solicitud:", error);
    },
  });
}

  function save() {
    try{
    var personData = {
      total: $("#total").val(),
      fecha_venta: $("#fecha_venta").val() || new Date().toISOString().slice(0, 10), // Asignar la fecha actual si fecha_venta está vacía
      cliente: {
        id: parseInt($("#cliente_id").val()),
      },
      state: $("#estado").val() === "1" ? true : false,
    };
  
      // Resto del código sigue igual...
  
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/Ventas",
      method: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(personData),
      success: function (data) {
        var id = data.id;
        console.log(data.data);
        alert("Registro agregado con éxito" + id);
        loadData();
        clearData();
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

function clearData() {
  $("#id").val("");
  $("#total").val("");
  $("#fecha_venta").val("");
  $("#cliente").val("");
}

function loadData() {
  console.log("ejecutando loadData");
  $.ajax({
    url: "http://localhost:9000/Prueba/v1/api/Ventas",
    method: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response.data);
      var html = "";
      var data = response.data;

      // Filtrar los datos

      // Si no hay datos filtrados, mostrar un mensaje
      if (data.length === 0) {
        html =
          '<tr><td colspan="9" class="text-center">No se encontraron registros</td></tr>';
      } else {
        data.forEach(function (item) {
          // Construir el HTML para cada objeto
          if (!item.deletedAt) {
            html += `<tr>
                            <td>${item.id}</td>
                            <td>${item.cliente.nombre}</td>
                            <td>${item.total}</td>
                            <td>${item.fecha_venta}</td>
                            <td>${
                              item.state == true ? "Activo" : "Inactivo"
                            }</td>

                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="findById(${
                                  item.id
                                })">
                                    <img src="../asset/icon/pencil-square.svg">
                                </button>
                                <button type="button" class="btn btn-secondary" onclick="deleteById(${
                                  item.id
                                })">
                                    <img src="../asset/icon/trash3.svg">
                                </button>
                                <button type="button" class="btn btn-secondary" onclick="generarFactura(${
                                  item.id
                                })">
                                <img src="../asset/icon/3844432-magnifier-search-zoom_110300.svg">
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

function mostrarTabla() {
  document.getElementById("tabla").classList.remove("hidden");
  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("Factura").classList.add("hidden");
  document.getElementById("Formrs").classList.add("hidden");

}

function mostrarFormulario() {
  document.getElementById("tabla").classList.add("hidden");
  document.getElementById("formulario").classList.remove("hidden");
  document.getElementById("Factura").classList.add("hidden");
  document.getElementById("Formrs").classList.add("hidden");

}

function mostrarFactura() {
  // Show the Factura section and hide others
  document.getElementById("Factura").classList.remove("hidden");
  document.getElementById("tabla").classList.add("hidden");
  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("Formrs").classList.add("hidden");

}

function mostasrFormFacuta() {
  // Show the Factura section and hide others
  document.getElementById("Factura").classList.add("hidden");
  document.getElementById("tabla").classList.add("hidden");
  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("Formrs").classList.remove("hidden");

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
        url: "http://localhost:9000/Prueba/v1/api/Ventas/" + id,
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
      total: $("#total").val(),
      fecha_venta: $("#fecha_venta").val(),
      cliente: {
        id: parseInt($("#cliente_id").val()), // Corregir el ID del select
      },

      state: $("#state").val() === "1" ? true : false,
    };

    var id = $("#id").val();
    var jsonData = JSON.stringify(personData);
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/Ventas/" + id,
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
    url: "http://localhost:9000/Prueba/v1/api/Ventas/" + id,
    method: "GET",
    dataType: "json",
    success: function (response) {
      var data = response.data;
      $("#id").val(data.id);
      $("#total").val(data.total);
      $("#fecha_venta").val(data.fecha_venta);
      $("#cliente_id").val(data.cliente.id);
      $("#state").val(data.state);

      // Cambiar botón a "Actualizar"
      var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text("Actualizar");
      btnAgregar.attr("onclick", "update()");

      // Abrir el modal
    },
    error: function (error) {
      // Función que se ejecuta si hay un error en la solicitud
      console.error("Error en la solicitud:", error);
    },
  });
}

function generarFactura() {
  // Recuperar datos para la factura
  var subtotal = document.getElementById('subtotal').value;
  var descuento = document.getElementById('descuento').value;
  var iva = document.getElementById('iva').value;
  var efectivoRecibido = document.getElementById('efectivoRecibido').value;
  var cambio = document.getElementById('cambio').value;

  // Crear el contenido de la factura
  var facturaHTML = `
    <div class="factura">
      <div class="item">Subtotal general: ${subtotal}</div>
      <div class="item">Descuento: ${descuento}</div>
      <div class="item">Valor de IVA total: ${iva}</div>
      <div class="item">Efectivo recibido: ${efectivoRecibido}</div>
      <div class="item">Cambio: ${cambio}</div>
    </div>
  `;

  // Mostrar la factura en el contenedor
  var facturaContainer = document.getElementById('facturaContainer');
  facturaContainer.innerHTML = facturaHTML;
  facturaContainer.style.display = 'block';
}