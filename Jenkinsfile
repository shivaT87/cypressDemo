pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/SampleFramework/Login.cy.js", description: "Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'], description: "choice the browser where you want to execute your scripts")

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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'CypressPipeline-Execution/mochawesome-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

}