## Local Docker Compose Environment

The project provides a Docker Compose setup to run the SaaS platform locally with multiple containers.

The backend is a Spring Boot REST API running in its own container.
The frontend is an Angular application built as static assets and served by Nginx.
Both services communicate through a dedicated Docker bridge network.

This setup simulates a production-like architecture while remaining simple for local development.

## PostgreSQL Integration with Docker Compose

The local Docker Compose environment includes a PostgreSQL database container with a persistent Docker volume.

The Spring Boot backend receives its database configuration through environment variables, which allows the same application image to run with different database backends depending on the environment.

A healthcheck is configured on PostgreSQL to ensure that the backend starts only when the database is ready to accept connections.

## Environment Variables

The project uses environment variables to externalize configuration from the Docker Compose file.

A `.env.example` file is provided to document all required variables without exposing sensitive credentials.
The real `.env` file is ignored by Git and used only for local development.

## Production-like Docker Compose

The project provides a production-like Docker Compose file that runs the application using Docker images published to GitHub Container Registry.

Unlike the local development Compose file, `docker-compose.prod.yml` does not build images locally. It pulls pre-built and versioned images from GHCR, which simulates a real deployment workflow.

```bash
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up
