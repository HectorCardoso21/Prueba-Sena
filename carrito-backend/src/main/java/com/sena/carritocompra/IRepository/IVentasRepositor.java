package com.sena.carritocompra.IRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sena.carritocompra.Dto.IventasDto;
import com.sena.carritocompra.Entity.Ventas;
@Repository
public interface IVentasRepositor   extends IBaseRepository<Ventas, Long> {
	
	
	@Query(value = "SELECT COUNT(*)  AS Cantidad FROM ventas \r\n"
			+ "where deleted_at is null", nativeQuery = true)
	List<IventasDto> getLits();

}





