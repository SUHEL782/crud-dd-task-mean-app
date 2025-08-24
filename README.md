<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MEAN Stack Application Deployment Assignment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
            color: #333;
        }
        h1, h2, h3 {
            color: #1a73e8;
        }
        pre {
            background-color: #eee;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        img {
            max-width: 100%;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        table, th, td {
            border: 1px solid #aaa;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        a {
            color: #1a73e8;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        hr {
            margin: 30px 0;
            border: none;
            border-top: 1px solid #ccc;
        }
    </style>
</head>
<body>

<h1>MEAN Stack Application Deployment Assignment</h1>

<h2>Project Overview</h2>
<p>This project is a full-stack MEAN (MongoDB, Express, Angular, Node.js) application.<br>
The goal is to containerize the application, deploy it on a cloud VM using Docker Compose, and implement CI/CD using GitHub Actions.</p>

<p><strong>Repository:</strong> <a href="YOUR_REPO_LINK_HERE">GitHub Repository Link</a><br>
<strong>Docker Hub:</strong> Images for frontend and backend are pushed to Docker Hub.</p>

<hr>

<h2>Table of Contents</h2>
<ol>
    <li><a href="#repository-setup">Repository Setup</a></li>
    <li><a href="#deployment-on-ubuntu-vm">Deployment on Ubuntu VM</a></li>
    <li><a href="#database-setup">Database Setup</a></li>
    <li><a href="#cicd-pipeline">CI/CD Pipeline</a></li>
    <li><a href="#nginx-reverse-proxy">Nginx Reverse Proxy</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
</ol>

<hr>

<h2 id="repository-setup">Repository Setup</h2>
<p>Created a new GitHub repository and pushed the complete application code:</p>

<pre>
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:USERNAME/repo.git
git push -u origin main
</pre>

<p><strong>Screenshot:</strong></p>
<img src="https://via.placeholder.com/600x300.png?text=GitHub+Repo+Push" alt="GitHub Repo Push">

<hr>

<h2 id="deployment-on-ubuntu-vm">Deployment on Ubuntu VM</h2>
<ol>
    <li>Created an Ubuntu VM on AWS (or preferred cloud).</li>
    <li>Installed Docker and Docker Compose.</li>
    <li>Deployed the application using Docker Compose.</li>
</ol>

<p><strong>Screenshot:</strong></p>
<img src="https://via.placeholder.com/600x300.png?text=Docker+Compose+Deployment" alt="Docker Compose Deployment">

<hr>

<h2 id="database-setup">Database Setup</h2>
<p>Using MongoDB Docker image with persistent volume for data storage.</p>

<p><strong>Screenshot:</strong></p>
<img src="https://via.placeholder.com/600x300.png?text=MongoDB+Setup" alt="MongoDB Setup">

<hr>

<h2 id="cicd-pipeline">CI/CD Pipeline</h2>
<p>Configured GitHub Actions to:</p>
<ul>
    <li>Build Docker images for backend and frontend when changes are pushed to GitHub.</li>
    <li>Push images to Docker Hub.</li>
    <li>Pull latest images and restart containers on the VM automatically.</li>
</ul>

<p><strong>Screenshot:</strong></p>
<img src="https://via.placeholder.com/600x300.png?text=CI%2FCD+Pipeline" alt="CI/CD Pipeline">

<hr>

<h2 id="nginx-reverse-proxy">Nginx Reverse Proxy</h2>
<p>Configured Nginx to route:</p>
<ul>
    <li>Frontend requests to Angular app.</li>
    <li><code>/api/</code> requests to backend API.</li>
</ul>

<p><strong>Screenshot:</strong></p>
<img src="https://via.placeholder.com/600x300.png?text=Nginx+Reverse+Proxy" alt="Nginx Reverse Proxy">

<hr>

<h2 id="screenshots">Screenshots Overview</h2>
<table>
    <tr>
        <th>Step</th>
        <th>Screenshot</th>
    </tr>
    <tr>
        <td>GitHub Repository Push</td>
        <td><a href="https://via.placeholder.com/600x300.png?text=GitHub+Repo+Push">Link</a></td>
    </tr>
    <tr>
        <td>Docker Compose Deployment</td>
        <td><a href="https://via.placeholder.com/600x300.png?text=Docker+Compose+Deployment">Link</a></td>
    </tr>
    <tr>
        <td>MongoDB Setup</td>
        <td><a href="https://via.placeholder.com/600x300.png?text=MongoDB+Setup">Link</a></td>
    </tr>
    <tr>
        <td>CI/CD Pipeline Execution</td>
        <td><a href="https://via.placeholder.com/600x300.png?text=CI%2FCD+Pipeline">Link</a></td>
    </tr>
    <tr>
        <td>Nginx Reverse Proxy</td>
        <td><a href="https://via.placeholder.com/600x300.png?text=Nginx+Reverse+Proxy">Link</a></td>
    </tr>
</table>

<hr>

<h2>Conclusion</h2>
<ul>
    <li>MEAN application is successfully deployed and accessible on port 80.</li>
    <li>CI/CD pipeline ensures automated builds, Docker image pushes, and deployment.</li>
    <li>MongoDB data persists across container restarts.</li>
    <li>Nginx correctly routes frontend and API traffic.</li>
</ul>

<p><strong>Next Step:</strong> Replace all placeholder links with actual screenshots from your VM, Docker builds, and CI/CD runs before submission.</p>

</body>
</html>
