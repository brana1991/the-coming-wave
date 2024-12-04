# The Coming New Wave

## Overview

This repository contains the source code for **The Coming New Wave**, a web application built using vanilla JavaScript, HTML, and CSS. The project uses **Vite** for bundling and development purposes. The app is currently hosted on **Vercel** and will eventually be part of the larger **[Entropija.rs](https://entropija.rs)** platform. For now, it can be accessed at the subdomain: [demo/the-coming-new-wave](https://demo.entropija.rs/the-coming-new-wave).

## Features

- **Vanilla JS, HTML, CSS**: The project is lightweight and built without frameworks.
- **Vite**:
  - Bundles the project efficiently.
  - Provides a fast development experience.
- **Continuous Deployment**:
  - The GitHub repository is integrated with Vercel.
  - Pushing changes to the `main` branch triggers Vercel to automatically build and deploy the latest version.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brana1991/the-coming-wave.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

This command starts the local development server. Open your browser and go to [http://localhost:5173](http://localhost:5173) (default Vite port) to view the app.

### Build for Production

To create an optimized build:

```bash
npm run build
```

The build artifacts will be available in the `dist/` directory.

## Deployment

The app is deployed on [Vercel](https://vercel.com). The `main` branch is connected to Vercel, and any changes pushed to this branch will automatically trigger a new build and deployment.

To deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist/` directory to Vercel.

## Roadmap

- Integrate into the main **Entropija.rs** platform.
- Expand the feature set and improve the user experience.
- Optimize for performance and accessibility.
