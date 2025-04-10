# OpenData Uganda Website

This is the website for OpenData Uganda, built using [Hugo](https://gohugo.io/) static site generator.

## Prerequisites

- Hugo v0.145.0 or later
- Node.js (for asset processing)

## Development

1. Clone the repository:

```bash
git clone <repository-url>
cd web
```

2. Start the Hugo development server:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313`

## Project Structure

```bash
.
├── content/        # Website content
├── static/         # Static files
├── themes/opu/     # Custom theme
└── hugo.toml       # Site configuration
```

## Building

To build the site for production:

```bash
hugo --minify
```

The built site will be in the `public/` directory.

## Theme

This site uses a custom theme called "opu" located in the `themes/opu/` directory.
