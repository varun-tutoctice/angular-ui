Feature: Navigate to Build Information page
         Build Information Page
  Scenario: Navigating to Build Information page from unit test page
            Given Currently on unit test page
            When click on build info in left side nav
            And takes to build information page
            Then build information with version can be seen
