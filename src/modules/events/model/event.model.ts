import {Model, Sequelize} from "sequelize";

const { DataTypes } = require('sequelize');

export type AccessKey = {
    id: Number|null;
    token: string
};

export default (sequelize: Sequelize) => {
    sequelize.define('EventModel', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        message: {
            allowNull: false,
            type: DataTypes.STRING
        },
        service: {
            allowNull: false,
            type: DataTypes.STRING
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING
        },
        timestamp: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
    }, {
        timestamps: false,
        tableName: 'events'
    });
};