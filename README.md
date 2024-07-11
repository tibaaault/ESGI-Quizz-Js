# Quizz Me ! #

<p align="center">
   <strong>An exercise in learning JavaScript frameworks with a quiz website</strong><br />
   <strong>JavaScript website</strong>
</p>

### Features 🚀

- 🌐 **Participate in quizzes**
  
- 🔄 **Check your results**
  
- ⭐ **View your stats**

- 📦 **Explore all quiz categories**
  
- 📝 **Create an account**
  
- 🍒 **Navigate between questions during quizzes**

## Prerequisites for use 🛠️

- Node.js installé
- Variables d'environnement configurées (voir `.env.example`)

## Prerequisites for installation 🛠️

- JavaScript
- MariaDB 10.10.X
- Vue.js
- TypeScript

## How to Run the Project ▶️

1. Clone this repository to your local machine.
2. Navigate to the frontend directory `cd frontend/` and run `npm install` to install all dependencies.
3. Navigate to the backend directory `cd backend/` and run `npm install` to install all dependencies.
4. Execute `npm run build` to build the frontend assets.
5. Modify your database connection information in a configuration file (e.g., `.env` for Node.js projects).
6. Launch your MAMP / WAMP / ZAMP (ensure your database server is running).
7. Execute migrations with Prisma: `npx prisma migrate` or use my database esgi-quizz-js.
8. Start your backend server by running `npm run dev`.
9. Start your frontend server by running `npm run dev`.

## Database Migrations with Prisma

This project uses Prisma as the ORM to manage the database.
Migrations are essential to keep the database structure up-to-date with the application's evolution.

## Authors ✨

[@Thibault](https://github.com/tibaaault)

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
