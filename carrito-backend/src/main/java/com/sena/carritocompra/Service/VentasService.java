package com.sena.carritocompra.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.carritocompra.Dto.IventasDto;
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
	@Autowired
	public IVentasRepositor repositor;
	@Override
	public List<IventasDto> getLits() {
		return repositor.getLits();
	}

}
