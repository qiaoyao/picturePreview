docker run \
  -u root \
  -d \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  --restart=always \
  --name jenkins \
  jenkinsci/blueocean