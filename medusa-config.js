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
  PORT,
} = process.env;

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: DATABASE_URL,
    // Only set Redis if REDIS_URL exists
    redisUrl: REDIS_URL && REDIS_URL.length > 0 ? REDIS_URL : undefined,
    port: PORT || 9000, // Ensures Render detects the open port
    http: {
      storeCors: STORE_CORS || "*",
      adminCors: ADMIN_CORS || "*",
      authCors: AUTH_CORS || "*",
      jwtSecret: JWT_SECRET || "supersecret",
      cookieSecret: COOKIE_SECRET || "supersecret",
    },
  },
  plugins: [],
});


// const { defineConfig } = require("@medusajs/framework/utils");
// require("dotenv").config();

// const {
//   DATABASE_URL,
//   STORE_CORS,
//   ADMIN_CORS,
//   AUTH_CORS,
//   JWT_SECRET,
//   COOKIE_SECRET,
//   REDIS_URL,
//   PORT,
// } = process.env;

// module.exports = defineConfig({
//   projectConfig: {
//     databaseUrl: DATABASE_URL,
//     redisUrl: REDIS_URL,
//     port: PORT || 9000, // Ensures Render detects the open port
//     http: {
//       storeCors: STORE_CORS || "*",
//       adminCors: ADMIN_CORS || "*",
//       authCors: AUTH_CORS || "*",
//       jwtSecret: JWT_SECRET || "supersecret",
//       cookieSecret: COOKIE_SECRET || "supersecret",
//     },
//   },
//   plugins: [],
// });
