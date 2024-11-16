const config = {
	client: 'pg',
	connection: {
		host:'postgres', 
		user: 'pagespeed_app', 
		password: 'pagespeed_admin', 
		database: 'pagespeed_app', 
		port: 5432
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: '_migrations',
		loadExtensions: ['.ts'],
		directory: './docker/postgres/migrations',
	},
	seeds: {
		directory: './docker/postgres/seeds',
		loadExtensions: ['.ts'],
	},
};

module.exports = {
	development: config,
	test: config,
	staging: config,
	production: config,
};