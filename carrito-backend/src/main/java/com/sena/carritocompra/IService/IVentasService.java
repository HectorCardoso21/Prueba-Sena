package com.sena.carritocompra.IService;

import java.util.List;

import com.sena.carritocompra.Dto.IventasDto;
import com.sena.carritocompra.Entity.Ventas;

public interface IVentasService extends IBaseService<Ventas> {
	List<IventasDto> getLits();

}
