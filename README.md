# Introduction
I recently worked on a client project to build an interactive and responsive frontend UI for an intelligent quoting app, as part of my day job. Unfortunately, I couldn't share the project or continue working on it after leaving the company, so I decided to build something using the same tech stack, tools and libraries! This would allow me to get more practice with these, as 3/5 were new to me when I built the client project.

Tech stack for previous client project: React, TypeScript, Tailwind CSS, zod, and shadcn/ui.

Tech stack for this project: [Next.js](https://nextjs.org/), TypeScript, Tailwind CSS, zod, and shadcn/ui.

I've used Next.js instead of React in case I want to deploy this project and take it further than just being a dev frontend UI 🙃

## Functionality
Using this app, users can:
- Navigate to the 'Home', 'Quiz', 'Dashboard' or 'Sign up' pages (or trigger the 'Login' pop-up) using the nav bar
- Fill out a Quiz (react hook forms, zod, shadcn), and submit their answers, then view their scores on the Dashboard page (shadcn)
- View a Dashboard populated with dummy data if they haven't filled out the quiz (shadcn)
- Fill out a pop-up 'Login' form (react hook forms, zod, shadcn)
- Fill out a 'Sign Up' form (react hook forms, zod, shadcn)

## Getting Started

Dev mode:
1. Fork and clone this repo
2. ``cd`` into the form-validation-app directory
3. Run ``npm install``
4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Production app:
1. There's a production version of the site hosted on Vercel [here](https://form-validation-app-iota.vercel.app/).

