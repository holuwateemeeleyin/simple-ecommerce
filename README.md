# Lumina E-Commerce (Simple E-Commerce) with AWS

This repository contains the source code for the Lumina E-Commerce application, a simple e-commerce project built with Node.js and Express.

## Project Structure

- `frontend/`: Contains the Express.js application serving the frontend.
- `e2e/`: Contains end-to-end (E2E) tests written using Playwright.
- `.github/workflows/`: Contains the continuous integration (CI) and continuous deployment (CD) pipeline configurations for GitHub Actions.
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
This project is equipped with GitHub Actions workflows for both CI and CD:
- **CI Pipeline (`ci-pipeline.yml`)**: Triggers on pull requests to the `main` or `staging` branches. It checks out the code, sets up Node.js, installs dependencies, and runs the configured tests.
- **CD Pipeline (`cd-pipeline.yml`)**: Triggers on pushes to the `staging` branch or when published. It runs the automated tests, builds the Docker image, and explicitly pushes the latest image container to Docker Hub securely relying on GitHub Secrets.


## Data Visualization (Grafana)

This project uses Prometheus and Grafana for comprehensive system monitoring, orchestrated via Docker Compose.

### Starting the Monitoring Stack
1. **Boot up the containers**:
   ```bash
   docker-compose up --build
   ```
2. **Access the services**:
   - **Frontend**: [http://localhost:3001](http://localhost:3001)
   - **Prometheus** (Metrics collector): [http://localhost:9090](http://localhost:9090)
   - **Grafana** (Visualization dashboard): [http://localhost:3000](http://localhost:3000) (Login: `admin` / `admin`)

### Setting up Graphs in Grafana
1. Log into Grafana and go to **Connections > Data Sources**.
2. Click **Add data source** and select **Prometheus**.
3. In the **URL** field, enter `http://prometheus:9090`, then click **Save & test**.
4. Go to **Dashboards > Import** (from the left menu).
5. Type `11159` into the "Import via grafana.com" field and click **Load**.
6. Select your Prometheus data source at the bottom and click **Import** to start visualizing your Node.js performance metrics!
