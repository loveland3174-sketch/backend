// medusa-config.js
// Load environment variables
const env = process.env.NODE_ENV || "development";
loadEnv(env, process.cwd());

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
    databaseUrl: DATABASE_URL, // <-- Supabase pooler URL from env
    http: {
      storeCors: STORE_CORS || "*",
      adminCors: ADMIN_CORS || "*",
      authCors: AUTH_CORS || "*",
      jwtSecret: JWT_SECRET || "supersecret",
      cookieSecret: COOKIE_SECRET || "supersecret",
    },
  },
});





// import { loadEnv, defineConfig } from '@medusajs/framework/utils'

// loadEnv(process.env.NODE_ENV || 'development', process.cwd())

// module.exports = defineConfig({
//   projectConfig: {
//     databaseUrl: process.env.DATABASE_URL,
//     http: {
//       storeCors: process.env.STORE_CORS!,
//       adminCors: process.env.ADMIN_CORS!,
//       authCors: process.env.AUTH_CORS!,
//       jwtSecret: process.env.JWT_SECRET || "supersecret",
//       cookieSecret: process.env.COOKIE_SECRET || "supersecret",
//     }
//   }
// })
