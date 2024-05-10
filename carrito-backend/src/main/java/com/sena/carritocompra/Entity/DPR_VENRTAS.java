package com.sena.carritocompra.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "description_ventas")
public class DPR_VENRTAS  extends ABaseEntity{

	
	
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
   	@JoinColumn(name = "ventas_id", nullable = false)
       private Ventas ventas;
    
    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
   	@JoinColumn(name = "productos_id", nullable = false)
       private Productos productos;
    
    
    @Column(name = "Cantidad", length = 45, nullable = false)
    private int cantidad;
   
    @Column(name = "precio", length = 100, nullable = false)
    private Double precio;
    
    @Column(name = "descuento", length = 100, nullable = false)
    private Double descueto;
    
    @Column(name = "sub_total", length = 9, nullable = false)
    private Double sub_total;

	public Ventas getVentas() {
		return ventas;
	}

	public void setVentas(Ventas ventas) {
		this.ventas = ventas;
	}

	public Productos getProductos() {
		return productos;
	}

	public void setProductos(Productos productos) {
		this.productos = productos;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Double getDescueto() {
		return descueto;
	}

	public void setDescueto(Double descueto) {
		this.descueto = descueto;
	}

	public Double getSub_total() {
		return sub_total;
	}

	public void setSub_total(Double sub_total) {
		this.sub_total = sub_total;
	}
    
    
    
    
    
	
}
