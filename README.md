# MEAN Stack Application Deployment Assignment

**Containerization, Cloud Deployment & CI/CD Implementation**  

---

## 📌 Table of Contents
- [Repository Setup](#repository-setup)  
- [Deployment on Ubuntu VM](#deployment-on-ubuntu-vm)  
- [Database Setup](#database-setup)  
- [CI/CD Pipeline](#cicd-pipeline)  
- [Nginx Reverse Proxy](#nginx-reverse-proxy)  
- [Screenshots Overview](#screenshots-overview)  
- [Conclusion](#conclusion)  

---

## 🗂 Repository Setup ✅

- Created a new GitHub repository: `crud-dd-task-mean-app`  
- Pushed complete application code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SUHEL782/crud-dd-task-mean-app
git push -u origin main
Status:

Screenshot:

☁ Deployment on Ubuntu VM ✅
Created an Ubuntu VM on GCP/ Azure.

Installed Docker and Docker Compose:

sudo apt update
sudo apt install docker.io docker-compose -y
sudo systemctl enable docker
sudo systemctl start docker
Deployed application using Docker Compose:

docker-compose up -d
Status:

Screenshot:

🗄 Database Setup ✅
Using MongoDB Docker image with persistent volume:
# Please see all file 
services:
  mongo:
    image: mongo:6
    volumes:
      - mongo-data:/data/db
Status:

Screenshot:

🔄 CI/CD Pipeline ✅
Configured GitHub Actions to:

Build updated Docker images for backend and frontend on code push

Push Docker images to Docker Hub

Automatically pull latest images and restart containers on the VM

Status:

Screenshot:

🌐 Nginx Reverse Proxy ✅
Frontend requests routed to Angular application

/api/ requests routed to backend API




