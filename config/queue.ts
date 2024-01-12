import {Application} from "express";
import {s} from './database'
import {Event as EventType} from "@/modules/events/types/event";

var amqp = require('amqplib/callback_api');

export = (app: Application) => {
    try {
        const vhost: string = process.env.RABBITMQ_VHOST;
        const host: string = process.env.RABBITMQ_HOST; //'167.235.244.139' || 'pure_rabbitmq_bus'
        const port: string = process.env.RABBITMQ_PORT; //'25672'
        const user: string = process.env.RABBITMQ_USER; //'notification'
        const pass: string = process.env.RABBITMQ_PASS; //'notification'

        const url = "amqp://" + user + ":" + pass + "@" + host + ":" + port + "/" + vhost


        amqp.connect(url, (error0: any, connection: {
            createChannel: (arg0: (error1: any, channel: any) => void) => void;
        }) => {
            if (error0) {
                throw error0;
            }
            connection.createChannel((error1, channel) => {
                if (error1) {
                    throw error1;
                }
                var queue = 'application-logger.events';

                channel.assertQueue(queue, {
                    durable: true
                });
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
                channel.consume(queue, function (msg: { content: { toString: () => any; }; }) {
                    try {
                        const event: EventType = JSON.parse(msg.content.toString())
                        s.models.EventModel.create(event).then(r => {
                            console.log(" [x] Received %s", msg.content.toString());
                            channel.ack(msg);
                        });
                    } catch (e) {
                        console.log(e)
                    }

                }, {
                    noAck: false
                });
            });
        });

        console.log('Queue connection OK!');
    } catch (error) {
        console.log('Unable to connect to the queue');
        process.exit(1);
    }
};