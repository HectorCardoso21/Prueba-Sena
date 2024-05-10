package com.sena.carritocompra.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.carritocompra.Dto.IClienteDto;
import com.sena.carritocompra.Entity.Cliente;
import com.sena.carritocompra.IRepository.IBaseRepository;
import com.sena.carritocompra.IRepository.IClienteRepository;
import com.sena.carritocompra.IService.IClienteService;
import com.sena.carritocompra.Utils.Dirrecion;

@Service
public class ClienteService  extends ABaseService<Cliente> implements IClienteService{

	@Override
	protected IBaseRepository<Cliente, Long> getRepository() {
		// TODO Auto-generated method stub
		return repository;
	}
	
	
	@Autowired
	public  IClienteRepository repository;


	@Override
	public Dirrecion[] getTypeDocuments() {
		// TODO Auto-generated method stub
		return Dirrecion.values();
	}


	@Override
	public List<IClienteDto> getTypeDocument(String type) {
		return repository.getTypeDocument(type);
	}

}
