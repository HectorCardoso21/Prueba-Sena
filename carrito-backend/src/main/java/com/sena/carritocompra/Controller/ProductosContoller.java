package com.sena.carritocompra.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.carritocompra.Entity.Productos;
import com.sena.carritocompra.IService.IproductoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/productos")
public class ProductosContoller  extends ABaseController<Productos, IproductoService>{

	protected ProductosContoller(IproductoService service) {
		super(service, "Productos");
		// TODO Auto-generated constructor stub
	}

}
