## Interview AI

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
<img width="1134" alt="InterviewAI-v1" src="https://github.com/TaylorBeck/interview-ai/assets/1897307/c11e6d85-34f7-405d-a3b0-757ec2376ce3">
