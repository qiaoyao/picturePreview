pipeline {
    agent {
        docker {
            image 'node:8.11' 
            args '-p 3000:3000' 
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('build') { 
            steps {
                sh 'npm install' 
            }
        }
         stage('deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
            }
        }
    }
}