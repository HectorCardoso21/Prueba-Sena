package com.sena.carritocompra.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.carritocompra.Entity.Ventas;
import com.sena.carritocompra.IService.IVentasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/Ventas")
public class VentasContoller  extends ABaseController<Ventas, IVentasService> {

	protected VentasContoller(IVentasService service) {
		super(service, "Ventas");
		// TODO Auto-generated constructor stub
	}

}
