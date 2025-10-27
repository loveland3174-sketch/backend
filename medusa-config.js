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
    databaseType: "postgres", // ✅ Required for Supabase/Postgres
    redisUrl: REDIS_URL || undefined,
    eventBusStrategy: "redis", // ✅ Required for Render Redis event processing
    port: PORT || 9000,
    http: {
      storeCors: STORE_CORS || "*",
      adminCors: ADMIN_CORS || "*",
      authCors: AUTH_CORS || "*",
      jwtSecret: JWT_SECRET || "supersecret",
      cookieSecret: COOKIE_SECRET || "supersecret",
    },
  },

  admin: {
    disable: true, // ✅ No Admin UI inside backend build
  },

  // ✅ Modules optimized for Render
  modules: {
    eventBus: {
      resolve: "@medusajs/event-bus-redis",
      options: {
        redisUrl: REDIS_URL,
      },
    },
    cache: {
      resolve: "@medusajs/cache-redis",
      options: {
        redisUrl: REDIS_URL,
      },
    },
  },

  plugins: [], // ✅ clean & lightweight
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
