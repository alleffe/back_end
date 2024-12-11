import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + "/../models/*.ts"],
  synchronize: false,
  logging: true,
});

AppDataSource.initialize()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection failed:", err));

export default AppDataSource;
