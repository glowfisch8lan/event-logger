'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

const tableName = 'events';

exports.up = function (db) {
    return db.createTable(tableName, {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        message: {type: 'string', allowNull: false},
        service: {type: 'string', allowNull: false},
        type: {type: 'string', allowNull: false},
        timestamp: {type: 'int', allowNull: false},
    }, {
        ifExists: false
    });
};

exports.down = function (db) {
    return db.dropTable(tableName, {
        ifExists: true
    })
};

exports._meta = {
    "version": 1
};
