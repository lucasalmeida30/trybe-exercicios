USE zoologico;

CREATE TABLE animal(
    id_animal INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sexo VARCHAR(30) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(45) NOT NULL
);

CREATE TABLE cuidador(
  id_cuidador INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  id_gerente INT NOT NULL,
  FOREIGN KEY (id_gerente) REFERENCES gerente (id_gerente)
);


CREATE TABLE cuidador_animal(
  id_cuidador_animal INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_animal INT NOT NULL,
  id_cuidador INT NOT NULL,
  FOREIGN KEY (id_animal) REFERENCES animal (id_animal),
  FOREIGN KEY (id_cuidador) REFERENCES cuidador (id_cuidador)
);

CREATE TABLE gerente(
  id_gerente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL
);