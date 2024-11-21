import { Knex } from 'knex';
 
export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('User', (table) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.string('name', 32).notNullable().unique();
      table.string('email', 128).notNullable().unique();
    })
    .createTable('Config', (table) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.specificType('user_id', 'CHAR(16)').unique();
      table.string('api_key', 64).notNullable();
      table
        .foreign('user_id')
        .references('User.id')
        .deferrable('deferred');
    })
    .createTable('Account', (table) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.specificType('user_id', 'CHAR(16)').unique();
      table.string('provider', 64).notNullable();
      table.string('type', 256).notNullable();
      table.string('refresh_token', 256).notNullable();
      table.string('access_token', 256).notNullable();
      table.timestamp('expires_at').notNullable();
      table.string('token_type', 256).notNullable();
      table
        .foreign('user_id')
        .references('User.id')
        .deferrable('deferred');
    })
    .createTable('Domain', (table) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.specificType('user_id', 'CHAR(16)');
      table.string('name', 64).notNullable();
      table
        .foreign('user_id')
        .references('User.id')
        .deferrable('deferred');
    })
    .createTable('Collection', (table) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.specificType('user_id', 'CHAR(16)').notNullable();
      table.string('name', 64).notNullable();
      table
        .foreign('user_id')
        .references('User.id')
        .deferrable('deferred');
    })
    .createTable('Url', (table) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.specificType('domain_id', 'CHAR(16)').notNullable();
      table.specificType('collection_id', 'CHAR(16)').notNullable();
      table.text('name').notNullable();
      table
        .foreign('domain_id')
        .references('Domain.id')
        .deferrable('deferred');
      table
        .foreign('collection_id')
        .references('Collection.id')
        .deferrable('deferred');
    })
    .createTable('History', (table) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.specificType('url_id', 'CHAR(16)');
      table.integer('performance').notNullable();
      table.integer('accessibility').notNullable();
      table.integer('best_practices').notNullable();
      table.integer('seo').notNullable();
      table.json('core_vitals').notNullable();
      table.timestamp('created_at').notNullable();
      table
        .foreign('url_id')
        .references('Url.id')
        .deferrable('deferred');
    })
}
 
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('User').dropTable('Account').dropTable('Config').dropTable('Domain').dropTable('Url').dropTable('Collection').dropTable('History')
}