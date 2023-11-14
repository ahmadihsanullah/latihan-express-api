library yang dibutuhkan
- dotenv
- nodemon
- sequelize untuk db
    npm install --save sequelize
    npm install --save-dev sequelize-cli

    running migration:
    npx sequelize-cli db:migrate

    undo migration:
    npx sequelize-cli db:migrate:undo

- validator untuk json
npm i fastest-validator