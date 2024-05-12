package com.sena.carritocompra.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.carritocompra.Dto.IproductoDto;
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
	@Autowired 
public IProductosRepository repository;
	@Override
	public List<IproductoDto> getLits() {
		// TODO Auto-generated method stub
		return repository.getLits();
	}
	@Override
	public List<IproductoDto> getListStok() {
		return repository.getListStok();
	}
}
