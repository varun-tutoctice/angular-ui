Feature: Checking Version Number and Build date
         Version Number and build date
  Scenario: Comparing the version number and build date
            Given Currently on build information page
            When click on the table of build info
            And check the date and version number
            Then we can find the current build information
