exame 


Uma breve descrição do seu projeto. Por exemplo:
"Este projeto é uma API desenvolvida em Node.js com TypeScript e TypeORM para gerenciar missões e usuários. O sistema utiliza Express.js para criar endpoints RESTful."

Instalação

Siga as etapas abaixo para configurar o projeto localmente:

Clone o repositório:

git clone https://github.com/seu-usuario/nome-repositorio.git

Navegue até o diretório do projeto:

cd nome-repositorio

Instale as dependências:

npm install

Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes informações:

DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_secreta

Como Usar

Execute as migrações para criar o banco de dados:

npm run migration:run

Inicie o servidor:

npm start

Acesse a API no navegador ou via ferramenta como Postman:

http://localhost:3000

Endpoints Principais

Usuários

GET /users: Retorna todos os usuários.

POST /users: Cria um novo usuário.

Parâmetros (JSON):

{
  "name": "Nome do Usuário",
  "email": "email@example.com",
  "password": "senha123"
}

Missões

GET /missions: Retorna todas as missões.

POST /missions: Cria uma nova missão.

Parâmetros (JSON):

{
  "title": "Titulo da Missão",
  "description": "Descricao da missão",
  "userId": 1
}

Estrutura do Projeto

src/config: Configurações do banco de dados.

src/controllers: Controladores com a lógica de negócio.

src/models: Modelos do banco de dados usando TypeORM.

src/routes: Rotas da API.

Tecnologias Utilizadas

Node.js

TypeScript

TypeORM

Express.js

MySQL

Contribuição

Contribuições são bem-vindas! Para contribuir:

Faça um fork do repositório.

Crie uma branch para suas alterações:

git checkout -b minha-feature

Faça o commit das alterações:

git commit -m "Adiciona nova funcionalidade"

Envie para o repositório remoto:

git push origin minha-feature

Abra um Pull Request.

Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

