const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../', '.env') });
const Config = require('./Config').default;

const { knex: knexConfig, connection } = Config;

// When the app is running in the docker container, the host is mysql, when
// running knex from the command line, the host needs to be localhost
connection.host = 'localhost';

const knexFileConfig = {
  ...knexConfig,
  connection,
  migrations: {
    directory: path.join(__dirname, '../src/Migrations'),
  },
};

// since environment config is handled in the Config module, all envs should be the same
module.exports = {
  development: knexFileConfig,
  staging: knexFileConfig,
  production: knexFileConfig,
};
