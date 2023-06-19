pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices:['chorme','edge','firefox'], description: "choice the browser where you want to execute your scripts")

    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
            
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploying the application"
            }
            
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

}