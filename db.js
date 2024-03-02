/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://noah:Godalone1.@localhost/lunchly");

db.connect();

module.exports = db;
