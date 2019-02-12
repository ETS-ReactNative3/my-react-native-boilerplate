import environments from './environments';

// Import all config files here
import server from './server';
import logger from './logger';
import auth from './auth';
import knex from './knex';
import connection from './connection';
import facebook from './facebook';
import google from './google';

// List all config objects imported here
const config = {
  server,
  logger,
  auth,
  connection,
  knex,
  facebook,
  google,
};

// config settings in environmen files override original values
Object.entries(environments).forEach(([key, value]) => {
  config[key] = {
    ...config[key],
    ...value,
  };
});

export default config;
