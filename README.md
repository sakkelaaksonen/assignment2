# Virta Senior Front-end Developer assignment 2

## About

This is a demo app and repo for Virta Senior Front-end Developer assignment 2. Application follows given guidelines and is built with Nextjs,Tailwind CSS and GraphQL and deployed to Vercel cloud servise (previously known as now.sh)

## Demo deployment

Visit
[https://assignment2-theta.vercel.app/](https://assignment2-theta.vercel.app/) with your browser.

- [https://assignment2-theta.vercel.app/](https://assignment2-theta.vercel.app/) -> list view
- [https://assignment2-theta.vercel.app/](https://assignment2-theta.vercel.app/stations/101) -> single station view

## Development instruction

These instructions assume you have 2020 level knowledge of JavaScript development and command tools.

Open your preferred command terminal or git client and clone the repo.

```bash
git clone https://github.com/sakkelaaksonen/assignment2

```

Install dependencies

```bash
npm install

```

Start dev server

```bash
npm run dev

```

Open [http://localhost:3000/](http://localhost:3000/) in your browser and browse away

## Application structure

Application is built using [Nextjs](https://nextjs.org/) and [Apollo GraphQL Server](https://www.apollographql.com/) and [TailwindCSS](https://tailwindcss.com/).

App is deployed to [Vercel cloud service](https://vercel.com/) via [GitHub repo](https://github.com/sakkelaaksonen/assignment2)

### Routes

- `/pages/api/graphql.js` GraphQL API entry point.

  Responds to `/api/graphql`

- `/pages/index.js` Index view. Lists all stations returned from API via GraphQL.

  Responds to `/(index.js)`

- `/pages/stations/[id].js` Single station view. Accessible directly or via browsing the index.

  Responds to `/stations/[id]`

- `next.config.js` contains redirection rules for missing parameters and blocked API routes

### GraphQL

- `/pages/api/queries/index.js` contains GraphQL queries for station list and single station by ID

- `/pages/api/schemas/index.js` contains GraphQL schemas for given API endpoints

- `/pages/api/resolvers/index.js` contains GraphQL resolvers for given API endpoints

### Stylesheets

- `/styles/tailwind.css` contains tailwind module imports and application specific css definitions

- `tailwind.config.js` contains tailwind configuration and purgeCSS globbing rules

- `postcss.config.js` configures tailwind as a plugin for NextJS postCSS pipeline

## Known caveats

- Because React hooks hide away asynchronicity, useRoute and useQuery do not resolve as expected, in order of appearence. Async race condition leads to missing router parameters in graphql queries and other temporal and scopic oddities. This can be migitated using server side rendering.

## Production preparation and scability notes

- Configure ESLint

- Add tests

- Add internationalization/dictionary module

- Add style preprocessor if required (stylus is my personal preference but anything goes)

- Check accessibility requirements

- Thorough assessment of meta content in views: viewport requirements, encodings, language configs etc.

- Analytics if required

- Convert images to svg for both development purposes and UX/UI scalability and payload optimization.

- React PropTypes

- TypeScript support

- PropTypes to TypeScript

## The following section is generated by create-next-app. Included in the repo for your convenience

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
