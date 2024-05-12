package com.sena.carritocompra.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.carritocompra.Dto.ApiResponseDto;
import com.sena.carritocompra.Dto.IClienteDto;
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
@GetMapping("/list")
public ResponseEntity<ApiResponseDto<List<IClienteDto>>> show() {
    try {
        List<IClienteDto> entity = service.getLits();
        return ResponseEntity.ok(new ApiResponseDto<List<IClienteDto>>("Registro encontrado", entity, true));
    } catch (Exception e) {
        return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IClienteDto>>(e.getMessage(), null, false));
    }
}
    @GetMapping("/listFiltros")
    public ResponseEntity<ApiResponseDto<List<IClienteDto>>> entity() {
        try {
            List<IClienteDto> entity = service.getFiltrosClienteDtos();
            return ResponseEntity.ok(new ApiResponseDto<List<IClienteDto>>("Registro encontrado", entity, true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IClienteDto>>(e.getMessage(), null, false));
        }

    }}



