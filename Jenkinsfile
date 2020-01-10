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
                sh 'sh /var/jenkins_home/workspace/picturePreview/jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'sh /var/jenkins_home/workspace/picturePreview/jenkins/scripts/kill.sh'
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
        }
        success {
            mail to: 'qiao_17621455056@163.com',
            subject: "Successed Pipeline: ${currentBuild.fullDisplayName}",
            body: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            mail to: 'team@example.com',
            subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
            body: "Something is wrong with ${env.BUILD_URL}"
        }
        changed {
            echo 'Things were different before...'
        }
    }
}