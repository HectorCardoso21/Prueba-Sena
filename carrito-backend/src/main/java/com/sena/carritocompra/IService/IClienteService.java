package com.sena.carritocompra.IService;

import java.util.List;

import com.sena.carritocompra.Dto.IClienteDto;
import com.sena.carritocompra.Entity.Cliente;
import com.sena.carritocompra.Utils.Dirrecion;

public interface IClienteService extends IBaseService<Cliente>{
	Dirrecion[] getTypeDocuments();
	List<IClienteDto> getTypeDocument(String type);


}
