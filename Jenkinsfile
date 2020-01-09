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
                sh 'cd /var/jenkins_home/workspace/picturePreview/jenkins/scripts'
                sh 'sh deliver.sh'
            }
        }
    }
}