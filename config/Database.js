import { Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','indonesia217',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;

