/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:Cg3u5bMhpStL@ep-dark-surf-a552hrbi.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };