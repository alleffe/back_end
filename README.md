# Meu Projeto com Node.js, TypeORM e TypeScript

Este é um projeto desenvolvido com **Node.js**, **TypeScript**, **TypeORM**, e **Express.js**, com uma estrutura organizada para facilitar o desenvolvimento de APIs modernas e escaláveis.

---

## 🚀 Funcionalidades

- Configuração de banco de dados com TypeORM.
- Modelos e controladores para entidades como `User` e `Mission`.
- Rotas organizadas para recursos específicos.
- Pronto para autenticação e validação de dados.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **TypeORM**: ORM para integração com banco de dados.
- **Express.js**: Framework para criar APIs robustas e rápidas.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── config/
│   └── database.ts          # Configuração do banco de dados
├── controllers/
│   ├── missionController.ts # Controlador para a entidade 'Mission'
│   └── userController.ts    # Controlador para a entidade 'User'
├── models/
│   ├── missionModel.ts      # Modelo da entidade 'Mission'
│   └── userModel.ts         # Modelo da entidade 'User'
├── routes/
│   ├── missionRoutes.ts     # Rotas para a entidade 'Mission'
│   └── userRoutes.ts        # Rotas para a entidade 'User'
├── index.js                 # Arquivo principal do servidor
