pipeline {
    agent {
        docker {
            image 'node:8.11.1' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'node --version' 
            }
        }
    }
}