const express = require('express');
const pg = require('pg');

const config = {
	user: 'postgres',
	database: 'teamwork',
	password: 'user254',
	port : 5432
}

const pool = new pg.Pool(config);
module.exports = pool;