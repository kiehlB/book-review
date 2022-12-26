import './env';
import app from './app';
import { AppDataSource } from './database';

const { PORT } = process.env;

console.log(PORT);
AppDataSource.initialize().then(database => {
  app.listen(PORT, () => {
    process.send?.('ready');
  });

  process.on('SIGINT', function () {
    process.exit(0);
  });
});
