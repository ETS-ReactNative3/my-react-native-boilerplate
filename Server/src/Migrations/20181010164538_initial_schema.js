exports.up = knex =>
  knex.schema.createTable('users', table => {
    // Columns
    table.increments('id').primary();
    table.string('googleId');
    table.string('facebookId');
    table.string('email');
    table.string('username');
    table.string('password');
    table.string('displayName');
    table.json('googleProfile');
    table.json('facebookProfile');
    table.text('googleAccessToken');
    table.text('facebookAccessToken');

    // Unique Columns
    table.unique('email');
    table.unique('username');
    table.unique('googleId');
    table.unique('facebookId');

    // Indexes
    table.index('googleId');
    table.index('facebookId');
    table.index('email');
    table.index('username');
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
