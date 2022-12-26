import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const port = parseInt(process.env.DB_PORT);

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/users/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
