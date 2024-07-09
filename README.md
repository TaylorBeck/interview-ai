## Interview Hub

1. `npm install`, then create `drizzle.config.ts` using Postgres
```js
/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'YOUR_DB_URL',
  }
};
```
2. Create `.env.local`, then `npm run dev`
```
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_DATABASE_URL="YOUR_DB_URL"

NEXT_PUBLIC_GEMINI_API_KEY=
```
