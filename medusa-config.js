const { defineConfig } = require("@medusajs/framework/utils");
require("dotenv").config(); // <-- load .env variables

const {
  DATABASE_URL,
  STORE_CORS,
  ADMIN_CORS,
  AUTH_CORS,
  JWT_SECRET,
  COOKIE_SECRET,
} = process.env;

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: DATABASE_URL, // Supabase pooler URL from .env
    http: {
      storeCors: STORE_CORS || "*",
      adminCors: ADMIN_CORS || "*",
      authCors: AUTH_CORS || "*",
      jwtSecret: JWT_SECRET || "supersecret",
      cookieSecret: COOKIE_SECRET || "supersecret",
    },
  },
});
