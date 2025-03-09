# Marquita Base Template

> Base template for Marquita business websites - built with SvelteKit, optimized for GitHub Pages, and designed for AI-assisted management.

## Overview

This repository serves as the base template for all Marquita business website templates. It provides a foundation of common components, configurations, and utilities that are shared across different business-specific templates.

## Features

- Built with SvelteKit 2+ and Svelte 5
- Configured for static site generation with GitHub Pages deployment
- Multi-language support using svelte-i18n
- Mobile-responsive design with Tailwind CSS
- Configuration-driven approach for easy AI management
- Optimized CI/CD workflow via GitHub Actions

## Template Structure

```
marquita-base-template/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── src/
│   ├── app.css                 # Global CSS with Tailwind
│   ├── app.html                # HTML template
│   ├── lib/
│   │   ├── components/         # Reusable UI components
│   │   ├── config/             # Configuration management
│   │   ├── i18n/               # Internationalization
│   │   └── utils/              # Utility functions
│   └── routes/                 # SvelteKit routes
├── static/                     # Static assets
├── config/                     # AI-editable configuration files
│   ├── site.json              # Site metadata
│   ├── pages.json             # Page content
│   └── theme.json             # Theme customization
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## How to Use This Template

This base template is not intended to be used directly by end users. Instead:

1. Choose a specific business template (e-commerce, service business, portfolio, etc.)
2. Follow the setup guide in that template
3. Use AI assistance to customize for your needs

For template developers:

1. Use this as the foundation for creating specialized business templates
2. Extend with business-specific components and functionality
3. Maintain compatibility with the core configuration system

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

## Configuration System

The template uses a configuration-based approach with files located in the `config/` directory:

- `site.json` - Basic site information and settings
- `theme.json` - Visual customization options
- `pages.json` - Content for various pages
- `navigation.json` - Navigation structure

See each specialized template for additional configuration options.

## Customization Points

The template includes specific comments to guide AI-assisted customization:

```svelte
<!-- AI-EDIT-POINT: Hero Title -->
<h1 class="text-4xl font-bold">{hero.title}</h1>
```

These markers help AI agents identify key areas for modification.

## Learn More

For more information about the Marquita project:

- [Main Project Repository](https://github.com/iksnae/marquita)
- [Documentation](https://github.com/iksnae/marquita/tree/main/docs)
- [Template System](https://github.com/iksnae/marquita/blob/main/docs/template-system.md)

## License

This template is licensed under the MIT License - see the LICENSE file for details.