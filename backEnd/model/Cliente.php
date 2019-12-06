<?php
include __DIR__.'/Conexao.php';

class Cliente extends Conexao {
	private $nome;
    private $email;    
    private $telefone;


    public function getNome() {
        return $this->nome;
    }

   
    public function setNome($nome) {
        $this->nome = $nome;
        return $this;
    }

    
    public function getEmail() {
        return $this->email;
    }

   
    public function setEmail($email) {
        $this->email = $email;
        return $this;
    }

    
    public function getTelefone() {
        return $this->telefone;
    }

    public function setTelefone($telefone) {
        $this->telefone = $telefone;
        return $this;
    }
    
    public function insert($obj){    
    	$sql = "INSERT INTO cliente(nome,telefone,email) VALUES (:nome,:telefone,:email)";
    	$consulta = Conexao::prepare($sql);
        $consulta->bindValue('nome',  $obj->nome);
        $consulta->bindValue('telefone' , $obj->telefone);
        $consulta->bindValue('email' , $obj->email);
    	return $consulta->execute();

	}

	public function findAll(){
		$sql = "SELECT * FROM cliente";
		$consulta = Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
	}
}

?>