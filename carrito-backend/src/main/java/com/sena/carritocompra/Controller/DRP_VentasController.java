package com.sena.carritocompra.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.carritocompra.Entity.DPR_VENRTAS;
import com.sena.carritocompra.IService.DPR_VentasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/drp_ventas")
public class DRP_VentasController extends ABaseController< DPR_VENRTAS, DPR_VentasService>{

	protected DRP_VentasController(DPR_VentasService service) {
		super(service, "DPR_VENRTAS");
		// TODO Auto-generated constructor stub
	}

}
