package com.sena.carritocompra.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Productos  extends ABaseEntity{
	
    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;
    
    @Column(name = "description", length = 50, nullable = false)
    private String description;
   
    @Column(name = "Cantidad", length = 100, nullable = false)
    private  int Cantidad;
    
    @Column(name = "precio", length = 50, nullable = false)
    private Double precio;
    
    @Column(name = "PorcentjeIva", length = 10, nullable = false, unique=true)
    private int PorcentjeIva;
    
    @Column(name = "PorcentajeDes", length = 10, nullable = false, unique=true)
    private int PorcentajeDes;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getCantidad() {
		return Cantidad;
	}

	public void setCantidad(int cantidad) {
		Cantidad = cantidad;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public int getPorcentjeIva() {
		return PorcentjeIva;
	}

	public void setPorcentjeIva(int porcentjeIva) {
		PorcentjeIva = porcentjeIva;
	}

	public int getPorcentajeDes() {
		return PorcentajeDes;
	}

	public void setPorcentajeDes(int porcentajeDes) {
		PorcentajeDes = porcentajeDes;
	}


}
