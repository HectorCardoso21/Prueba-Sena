package com.sena.carritocompra.Service;

import org.springframework.stereotype.Service;

import com.sena.carritocompra.Entity.Productos;
import com.sena.carritocompra.IRepository.IBaseRepository;
import com.sena.carritocompra.IRepository.IProductosRepository;
import com.sena.carritocompra.IService.IproductoService;
@Service
public class ProductosdServie extends ABaseService<Productos> implements IproductoService{

	@Override
	protected IBaseRepository<Productos, Long> getRepository() {
		// TODO Auto-generated method stub
		return repository;
	}
public IProductosRepository repository;
}
