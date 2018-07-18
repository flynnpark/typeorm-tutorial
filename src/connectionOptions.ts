import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'typeorm_tutorial',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/**.*'],
  migrations: ['src/migrations/**/*.*'],
  subscribers: ['src/subscribers/**/*.*'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers'
  }
};

export default connectionOptions;
