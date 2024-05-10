package com.sena.carritocompra.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Ventas")
public class Ventas  extends ABaseEntity{

    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
   	@JoinColumn(name = "cliente_id", nullable = false)
       private Cliente cliente;
    
    @Column(name = "total", length = 45, nullable = false)
    private String total;
   
    @Column(name = "fecha_venta", length = 100, nullable = false)
    private  Date fecha_venta;

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public Date getFecha_venta() {
		return fecha_venta;
	}

	public void setFecha_venta(Date fecha_venta) {
		this.fecha_venta = fecha_venta;
	}

    
    
    
	
}
