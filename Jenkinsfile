pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                echo 'building the application...'
            }
        }
        stage('Test') { 
            steps {
                sh 'chmod +x ./jenkins/scripts/test.sh'
                sh './jenkins/scripts/test.sh' 
                echo 'testing the application...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploying the application...'
            }
        }
    }
}
