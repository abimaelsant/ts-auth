import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Successfully conected with database')); //pega as informações de conexão do ormconfig.ts