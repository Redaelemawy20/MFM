This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

This project uses Node Version Manager (NVM) to manage Node.js versions. Make sure you have NVM installed on your system:

### Windows

1. Install NVM for Windows from [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
2. After installation, restart your terminal

### macOS/Linux

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

### Database Setup

1. Make sure you have MySQL installed and running
2. Create a `.env` file in the root directory with your database connection string:

```env
DATABASE_URL="mysql://user:password@localhost:3306/mfm"
```

## Getting Started

1. Install and use the correct Node.js version:

```bash
npm run setup
```

2. Set up the database:

```bash
# For first-time setup or when you need to reset the database
npm run db:reset

# For normal development (applies pending migrations)
npm run db:setup

# To seed the database with initial data
npm run db:seed
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Database Commands

- `npm run db:setup` - Generates Prisma client and applies migrations
- `npm run db:reset` - Resets the database (drops all tables and reapplies migrations)
- `npm run db:seed` - Seeds the database with initial data
- `npm run db:dev` - Creates a new migration during development

## Quick Start

For a complete setup including database initialization, run:

```bash
npm run setup:full
```
