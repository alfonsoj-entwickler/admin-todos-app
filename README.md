# Development
Steps to lift the app under development


1. Database set up
```
docker compose up -d
```

2. Rename the .env.template to .env
3. Replace the environment variables
4. Execute SEED to [crear la base de datos local](localhost:3000/api/seed)

## Note: Default User
__user:__ test@colnet.com
__password:__ 1234567


# Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
