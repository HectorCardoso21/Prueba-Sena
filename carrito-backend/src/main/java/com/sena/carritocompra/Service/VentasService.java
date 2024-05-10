package com.sena.carritocompra.Service;

import org.springframework.stereotype.Service;

import com.sena.carritocompra.Entity.Ventas;
import com.sena.carritocompra.IRepository.IBaseRepository;
import com.sena.carritocompra.IRepository.IVentasRepositor;
import com.sena.carritocompra.IService.IVentasService;
@Service
public class VentasService  extends ABaseService<Ventas> implements IVentasService{

	@Override
	protected IBaseRepository<Ventas, Long> getRepository() {
		// TODO Auto-generated method stub
		return repositor;
	}
	
	public IVentasRepositor repositor;

}
