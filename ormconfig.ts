export default {
   "type": process.env.TYPE_DATABASE,
   "host": process.env.HOST_DATABASE,
   "port": process.env.PORT_DATABASE,
   "username": process.env.USER_DATABASE,
   "password": process.env.PASSWORD_DATABASE,
   "database": process.env.DATABASE,
   "logging": false,
   "entities": [
      "src/app/models/*.ts"
   ],
   "migrations": [
      "src/database/migrations/*.ts"
   ],
   "cli": {
      "migrationsDir": "src/database/migrations"
   }
}