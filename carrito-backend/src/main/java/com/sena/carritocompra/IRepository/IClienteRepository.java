package com.sena.carritocompra.IRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sena.carritocompra.Dto.IClienteDto;
import com.sena.carritocompra.Entity.Cliente;
@Repository
public interface IClienteRepository extends IBaseRepository<Cliente, Long> {
	@Query(value = "\r\n"
			+ "SELECT cliente.id,\r\n"
			+ "    cliente.state,\r\n"
			+ "\r\n"
			+ "cliente.document,\r\n"
			+ "    cliente.telefono,\r\n"
			+ "    cliente.address,\r\n"
			+ "    cliente.apellido,\r\n"
			+ "    cliente.nombre,\r\n"
			+ "    cliente.type_document,\r\n"
			+ "    cliente.ubication\r\n"
			+ "FROM prueba.cliente\r\n"
			+ "where deleted_at is null;\r\n"
			+ "", nativeQuery = true)
	List<IClienteDto> getTypeDocument(String type);

}


