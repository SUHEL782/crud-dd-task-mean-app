# MEAN Stack Application Deployment Assignment

**Containerization, Cloud Deployment & CI/CD Implementation**

---

## Table of Contents
- [Repository Setup](#repository-setup)  
- [Deployment on Ubuntu VM](#deployment-on-ubuntu-vm)  
- [Database Setup](#database-setup)  
- [CI/CD Pipeline](#cicd-pipeline)  
- [Nginx Reverse Proxy](#nginx-reverse-proxy)  
- [Screenshots Overview](#screenshots-overview)  
- [Conclusion](#conclusion)  

---

## Repository Setup

1. Create a new GitHub repository for this project.  
2. Push the complete application code:


git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:USERNAME/crud-dd-task-mean-app.git
git push -u origin main
Screenshot:

Deployment on Ubuntu VM
Set up a new Ubuntu VM on AWS, Azure, or any preferred cloud provider.

Install Docker and Docker Compose:

bash
Copy
Edit
sudo apt update
sudo apt install docker.io docker-compose -y
sudo systemctl enable docker
sudo systemctl start docker
Deploy the application using Docker Compose:

bash
Copy
Edit
docker-compose up -d
Screenshot:

Database Setup
Using MongoDB Docker image with persistent volume for data storage:

yaml
Copy
Edit
services:
  mongo:
    image: mongo:6
    volumes:
      - mongo-data:/data/db
Screenshot:

CI/CD Pipeline
Configured GitHub Actions to:

Build updated Docker images for backend and frontend when changes are pushed.

Push Docker images to Docker Hub.

Automatically pull the latest images and restart containers on the VM.

Screenshot:

Nginx Reverse Proxy
Frontend requests routed to Angular application.

/api/ requests routed to backend API.

Screenshot:

Screenshots Overview
Step	Screenshot
GitHub Repository Push	View
Docker Compose Deployment	View
MongoDB Setup	View
CI/CD Pipeline Execution	View
Nginx Reverse Proxy	View
