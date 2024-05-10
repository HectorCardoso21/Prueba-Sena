package com.sena.carritocompra.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Cliente")
public class Cliente  extends ABaseEntity{

	
    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;
    
    @Column(name = "apellido", length = 50, nullable = false)
    private String apellido;
   
    @Column(name = "address", length = 100, nullable = false)
    private String address;
    
    @Column(name = "	", length = 50, nullable = false)
    private String typeDocument;
    
    @Column(name = "document", length = 10, nullable = false, unique=true)
    private String Document;
    
    @Column(name = "ubication", length = 10, nullable = false, unique=true)
    private String ubication;

    @Column(name = "Telefono", length = 10, nullable = false, unique=true)
    private String Telefono;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTypeDocument() {
		return typeDocument;
	}

	public void setTypeDocument(String typeDocument) {
		this.typeDocument = typeDocument;
	}

	public String getDocument() {
		return Document;
	}

	public void setDocument(String document) {
		Document = document;
	}

	public String getUbication() {
		return ubication;
	}

	public void setUbication(String ubication) {
		this.ubication = ubication;
	}

	public String getTelefono() {
		return Telefono;
	}

	public void setTelefono(String telefono) {
		Telefono = telefono;
	}

	
    
    
    
    
	
}
