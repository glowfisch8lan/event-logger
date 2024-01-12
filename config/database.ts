import {Sequelize, DataTypes} from 'sequelize';
import {Application} from "express";
import EventModel from "../src/modules/events/model/event.model";

let s: Sequelize;

const database = (app: Application) => {
    try {
        s = new Sequelize({
            dialect: 'sqlite',
            storage: 'db/db.db'
        });
        const modelDefiners: any[] = [
            EventModel,
            // RoomModel,
        ];

        for (const modelDefiner of modelDefiners) {
            modelDefiner(s)
        }

        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
};
export {database, s}