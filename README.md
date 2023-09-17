### SimpliMuv Fullstack challenge

[Live APP](https://simplimuv.joxpulp.com/)

## Local Setup:

- Clone the project

```bash
  git clone https://github.com/joxpulp/challenge-simpli-frontend.git
```

- Install packages using:

```bash
npm i
```

- To start the app, run the development server:

```bash
npm run dev
```

- To build the app:

```bash
npm run build
```

- To start the app:

```bash
npm run start
```

- There is an .env.sample file, containing the environment variable to interact with the API:
- This project uses Typescript, NextJS, ESLint, Prettier, Formik, Yup, Axios, Husky and Lint-staged
- Husky and lint-staged are used to run ESLint and prettier with a pre-commit hook, if there is an actual error the commit is aborted.
- This project uses SSR as a rendering strategy

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
