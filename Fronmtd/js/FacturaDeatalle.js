function loasVentas() {
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/Ventas",
      method: "GET",
      dataType: "json",
      success: function (response) {
        var html = "";
        if (response.status && Array.isArray(response.data)) {
          response.data.forEach(function (item) {
            html += `<option value="${item.id}">${item.fecha_venta}</option>`;
          });
          $("#ventas_id").html(html); // Corregir el ID del select
        } else {
          console.error("Error: No se pudo obtenef.");
        }
      },
      error: function (error) {
        console.error("Error en la solicitud:", error);
      },
    });
  }




  function loadproductos() {
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/productos",
      method: "GET",
      dataType: "json",
      success: function (response) {
        var html = "";
        if (response.status && Array.isArray(response.data)) {
          response.data.forEach(function (item) {
            html += `<option value="${item.id}">${item.nombre}</option>`;
          });
          $("#Productos").html(html); // Corregir el ID del select
        } else {
          console.error("Error: No se pudo obtenef.");
        }
      },
      error: function (error) {
        console.error("Error en la solicitud:", error);
      },
    });
  }




  
function saves() {
    try {
      var personData = {
        Cantidad: $("#Cantidad").val(),
        precio: $("#precio").val(),
        descueto: $("#descueto").val(),
        sub_total: $("#sub_total").val(),
        fecha_venta: $("#fecha_venta").val(),
        ventas: {
          id: parseInt($("#ventas_id").val()), // Corregir el ID del select
        },
        productos: {
            id: parseInt($("#Productos").val()), // Corregir el ID del select
          },
  
        state: $("#estado").val() === "1" ? true : false,
      };
      $.ajax({
        url: "http://localhost:9000/Prueba/v1/api/drp_ventas",
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
    }}

    function clearData() {
      $("#id").val("");
      $("#Cantidad").val("");
      $("#precio").val("");
      $("#sub_total").val("");
      $("#fecha_venta").val("");
      $("#ventas_id").val("");
      $("#estado").val("");

      


    }
    


    
function loadDataf() {
    console.log("ejecutando loadData facutsd");
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/drp_ventas",
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
                              <td>${item.ventas.fecha_venta}</td>
                              <td>${item.productos.nombre}</td>
                              <td>${item.cantidad}</td>
                              <td>${item.descueto}</td>
                              <td>${item.precio}</td>
                              <td>${item.sub_total}</td>



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
                                  <button type="button" class="btn btn-secondary" onclick="deleteById(${
                                    item.id
                                  })">
                                  <img src="../asset/icon/3844432-magnifier-search-zoom_110300.svg">
                              </button>
                                </td>
  
                              
                          </tr>`;
            }
          });
        }
  
        $("#resultDataF").html(html);
      },
      error: function (error) {
        console.error("Error en la solicitud:", error);
      },
    });
  }