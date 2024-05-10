package com.sena.carritocompra.Service;

import org.springframework.stereotype.Service;

import com.sena.carritocompra.Entity.DPR_VENRTAS;
import com.sena.carritocompra.IRepository.DRP_VentasRepositoy;
import com.sena.carritocompra.IRepository.IBaseRepository;
import com.sena.carritocompra.IService.DPR_VentasService;

@Service
public class DPR_VentasServiceS extends ABaseService<DPR_VENRTAS> implements DPR_VentasService{

	@Override
	protected IBaseRepository<DPR_VENRTAS, Long> getRepository() {
		// TODO Auto-generated method stub
		return repository;
	}
	
	public DRP_VentasRepositoy repository;

}
