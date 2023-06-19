Feature: Regression
    Scenario: Guest search
        Given Open delightable application
        When enter valid credentials and login
        Then Validate successful login
        Then Validate complete guest details