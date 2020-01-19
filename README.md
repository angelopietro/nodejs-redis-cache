<h1 align="center">
  <img alt="NodeJS-Redis" title="NodeJS-Redis" src="https://user-images.githubusercontent.com/5533726/72685392-6aecde80-3ac8-11ea-8e7d-a384b67a460a.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

# **Melhorando a performance da API NodeJS utilizando Cache com Redis**

Nesta aplicação, você irá encontrar uma maneira simples de realizar **cache** com o **redis** e otimizar o retorno da informação esperada pelo usuário de forma mais rápida, sem a necessidade de fazer uma nova consulta na base de dados.

# Ambiente de desenvolvimento

* [Visual Studio Code](https://code.visualstudio.com/) - Editor de código
* [Imsomnia](https://insomnia.rest/) - Cliente de serviços http (APIs)
* [Node](https://nodejs.org/) - Interpretador de JavaScript orientado a eventos
* [Yarn](https://yarnpkg.com) - Gerenciador de pacotes
* [MongoDB Compass](https://www.mongodb.com/download-center/compass) - GUI MongoDB
* [Docker](https://www.docker.com/) - Plataforma aberta para criação, execução e publicação (deploy) de containers
* [Docker Compose](https://docs.docker.com/compose/) - Orquestrador de containers Docker

# Passos para instalação

Após ter seu ambiente de desenvolvimento todo instalado e configurado com as suas ferramentas preferenciais, siga os passos abaixo:

### 1. Instalando as Imagens/Serviços Docker

#### MongoDB

A base (schemas) utilizada do MongoDB foi a de treinamento, disponível no MongoDB Cloud.
Para utilizar, faz-se necessário ter uma conta e criar as bases(schemas) através do painel.

A documentação pode ser encontrata em https://docs.atlas.mongodb.com/sample-data/sample-training/

Se preferir, você pode criar seu container docker para a aplicação e utilizar em uma base local.

```bash
$ docker run --name nome-container-mongo -d mongo:latest
```

#### Redis (para armazenar as informações em cache)

O Redis é um banco não relacional para armazenamento de estrutura de dados em memória de código aberto (licenciado pela BSD), usado como banco de dados, cache e intermediário de mensagens.

```bash
$ docker run --name nome-container -p 6379:6379 -d -t redis:alpine
```
---

### 2. Clonando o repositório

Para baixar/clonar o repositório, utilize o comando:

```git
https://github.com/angelopietro/nodejs-redis-cache.git
```

### 3. Configurando a alicação

1. Renomeie o arquivo `env.example` para `.env`.

2. Abra o arquivo `.env` e configure as constantes(variáveis de ambiente) preenchendo as informações solicitadas.

3. Comandos a serem executados:

```bash
# Instalar as dependências do backend
$ yarn install

# Para iniciar o serviço do backend
$ yarn dev
```
Para realizar testes, utilize o insomnia ou outro REST client, faça um get da seguinte forma:

- Listar todos os dados - [http://localhost:3333/posts](http://localhost:3333/posts)

- Listar apenas um registro - [http://localhost:3333/posts/pskoDKmuZvKnzARJNpji](http://localhost:3333/posts/pskoDKmuZvKnzARJNpji)
Nesta lista de apensa um registro é onde o redis entra em ação para realizar o cache das informações. O parâmetro utilizado como referência é o **permalink** existente na saída JSON.


```json
{
  "data": {
    "tags": [
      "jason",
      "lyre",
      "egg",
      "shell",
      "waste",
      "puffin",
      "brush",
      "potato",
      "shape",
      "bulb"
    ],
    "comments": [
      {
        "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "email": "RRkqDbik@eqytdQrT.com",
        "author": "Mariette Batdorf"
      }
    ],
    "_id": "50ab0f8bbcf1bfe2536dc41d",
    "body": "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.<p>Now we are engaged in a great civil war, testing whether that nation, or any nation, so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.<p>But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom and that government of the people, by the people, for the people, shall not perish from the earth.\"\n\n",
    "permalink": "pskoDKmuZvKnzARJNpji",
    "author": "machine",
    "title": "Gettysburg Address",
    "date": "2012-11-20T05:05:15.287Z"
  }
}
```


## Autor

:mortar_board: **Ângelo Pietro**

- Linkedin: [Ângelo Pietro](https://www.linkedin.com/in/angelopietro/)
- Github: [@angelopietro](https://github.com/angelopietro)
