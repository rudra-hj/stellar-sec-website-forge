# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/27bd8d6f-7bda-43f8-8801-92370feaf556

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/27bd8d6f-7bda-43f8-8801-92370feaf556) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Adding a New Project to the Carousel

To add a new project to the carousel, follow these steps:

1. Create a new file in `src/data/projects/` (e.g., `my-project.ts`)
2. Use this template for your project:

```typescript
import { EntrepreneurialProject } from "@/types/project";

const myProject: EntrepreneurialProject = {
  title: "Project Title",
  description: "Short project description that appears on the card",
  image: "/images/projets/my-project.png", // Place image in public/images/projets/
  tags: ["Tag1", "Tag2"],
  link: "https://project-url.com", // Optional
  content: {
    about: "Detailed description of the project",
    challenges: "Challenges faced during development", // Optional
    impact: "Project impact and results", // Optional
    keyDates: [ // Optional
      {
        date: "MM/YYYY",
        title: "Milestone Title",
        description: "Milestone description"
      }
    ]
  }
};

export default myProject;
```

3. Add your project image to `public/images/projets/`
4. Import and add your project in `src/data/projects/index.ts`:

```typescript
import myProject from "./my-project";

export const projects = [
  // ... existing projects
  myProject
];
```

## Customizing the Logo

To change the site logo:

1. Place your SVG logo in the `public` directory as `logo.svg`
2. The logo will automatically be used in the navbar

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/27bd8d6f-7bda-43f8-8801-92370feaf556) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)