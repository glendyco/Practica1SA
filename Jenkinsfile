pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs('P1SA'){
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                nodejs('P1SA'){
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
