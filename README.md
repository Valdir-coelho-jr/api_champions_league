## api_champions_league

Este repositório contém uma API simples construída com TypeScript e Express.js para gerenciar e recuperar dados sobre clubes e jogadores de futebol na Liga dos Campeões.

### Descrição do Projeto

Esta API foi criada para demonstrar o uso do TypeScript e Express.js na construção de uma API RESTful. Ela fornece operações básicas para gerenciar dados sobre clubes e jogadores da Liga dos Campeões, como listar, criar, atualizar e deletar.

### Funcionalidades

* **Gerenciamento de Clubes:**
    * Listar todos os clubes da Liga dos Campeões.
* **Gerenciamento de Jogadores:**
    * Listar todos os jogadores.
    * Buscar um jogador específico por ID.
    * Criar um novo jogador.
    * Atualizar as estatísticas de um jogador.
    * Deletar um jogador.

### Instalação

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/your-username/api_champions_league.git
   ```
2. **Instalar as dependências:**
   ```bash
   cd api_champions_league
   npm install
   ```
   

### Estrutura do Projeto

```
api_champions_league/
├── src
│   ├── routes.ts
│   ├── controllers
│   │   ├── clubs_controller.ts
│   │   └── players_controller.ts
│   ├── services
│   │   ├── clubs_services.ts
│   │   └── players_services.ts
│   ├── models
│   │   ├── club_model.ts
│   │   ├── http_response_model.ts
│   │   ├── player_model.ts
│   │   └── statistics_model.ts
│   ├── repositories
│   │   ├── clubs_repository.ts
│   │   └── players_repository.ts
│   └── utils
│       └── http_helper.ts
└── server.ts
```

### Licença

Este projeto é licenciado sob a Licença ISC.
