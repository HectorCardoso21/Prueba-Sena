function loadDataf() {
    console.log("ejecutando loadData facutsd");
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/cliente/list",
      method: "GET",
      dataType: "json",
      success: function (response) {
        console.log(response);
        var cantidad;
        if (Array.isArray(response.data) && response.data.length > 0) {
          cantidad = response.data[0].cantidad;
        } else {
          cantidad = 0;
        }

        // Mostrar la cantidad de registros en el span
        $("#cantidadRegistros").text(cantidad);
      },
      error: function (error) {
        console.error("Error en la solicitud:", error);
      },
    });
  }
  


  function loadDataV() {
    console.log("ejecutando loadData facutsd");
    $.ajax({
      url: "http://localhost:9000/Prueba/v1/api/Ventas/list",
      method: "GET",
      dataType: "json",
      success: function (response) {
        console.log(response);
        var cantidad;
        if (Array.isArray(response.data) && response.data.length > 0) {
          cantidad = response.data[0].cantidad;
        } else {
          cantidad = 0;
        }

        // Mostrar la cantidad de registros en el span
        $("#cantidadVentas").text(cantidad);
      },
      error: function (error) {
        console.error("Error en la solicitud:", error);
      },
    });
  }
  

  function loadDatap() {
    console.log("ejecutando loadData facutsd");
    $.ajax({
      url: "  http://localhost:9000/Prueba/v1/api/productos/list",
      method: "GET",
      dataType: "json",
      success: function (response) {
        console.log(response);
        var cantidad;
        if (Array.isArray(response.data) && response.data.length > 0) {
          cantidad = response.data[0].cantidad;
        } else {
          cantidad = 0;
        }

        // Mostrar la cantidad de registros en el span
        $("#cantidadProductos").text(cantidad);
      },
      error: function (error) {
        console.error("Error en la solicitud:", error);
      },
    });
  }
  



  function loadData() {
    console.log("ejecutando loadData");
    $.ajax({
        url: "http://localhost:9000/Prueba/v1/api/productos/listStok",
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
                        <td>${item.id}</td>

                        <td>${item.nombre}</td>

                            <td>${item.cantidad}</td>

                            <td>
                                
                                
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