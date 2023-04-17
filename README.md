# Desafio técnico Duff

Código de implementação do desafio [para gerar uma playlist baseado na temperatura ideal média de um tipo de cerveja](https://github.com/ciclic/duff).

Foram utilizados alguns conceitos e técnologias que pode parecer *over engineering* para a implementação proposta, mas como é um desafio técnico utilizei várias tecnologias e padrões de desenvolvimento para demonstrar conceitos.

## Tecnologias e ferramentas utilizadas:
- Typescript
- gRPC
- Express
- Prisma
- jest
- docker
- Spotify API

## Padrões de desenvolvimento utilizados:
- Adapter
- Repository
- Gateway
- Factories
- Testes unitários
- Generics
- Interfaces
- princípios SOLID
- separação de responsabilidades em camadas, utilizando conceitos de arquitetura limpa e hexagonal
- Microserviços

### Beer Service

Serviço criado para disponibilizar um CRUD de cervejas, contendo o tipo, temperatura máxima e mínima. Contém um método mais específico que retorna a cerveja baseada na temperatura média mais próxima.

### Playlist Service

Serviço criado para disponibilizar uma playlist baseada no tipo de cerveja que é encontrada baseada na temperatura média. É dependente direto do serviço de cerveja para buscar a cerveja correta e faz a busca da playlist através da playlist do spotify.

### Web API

Serviço criado para disponibilizar uma API REST para que o cliente acesse os serviços, é apenas um express simples que faz a tradução para gRPC, nesse contexto está sendo utilzado para simular um API gateway fake.

### Dependências para execução da API
- docker
- docker compose
- nodejs
- App criado no [spotify developers](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token)
- protobuf [link para instalação](https://github.com/protocolbuffers/protobuf/releases/tag/v22.3), distros linux como ubuntu e fedora tem o protobuf nos seus repositórios.

## Como executar em desenvolvimento

preencher arquivos .env dos serviços com base nos .env.example

instalar dependências
-> npm install 
-> docker compose up

executar migrations
-> docker container ls
-> docker exec -ti [CONTAINER ID do backend-beerservice] /bin/bash
-> dentro do bash do serviço de cerveja executar: npx prisma migrate dev --name init

acessar a api através do localhost e porta referenciada no arquivo .env da webAPI

## Como executar em produção

Lembrando que em produção o banco de dados não consta no arquivo do docker compose, devendo ser criada uma instância do banco no host específico do banco de dados.

preencher arquivos .env dos serviços com base nos .env.example

instalar dependências
-> npm install 
-> docker compose -f ./docker-compose-build.yaml

executar migrations
-> docker container ls
-> docker exec -ti [CONTAINER ID do backend-beerservice] /bin/bash
-> dentro do bash do serviço de cerveja executar: npx prisma migrate deploy

acessar a api através do host e porta referenciada no arquivo .env da webAPI

## ROTAS

- [GET] /beer -> Retorna as cervejas
- [GET] /beer/:type -> Retorna a cerveja baseada no tipo
- [GET] /beer/:temperature/playlist -> Retorna a playlist baseada na temperatura média
- [POST] /beer -> adiciona uma cerveja, payload: 
  ```json
    {
    	"type": "IPA",
    	"minTemperature": -2,
    	"maxTemperature": 2
    }
  ```
- [PUT] /beer/:id -> atualiza uma cerveja, payload:
  ```json
    {
    	"type": "IPA",
    	"minTemperature": -3,
    	"maxTemperature": 4
    }
  ```
- [DELETE] /beer/:id -> Remove uma cerveja