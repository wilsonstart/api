module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'startv1'),
        username: env('DATABASE_USERNAME', 'start'),
        password: env('DATABASE_PASSWORD', 'start123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
