import {Sequelize} from "sequelize";

const db = new Sequelize('amess', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
});

export default db;