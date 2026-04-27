
# 🍽️ MealHub

O **MealHub** é uma aplicação backend para gerenciamento de restaurantes, permitindo o cadastro de usuários, cardápio e pedidos de forma simples e eficiente.

> 🚧 Projeto em desenvolvimento.

---

## 🚀 Funcionalidades

* 👤 Cadastro e autenticação de usuários
* 🍔 Gerenciamento de cardápio

  * Nome
  * Descrição
  * Preço
  * Categoria
  * Disponibilidade
* 🧾 Criação e gerenciamento de pedidos
* 🔐 Controle de acesso por tipo de usuário

---

## 🛠️ Tecnologias utilizadas

### Backend

* Node.js
* Express
* JavaScript

### Ferramentas

* Git & GitHub
* Insomnia (testes de API)
* Render (deploy)

---

## 📁 Estrutura do projeto

```
mealhub/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mealhub.git

# Acesse a pasta
cd mealhub

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 🔗 Endpoints (exemplo)

### Usuários

* `POST /users` → Criar usuário
* `POST /login` → Autenticação

### Cardápio

* `GET /menu` → Listar itens
* `POST /menu` → Criar item

### Pedidos

* `POST /orders` → Criar pedido
* `GET /orders` → Listar pedidos

---

## 🌐 Deploy

A API será disponibilizada via **Render**.

---

## 📌 Próximos passos

* [ ] Integração com banco de dados
* [ ] Sistema de pontuação ou fidelidade
* [ ] Desenvolvimento do frontend
* [ ] Melhorias na autenticação (JWT)

---

## 👩‍💻 Autora

Desenvolvido por **Julliane**

---

