hosted at https://jax-tech-test.vercel.app/

## MOOT front-end tech test

### Creating your own copy of this repository

Clone this repo or download the ZIP to your local machine.

If you choose to clone, use the following command in your terminal:

```bash
git clone https://github.com/klmoot/fe-tech-test.git
```

After cloning, update the [remote repository URL](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url) to host the project on your personal GitHub account.

**Note:** It's best to avoid forking this repository directly as it may link your final solution to this repo.

Alternatively, you can import this repository directly to your GitHub account using [GitHub's import tool](https://github.com/new/import). In the **Your old repository’s clone URL** field, enter: https://github.com/klmoot/fe-tech-test.git, set the repo details, then hit begin import.

### Getting started

On your local machine, navigate into the project directory and install dependencies:

```bash
npm install
```

Run the Next.js development server:

```bash
npm run dev
```

The server should be available on: [http://localhost:3000](http://localhost:3000).

The first page of the app contains further instructions. Good luck!

#### Other useful Next.js commands

Production build (catches production build errors):

```bash
npm run build
```

Local production preview:

```bash
npm run preview
```

Moot FE Tech Test
The aim of this test is to introduce you to the front-end stack we're currently using at MOOT. This should also give you a taste of visualising API data using React and Victory.

Please find the success criteria along with useful links and CLI commands below for reference.

We'd like to see your changes in either a public GitHub repo or a private repo with klmoot added as a collaborator. Ideally we'd like to see multiple commits as you work through the task.

Please send us the link to your Github repo when you're happy to share.

Bonus: Host your solution using a free (hobby) Vercel account and add your URL to the readme.

Success Criteria
Feel free to time limit this task as needed – we suggest around 2 hours maximum.

We'd like you to add a new Victory chart on the /my-awesome-chart route. Here's a reference image if useful.
For time-series data, please use the following JSON data source which contains GBP to USD exchange rates from January 2023:
https://api.frankfurter.app/2023-01-01..2023-01-31?from=GBP&to=USD
Using 31 days of historical data from January 2023, let's plot this data on a chart with the date being on the x-axis.
We'll request this API data from the my-awesome-chart/page.tsx server component – worth checking the docs at this point if new to Next.js 13.4+.
Hint: When you have the time-series data , you may need to transform it into a different format for VictoryLine to work correctly.

          {
            x: "date"
            y: value
          }

Create a new chart component which we'll use as container.
Important: This will need to be a client component for Victory to work correctly (search for "use client" in the Next.js docs). Pass the data to the chart component via props.
Import Victory in the chart component (Victory is already installed in the project) and use the VictoryLine chart type, and label the axes accordingly.
Let's add a second line so we can compare our 2023 GBP to USD exchange rates to the same time period 10 years ago:
https://api.frankfurter.app/2013-01-01..2013-01-31?from=GBP&to=USD
Request this data as you did previously, and pass it into your chart component.

If you have time, you're welcome to style the chart to your liking and add any additional Victory features like tooltips, a legend, line animations etc, but this is not required.
Useful links
You may wish to familarise yourself with the following:

Next.js app router docs
Next.js server and client components docs
Victory chart docs
Tailwind v3.x docs
shadcn/ui Component library
Frankfurter (currency exchange) API docs
Available CLI Commands
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run format:check
npm run format:write
npm run typecheck
MOOT
