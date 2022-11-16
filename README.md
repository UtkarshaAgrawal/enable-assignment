# enable-assignment

This Repository is to implement End to End GUI Automation Testing for enable assignment

### How do I get set up?

1. Download Visual Studio Code

   https://code.visualstudio.com/download

2. Install node.js and npm

   https://nodejs.org/en/download/

3. Open Terminal in VS Code and run command to get started with playwright test.

   ```
   npx playwright test --headed
   ```

   OR

   ```
    npx playwright test --headed worker=1
   ```

4. Contact repository owner for .env file

5. Run automated tests locally using the following commands:

   - Shortcut command (using package.json)
     ```
     npm run test
     ```
   - Headless mode
     ```
     npx playwright test
     ```
   - Headed mode
     ```
     npx playwright test --headed
     ```
   - Run tests in a specific test file
     ```
     npx playwright test tests/<test-file-name>/
     npx playwright test tests/<folder-name>/<test-file-name>
     ```

### Access Test Reports

1. Playwright HTML report:
   ```
   npx playwright show-report
   ```
2. Allure report:
   - Once the tests are complete, html allure reports can be generated using following command:
     ```
     npx allure generate ./allure-results --clean
     ```
   - Once the report is generated use follong command to open it:
     ```
     npx allure open ./allure-report
     ```
