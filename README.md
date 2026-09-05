# Eusef Karl Blancada Portfolio

Personal portfolio of me, Eusef Karl Blancada, a Computer Science student and aspiring software developer.

## Features

- Responsive monochrome portfolio design
- Home introduction with profile image and social links
- Proficiencies and skills section
- Tuon Ta project card with a static website preview
- Technology tags for projects
- Contact form that opens a prefilled email draft
- Custom `Eu` browser favicon
- Keyboard focus states and reduced-motion support

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- React Icons

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
src/
	components/
		About.tsx
		Contact.tsx
		Footer.tsx
		Home.tsx
		Navbar.tsx
		Projects.tsx
	assets/
	App.tsx
	index.css
	main.tsx
public/
	favicon-mono.svg
	tuonta-preview.png
```

## Contact Form

The contact form uses a `mailto:` flow. Submitting the form opens the visitor's default email client with the recipient, subject, name, email, and message prefilled.

## Deployment

Build the project with:

```bash
npm run build
```

The generated `dist/` directory can be deployed to any static hosting provider, including Vercel, Netlify, or GitHub Pages.
