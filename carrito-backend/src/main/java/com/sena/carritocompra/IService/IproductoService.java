package com.sena.carritocompra.IService;

import java.util.List;

import com.sena.carritocompra.Dto.IproductoDto;
import com.sena.carritocompra.Entity.Productos;

public interface IproductoService  extends IBaseService<Productos>{
	List<IproductoDto> getLits();
	List<IproductoDto> getListStok();

}
