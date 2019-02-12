import { Model } from 'objection';
import knex from 'knex';
import Config from 'Config';
import User from './User';

const { knex: knexConfig, connection } = Config;

export const Models = {
  User,
};

export const initDb = async () => {
  module.exports.connection = knex({
    ...knexConfig,
    connection,
  });
  Model.knex(module.exports.connection);
};
