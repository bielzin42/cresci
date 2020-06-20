package br.com.cresci.crescibr.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@Table(name = "clientes")
public class ClienteModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cliente")
	private long idCliente;

	@Column(name = "nomeCliente", nullable = false)
	@Size(min = 5, max = 100)
	private String nomeCliente;

	@Column(name = "cpf", nullable = false, unique = true)
	@Size(min = 11, max = 11)
	private String cpf;
	
	@Column(nullable = false, unique = true)
	@Size(min = 8, max = 50)
	private String usuario;

	@Column(name = "senha", nullable = false)
	//@Size(min = 6, max = 30)
	private String senha;

	@OneToOne(cascade = CascadeType.ALL)
	@NotNull
	private EnderecoModel endereco;
}
