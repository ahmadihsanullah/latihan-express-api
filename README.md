library yang dibutuhkan
- dotenv
- nodemon
- sequelize untuk db
- npm install --save sequelize
- npm install --save-dev sequelize-cli

- sequelize init : untuk membuat project sequelizenya
- config dengan db di dotenv

- running migration:
- npx sequelize-cli db:migrate

-undo migration:
- npx sequelize-cli db:migrate:undo

- validator untuk json
*npm i fastest-validator
