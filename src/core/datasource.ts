import { DataSource } from "typeorm"

//postgres://tfcfizcq:G7Jhzw9vy9Lss5eBmnGbeTqlngjqjCO5@kesavan.db.elephantsql.com/tfcfizcq

const myDataSource = new DataSource({
  type: "postgres",
  host: "kesavan.db.elephantsql.com",
  port: 5432,
  username: "tfcfizcq",
  password: "G7Jhzw9vy9Lss5eBmnGbeTqlngjqjCO5",
  database: "tfcfizcq",
  entities: ["src/apps/user/models.ts", "src/apps/student/models.ts"],
  logging: true,
  synchronize: true,
})

export { myDataSource }