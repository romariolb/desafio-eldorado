<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Desafio ElDorado - Lista de Tarefas</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Node.js](https://img.shields.io/badge/node-16.13.0-green)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/npm-7.5.4-green)](https://nodejs.org/en/)
[![React.js](https://img.shields.io/badge/react-17.0.2-green)](https://pt-br.reactjs.org/)
[![Python](https://img.shields.io/badge/python-3.10-blue)](https://www.python.org/downloads/)
[![Flask-Marshmallow](https://img.shields.io/badge/flask--marshmallow-0.14.0-blue)](https://flask-marshmallow.readthedocs.io/en/latest/)
[![Flask-Restplus](https://img.shields.io/badge/flask--restplus-0.13.0-blue)](https://flask-restplus.readthedocs.io/en/stable/installation.html)
[![Flask-Restx](https://img.shields.io/badge/flask--restx-0.5.1-blue)](https://flask-restx.readthedocs.io/en/latest/)
[![Flask-SQLAlchemy](https://img.shields.io/badge/flask--sqlalchemy-2.x-blue)](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
[![Flask](https://img.shields.io/badge/flask-2.0.x-blue)](https://flask.palletsprojects.com/en/2.0.x/)
[![MySQL-Connector-Python](https://img.shields.io/badge/mysql--connector--python-8.0.27-blue)](https://pypi.org/project/mysql-connector-python/)
[![PyMySQL](https://img.shields.io/badge/pymysql-1.0.2-blue)](https://pypi.org/project/PyMySQL/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)


</div>

---

<p align="center"> Projeto desenvolvido para o desafio Eldorado. A feature consiste no cadastro, edição e exclusão de tarefas em uma lista.
    <br> 
</p>

## 📝 Índice

- [Sobre](#about)
- [Getting Started](#getting_started)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

A aplicação front-end deve conter uma lista mostrando as tarefas adicionadas, além de ter as funcionalidades de adicionar nova, editar, remover e marcar tarefa como concluída, para isso, o front-end deve se comunicar com o back-end, este deve prover as funcionalidades através de endpoints HTTP, o back-end por sua vez deve se comunicar com o banco de dados para leitura, inclusão, atualização e remoção das tarefas.

## 🏁 Getting Started <a name = "getting_started"></a>

Instruções para ter uma cópia do repositório.

### Pré-requisitos

-   **Python - Supported Versions:** >= 3.10
-   **Database:** MySQL
-   **Run-time environment:**: Node.js, npm & React Framework

### Instalação

- Clone

O repositório onde se encontra o código fonte da aplicação está na branch **master**. Logo:

```bash
$ git clone https://github.com/romariolb/desafio-eldorado.git
$ cd desafio-eldorado
$ git checkout master
```

-   **Back-end**

Estas ações devem ser realizadas dentro da pasta /Back-End.

- Configuração

Acesse a venv disponível:

```bash
$ source /env/Scripts/activate
```

Uma lista completa dos requisitos para execução dessa aplicação está disponível no arquivo
**requirements.txt**

Para instalá-los basta utilizar o **pip**:

```bash
$ pip install nome-pacote
```
É recomendado que seja feito esse processo, mesmo que seja apenas para verificação de pacotes.

- Database

Acesse a o diretório /src/server e abra o arquivo **instancy.py**. 
Na linha 16 altere os parametros **root** para suas credenciais de acesso (usuário:senha) do banco de dados:

Altere o seguinte atributo:

```bash
self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/desafio'
```

Caso tenha interesse, existe um script de criação da base de dados em /database/create_db.py, basta editar as linhas 9 e 10 
colocando seu usuário e senha do banco de dados e executar:

```bash
$ py /database/create_db.py
# OR
$ python /database/create_db.py
```

Caso não deseje ou não consiga executar esse script, será necessário criar a base de dados manualmente por meio do seu MySQL.

- Server

Para executar o server da aplicação basta estar na raiz do diretório /Back-End, com a (venv) ligada e executar:

```bash
$ py /src/app.py
# OR
$ python /src/app.py
```

O servidor deverá abrir em modo DEV. Esse servidor disponibiliza os endpoints para testes por meio do Swagger 
que pode ser acessado em **localhost:5000/api/doc** no seu navegador.

-   **Front-end**

Estas ações devem ser realizadas dentro da pasta /Front-End.

- Configuração

Instale todas as depedências:

```bash
$ npm install
```

- Framework

Instale o framework React:

```bash
# Node.js >=10 is required.
$ npm install -g react
# OR
$ npm install react
```

- Instale as seguintes dependências:

```bash
$ npm install axios
```

- Iniciar app em modo de desenvolvimento

```bash
$ npm start
```

A Lista de Tarefas deverá aparecer no seu navegador.

## ✍️ Authors <a name = "authors"></a>

- [@romariolb](https://github.com/romariolb) - Developer - romario.eds@gmail.com
