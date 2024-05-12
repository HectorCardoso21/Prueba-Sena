package com.sena.carritocompra.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.carritocompra.Dto.ApiResponseDto;
import com.sena.carritocompra.Dto.IventasDto;
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

	@GetMapping("/list")
	public ResponseEntity<ApiResponseDto<List<IventasDto>>> show() {
	    try {
	        List<IventasDto> entity = service.getLits();
	        return ResponseEntity.ok(new ApiResponseDto<List<IventasDto>>("Registro encontrado", entity, true));
	    } catch (Exception e) {
	        return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IventasDto>>(e.getMessage(), null, false));
	    }

	}}
