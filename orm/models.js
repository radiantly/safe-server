import { Sequelize, DataTypes } from "sequelize";

// Setup the database connection
let sequelize;
try {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_TYPE,
    }
  );
  await sequelize.authenticate();
} catch {
  console.log("Falling back to in-memory sqlite.");
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
  });
}

// Define the "Server" model
export const Server = sequelize.define(
  "Server",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

sequelize.sync({ force: process.env.RECREATE === "true" }).then(() => {
  console.log("Database & tables created!");
});
