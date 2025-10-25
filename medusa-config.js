const { defineConfig } = require("@medusajs/framework/utils");
require("dotenv").config();

const {
  DATABASE_URL,
  STORE_CORS,
  ADMIN_CORS,
  AUTH_CORS,
  JWT_SECRET,
  COOKIE_SECRET,
  REDIS_URL,
} = process.env;

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: DATABASE_URL,
    redisUrl: REDIS_URL, // <-- Add this
    http: {
      storeCors: STORE_CORS || "*",
      adminCors: ADMIN_CORS || "*",
      authCors: AUTH_CORS || "*",
      jwtSecret: JWT_SECRET || "supersecret",
      cookieSecret: COOKIE_SECRET || "supersecret",
    },
  },
});
