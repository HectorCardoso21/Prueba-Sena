package com.sena.carritocompra.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.carritocompra.Entity.Cliente;
import com.sena.carritocompra.IService.IClienteService;
import com.sena.carritocompra.Utils.Dirrecion;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/cliente")
public class ClienteController extends ABaseController<Cliente, IClienteService> {

	protected ClienteController(IClienteService service) {
		super(service, "Cliente");
		// TODO Auto-generated constructor stub
	}

	
	   @GetMapping("/typedocuments")
	    public Dirrecion[] getTypeDocuments() {
	        return service.getTypeDocuments();
	    }
	}


