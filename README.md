# Lumina E-Commerce (Simple E-Commerce)

This repository contains the source code for the Lumina E-Commerce application, a simple e-commerce project built with Node.js and Express.

## Project Structure

- `frontend/`: Contains the Express.js application serving the frontend.
- `e2e/`: Contains end-to-end (E2E) tests written using Playwright.
- `.github/workflows/`: Contains the continuous integration (CI) pipeline configuration for GitHub Actions.
- `Dockerfile`: A Dockerfile to containerize the application.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [Docker](https://www.docker.com/) (optional, for running in a container)

### Running the Frontend Locally

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   PORT=3001 npm start
   ```

### Running End-to-End Tests

The project uses Playwright for E2E testing. 

1. Navigate to the `e2e/` directory:
   ```bash
   cd e2e
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the tests:
   ```bash
   npm test
   ```

### Docker

You can also build and run the application using Docker:

1. Build the Docker image from the root directory:
   ```bash
   docker build -t simple-ecommerce .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3001:3001 simple-ecommerce
   ```

## CI/CD Pipeline
This project is equipped with a GitHub Actions CI pipeline (`ci-pipeline.yml`) that triggers on pull requests to the `main` or `staging` branches. It checks out the code, sets up Node.js, installs dependencies, and runs the configured tests.
