import { DataSource } from "typeorm"

const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DBHOST,
  port: 5432,
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
  entities: ["src/apps/user/models.ts", "src/apps/student/models.ts"],
  logging: true,
  synchronize: true,

})

export { myDataSource }