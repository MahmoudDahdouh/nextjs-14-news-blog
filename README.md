# News App

News App built with [Next.js 14](https://nextjs.org/), using [Current API](https://currentsapi.services/en) to fetch news articles. The application uses [Tailwind CSS](https://tailwindcss.com/) for styling, [Shadcn](https://ui.shadcn.com/) components, and TypeScript.

## Features

- Fetches news articles from an external API
- Responsive design using Tailwind CSS
- Type-safe development with TypeScript
- Shadcn components for a polished UI

## Getting Started

**1. Clone the repository:**

```bash
git clone https://github.com/MahmoudDahdouh/nextjs-14-news-blog.git
cd nextjs-14-news-blog
```

**2. Install dependencies:**

Using npm:

```bash
npm install
```

**3. Setup environment variables:**

Create a `.env.local` file in the root directory and add your API key:

```js
API_KEY= // API_KEY from https://currentsapi.services/en
BASE_URL= // https://api.currentsapi.services/v1/
```

**4. Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

src/

- **app/** - Contains the Next.js pages
- **components/** - Contains the Next.js pages
- **config/** - Contains config of `axios` package
- **lib/** - Contains utils

## Demo

Live Demo link [here](https://nextjs-14-news-blog.vercel.app/)

##

Happy coding!
