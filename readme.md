## Local Docker Compose Environment

The project provides a Docker Compose setup to run the SaaS platform locally with multiple containers.

The backend is a Spring Boot REST API running in its own container.
The frontend is an Angular application built as static assets and served by Nginx.
Both services communicate through a dedicated Docker bridge network.

This setup simulates a production-like architecture while remaining simple for local development.