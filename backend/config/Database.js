import { Sequelize } from "sequelize";

const db = new Sequelize('apotik2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
