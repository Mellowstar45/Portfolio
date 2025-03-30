# My Portfolio

## Description

Hi! Welcome to the repository of my Portfolio

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: latest LTS version)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/Mellowstar45/Portfolio.git
cd repo

# Install dependencies (choose one)
npm install
yarn install
```

## Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

```env
SECRET_KEY=secret key for Email sending
NEXT_PUBLIC_SUPABASE_URL=Supabase url
NEXT_PUBLIC_SUPABASE_ANON_KEY=Database Anon key
```

To Get the Supabase ANON KEY and URL you will need to create your own database in Supabase to get your own.
Unfortunately the secret key for the Email Sending is private so you won't be able to use the email functionality yourself

## Running the Development Server

To start the development server, run:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at http://localhost:3000.

## Deployment

### Vercel Deployment

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out this [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Vercel also has a built-in Monitoring of your Website.

## Supabase Database Setup

To set up the database for your portfolio, you need to import the necessary table into your Supabase project.

Go to Supabase, create a new project (or use an existing one).

Once your project is created, navigate to the SQL editor.

Upload or copy the contents of the file Projects-rows.sql (found in the repository) into the SQL editor.

Run the SQL query to create the necessary tables and rows.

## Project Structure

```bash
/
├── public/          # Static assets
├── app/components/      # React components
├── globals.css    # Global CSS
├── app/utils/          # Utility functions
├── app/hooks/          # Custom React hooks
├── .env      # Environment variables
├── next.config.js   # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
├── vitest.config.ts   # Vitest configuration
├── vitest.setup.ts    # Vitest setup file
└── package.json     # Dependencies and scripts
```

## Testing

This project uses Vitest for unit testing both frontend and backend code. To run the tests:

```bash
# Using npm
npm run test

# Using yarn
yarn test
```

## Additional Notes

- Ensure `.env` is not committed to version control.
- Use `npm run lint` or `yarn lint` to check for linting issues.
