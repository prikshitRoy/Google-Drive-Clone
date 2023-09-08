# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

# Check

roy@ROY:~/Desktop/Video Tutorial/Web App/Google Drive Clone/google-drive-clone$🔥yarn create t3-app .
yarn create v1.22.19
warning package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "create-t3-app > @ianvs/prettier-plugin-sort-imports@4.1.0" has unmet peer dependency "prettier@2 || 3".
[4/4] Building fresh packages...

success Installed "create-t3-app@7.19.0" with binaries: - create-t3-app

---

/ **| \_ \ **| / \_ _| \_\_| |_ _|\_\_ / / \ | _ \ _ \
 | (\_\_| / _| / /\ \| | | _| | | |_ \ / /\ \| _/ _/
\_**|_|_\_**|\_/‾‾\_\_| |**_| |_| |\_**/ /_/‾‾\_\_| |_|

? Will you be using TypeScript or JavaScript? TypeScript
Good choice! Using TypeScript!
? Which packages would you like to enable? nextAuth, prisma, tailwind
? Initialize a new git repository? Yes
Nice one! Initializing repository!
? Would you like us to run 'yarn'? Yes
Alright. We'll install the dependencies for you!
? What import alias would you like configured? @

Using: yarn

✔ App scaffolded successfully!

Adding boilerplate...
✔ Successfully setup boilerplate for nextAuth
✔ Successfully setup boilerplate for prisma
✔ Successfully setup boilerplate for tailwind
✔ Successfully setup boilerplate for envVariables

Installing dependencies...
⠹
✔ Generated Prisma Client (v5.2.0) to ./node_modules/@prisma/client in 1.76s
Start using Prisma Client in Node.js (See: https://pris.ly/d/client)
✔ Successfully installed dependencies!

Initializing Git...
✔ Successfully initialized and staged git

Next steps:
yarn prisma db push
yarn dev
git commit -m "initial commit"
Done in 986.41s.

# Installing DaisyUI

npm i -D daisyui@latest

# yarn prisma db push

roy@ROY:~/Desktop/Video Tutorial/Web App/Google Drive Clone/google-drive-clone$🔥yarn prisma db push
yarn run v1.22.19
warning ../../../../../package.json: No license field
$ '/home/roy/Desktop/Video Tutorial/Web App/Google Drive Clone/google-drive-clone/node_modules/.bin/prisma' db push
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "db.sqlite" at "file:./db.sqlite"

SQLite database db.sqlite created at file:./db.sqlite

🚀 Your database is now in sync with your Prisma schema. Done in 5.05s

✔ Generated Prisma Client (v5.2.0) to ./node_modules/@prisma/client in 471ms
