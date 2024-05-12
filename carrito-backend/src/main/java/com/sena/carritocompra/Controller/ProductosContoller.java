package com.sena.carritocompra.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.carritocompra.Dto.ApiResponseDto;
import com.sena.carritocompra.Dto.IproductoDto;
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

	@GetMapping("/list")
	public ResponseEntity<ApiResponseDto<List<IproductoDto>>> show() {
	    try {
	        List<IproductoDto> entity = service.getLits();
	        return ResponseEntity.ok(new ApiResponseDto<List<IproductoDto>>("Registro encontrado", entity, true));
	    } catch (Exception e) {
	        return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IproductoDto>>(e.getMessage(), null, false));
	    }
	}
	
	@GetMapping("/listStok")
	public ResponseEntity<ApiResponseDto<List<IproductoDto>>> sEntity	() {
	    try {
	        List<IproductoDto> entity = service.getListStok();
	        return ResponseEntity.ok(new ApiResponseDto<List<IproductoDto>>("Registro encontrado", entity, true));
	    } catch (Exception e) {
	        return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IproductoDto>>(e.getMessage(), null, false));
	    }
	}}
