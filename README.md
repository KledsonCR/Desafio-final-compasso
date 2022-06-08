<h1 align='center'> Renpass.UOL Final Challenge 🚘🚩 </h1>

> Developing ⚠️

### Tecnologias Utilizadas no Desenvolvimento 🛠

- Nodejs
- Express
- MongoDB
- Mongoose
- Javascript
- Postman
  
###  ▶️ Rodando a aplicação 

```bash
# Clone o projeto executando o comando
$ git clone https://github.com/KledsonCR/Desafio-final-compasso.git

# Execute o comando para instalar as dependências
$ npm install

# Execute aplicação com o comando:
$ npm run dev

# A aplicação iniciará na porta: 3000
```

## Rotas de Carros 🏎

POST(Cadastrar um carro) - `http://localhost:3000/api/v1/car`

> Exemplo

```bash
  {
    "model": "Ferrari F14 T",
    "type": "Sport",
    "brand": "Ferrari",
    "color": "Vermelha",
    "year": 2014,
    "accessories": [
                    { "description": "Aerofólio" },
                    { "description": "Motor turbo" },
                    { "description": "Volante esportivo" },
                    { "description": "Pneus de corrida" },
                    { "description": "Gás Nitro" }
                ],
    "passengersQtd": 2
}
```
GET(Listar todos os carros) - `http://localhost:3000/api/v1/car` <br>
```bash
{
    "vehicles": [
    {
            "_id": "629fb348ffea98ea3d2f4d0f",
            "model": "Uno",
            "type": "hatch",
            "brand": "Fiat",
            "color": "verde",
            "year": 1980,
            "accessories": [
                {
                    "description": "Escada"
                },
                {
                    "description": "Rebaixado"
                }
            ],
            "passengersQtd": 4
        },
        {
            "_id": "629fba0292285ab601a3910c",
            "model": "lambo",
            "type": "hatch",
            "brand": "Fiat",
            "color": "verde",
            "year": 2020,
            "accessories": [
                {
                    "description": "rapida"
                },
                {
                    "description": "Rebaixado"
                }
            ],
            "passengersQtd": 2
        },
        {
            "_id": "629fba7592285ab601a3910e",
            "model": "lambo",
            "type": "sport",
            "brand": "Ferrari",
            "color": "verde",
            "year": 2020,
            "accessories": [
                {
                    "description": "rapida"
                }
            ],
            "passengersQtd": 2
        },
        {
            "_id": "62a083f192285ab601a39110",
            "model": "Ferrari F14 T",
            "type": "Sport",
            "brand": "Ferrari",
            "color": "Vermelha",
            "year": 2014,
            "accessories": [
                {
                    "description": "Aerofólio"
                },
                {
                    "description": "Motor turbo"
                },
                {
                    "description": "Volante esportivo"
                },
                {
                    "description": "Pneus de corrida"
                },
                {
                    "description": "Gás Nitro"
                }
            ],
            "passengersQtd": 2
        }
    ],
    "limit": 50,
    "total": 8,
    "offset": 1,
    "offsets": 1
}
```
GET(Listar por ID) - `http://localhost:3000/api/v1/car/:id` <br>

```bash
{
    "_id": "62a083f192285ab601a39110",
    "model": "Ferrari F14 T",
    "type": "Sport",
    "brand": "Ferrari",
    "color": "Vermelha",
    "year": 2014,
    "accessories": [
        {
            "description": "Aerofólio"
        },
        {
            "description": "Motor turbo"
        },
        {
            "description": "Volante esportivo"
        },
        {
            "description": "Pneus de corrida"
        },
        {
            "description": "Gás Nitro"
        }
    ],
    "passengersQtd": 2,
    "__v": 0
}
```
PUT(Atualizar carros) - `http://localhost:3000/api/v1/car/:id`

```bash
{
    "model": "Ferrari F14 T",
    "type": "Sport Racer",
    "brand": "Ferrari",
    "color": "Preto brilhante",
    "year": 2014,
    "accessories": [
        {
            "description": "Aerofólio"
        },
        {
            "description": "Motor turbo"
        },
        {
            "description": "Volante esportivo"
        },
        {
            "description": "Pneus de corrida"
        },
        {
            "description": "Gás Nitro"
        }
    ],
    "passengersQtd": 2,
    "__v": 0
}
```
DELETE(Deletar um carro) - `http://localhost:3000/api/v1/car/:id`

> Deletar um carro por ID


## Rotas de Pessoas 🤵🏾

POST(Casdastrar um usuário) - `http://localhost:3000/api/v1/person`

> Exemplo

```bash
{
    "name": "joaozinho ciclano",
    "cpf": "043.784.322-00",
    "birthDay": "10/06/2002",
    "email": "joazinho@gmail.com",
    "password":"123456",
    "canDrive": "yes"
}
```
GET(Listar todos os usuários) - `http://localhost:3000/api/v1/person`

```bash
{
    "Users": [
        {
            "_id": "62a08ae892285ab601a39117",
            "name": "joaozinho ciclano",
            "cpf": "043.784.322-00",
            "birthDay": "10/06/2002",
            "email": "joazinho@gmail.com",
            "password": "123456",
            "canDrive": "yes"
        }
    ],
    "limit": 50,
    "total": 1,
    "offset": 1,
    "offsets": 1
}
```

GET(Listar por ID) - `http://localhost:3000/api/v1/person/:id`

```bash
{
    "_id": "62a08ae892285ab601a39117",
    "name": "joaozinho ciclano",
    "cpf": "043.784.322-00",
    "birthDay": "10/06/2002",
    "email": "joazinho@gmail.com",
    "password": "123456",
    "canDrive": "yes",
    "__v": 0
}
```

PUT(Atualizar usuário)- `http://localhost:3000/api/v1/person/:id`

```bash
{
    "name": "joão feijão",
    "cpf": "043.784.322-00",
    "birthDay": "10/06/2003",
    "email": "joaopédefeijao@gmail.com",
    "password":"123456",
    "canDrive": "yes"
    }
```
DELETE(Apagar usuário) - `http://localhost:3000/api/v1/person/:id`

> Deletar usuário po ID




## Rota de Autenticação 🔐

POST(Autenticar usuário) - `http://localhost:3000/api/v1/authenticate`

> Exemplo

```bash
{
    "email": "joazinho@gmail.com",
    "password": "123456"
}
```



# Autor 👨‍💻 



[Kledson Costa](https://www.linkedin.com/in/kledson-rabelo-028b5a232/)



###