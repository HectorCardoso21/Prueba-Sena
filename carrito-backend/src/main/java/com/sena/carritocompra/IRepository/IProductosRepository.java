	package com.sena.carritocompra.IRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sena.carritocompra.Dto.IproductoDto;
import com.sena.carritocompra.Entity.Productos;
@Repository

public interface IProductosRepository  extends IBaseRepository<Productos, Long>{
	
	@Query(value = "\r\n"
			+ "SELECT COUNT(*)  AS Cantidad FROM productos \r\n"
			+ "where deleted_at is null\r\n"
			+ "", nativeQuery = true)
	List<IproductoDto> getLits();
	

	
	
	@Query(value = "SELECT * FROM productos\r\n"
			+ "ORDER BY cantidad asc\r\n"
			+ "LIMIT 5;\r\n"
			+ "", nativeQuery = true)
	List<IproductoDto> getListStok();
}



