<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MEAN Stack Deployment Assignment</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f7f9;
        color: #333;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #1a73e8;
        color: white;
        padding: 30px;
        text-align: center;
    }
    header h1 {
        margin: 0;
    }
    nav {
        background-color: #fff;
        padding: 10px 20px;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }
    nav a {
        margin: 0 15px;
        text-decoration: none;
        color: #1a73e8;
        font-weight: bold;
    }
    nav a:hover {
        text-decoration: underline;
    }
    section {
        padding: 20px;
        max-width: 1000px;
        margin: auto;
    }
    .card {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        padding: 20px;
        margin-bottom: 20px;
    }
    pre {
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
    }
    img {
        width: 100%;
        max-width: 600px;
        margin: 15px 0;
        border-radius: 8px;
        border: 1px solid #ccc;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
    }
    th {
        background-color: #1a73e8;
        color: white;
    }
    footer {
        text-align: center;
        padding: 20px;
        margin-top: 30px;
        background-color: #f0f0f0;
    }
</style>
</head>
<body>

<header>
    <h1>MEAN Stack Application Deployment Assignment</h1>
    <p>Containerization, Cloud Deployment & CI/CD Implementation</p>
</header>

<nav>
    <a href="#repo-setup">Repository Setup</a>
    <a href="#deployment">Deployment</a>
    <a href="#database">Database</a>
    <a href="#cicd">CI/CD</a>
    <a href="#nginx">Nginx</a>
    <a href="#screenshots">Screenshots</a>
</nav>

<section id="repo-setup" class="card">
    <h2>Repository Setup</h2>
    <p>Create a GitHub repository and push the complete application code:</p>
    <pre>
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:USERNAME/repo.git
git push -u origin main
    </pre>
    <img src="https://via.placeholder.com/600x300.png?text=GitHub+Repo+Push" alt="GitHub Repo Push">
</section>

<section id="deployment" class="card">
    <h2>Deployment on Ubuntu VM</h2>
    <ol>
        <li>Set up an Ubuntu VM on AWS or any cloud provider.</li>
        <li>Install Docker and Docker Compose.</li>
        <li>Deploy application using Docker Compose:</li>
    </ol>
    <pre>
docker-compose up -d
    </pre>
    <img src="https://via.placeholder.com/600x300.png?text=Docker+Compose+Deployment" alt="Docker Compose Deployment">
</section>

<section id="database" class="card">
    <h2>Database Setup</h2>
    <p>MongoDB Docker image with persistent volume is used for data storage:</p>
    <pre>
services:
  mongo:
    image: mongo:6
    volumes:
      - mongo-data:/data/db
    </pre>
    <img src="https://via.placeholder.com/600x300.png?text=MongoDB+Setup" alt="MongoDB Setup">
</section>

<section id="cicd" class="card">
    <h2>CI/CD Pipeline</h2>
    <ul>
        <li>Build Docker images for backend and frontend on code push.</li>
        <li>Push Docker images to Docker Hub.</li>
        <li>Automatically pull latest images and restart containers on the VM.</li>
    </ul>
    <img src="https://via.placeholder.com/600x300.png?text=CI%2FCD+Pipeline" alt="CI/CD Pipeline">
</section>

<section id="nginx" class="card">
    <h2>Nginx Reverse Proxy</h2>
    <ul>
        <li>Frontend requests routed to Angular application.</li>
        <li>/api/ requests routed to backend API.</li>
    </ul>
    <img src="https://via.placeholder.com/600x300.png?text=Nginx+Reverse+Proxy" alt="Nginx Reverse Proxy">
</section>

<section id="screenshots" class="card">
    <h2>Screenshots Overview</h2>
    <table>
        <tr>
            <th>Step</th>
            <th>Screenshot</th>
        </tr>
        <tr>
            <td>GitHub Repository Push</td>
            <td><a href="https://via.placeholder.com/600x300.png?text=GitHub+Repo+Push">View</a></td>
        </tr>
        <tr>
            <td>Docker Compose Deployment</td>
            <td><a href="https://via.placeholder.com/600x300.png?text=Docker+Compose+Deployment">View</a></td>
        </tr>
        <tr>
            <td>MongoDB Setup</td>
            <td><a href="https://via.placeholder.com/600x300.png?text=MongoDB+Setup">View</a></td>
        </tr>
        <tr>
            <td>CI/CD Pipeline Execution</td>
            <td><a href="https://via.placeholder.com/600x300.png?text=CI%2FCD+Pipeline">View</a></td>
        </tr>
        <tr>
            <td>Nginx Reverse Proxy</td>
            <td><a href="https://via.placeholder.com/600x300.png?text=Nginx+Reverse+Proxy">View</a></td>
        </tr>
    </table>
</section>

<section class="card">
    <h2>Conclusion</h2>
    <ul>
        <li>MEAN application is successfully deployed and accessible on port 80.</li>
        <li>CI/CD pipeline ensures automated builds, Docker image pushes, and deployment.</li>
        <li>MongoDB data persists across container restarts.</li>
        <li>Nginx correctly routes frontend and API traffic.</li>
    </ul>
    <p><strong>Next Step:</strong> Replace placeholder links with actual screenshots from your VM, Docker builds, and CI/CD runs before submission.</p>
</section>

<footer>
    <p>&copy; 2025 MEAN Stack Deployment Assignment</p>
</footer>

</body>
</html>
