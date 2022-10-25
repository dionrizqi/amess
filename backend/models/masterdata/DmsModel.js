import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const {DataTypes} = Sequelize;

const Dms = db.define('master_dms',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    file:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    path:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    notes:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
},{
    freezeTableName: true
});


export default Dms;