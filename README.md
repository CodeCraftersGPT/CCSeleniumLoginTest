Selenium Login Test with JavaScript
This project demonstrates how to automate a login page using Selenium WebDriver with JavaScript. The test automates logging into a sample page using a username and password, and verifies the success message.

Prerequisites
To run this project on your local machine, you will need the following:

Node.js (version 14 or later)
npm (comes with Node.js)
Google Chrome (latest version)
ChromeDriver (included in the project)
Getting Started
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/selenium-login-demo.git
cd selenium-login-demo
2. Install dependencies
In the project directory, install the required packages using npm:

bash
Copy code
npm install
This will install the following dependencies:

Selenium WebDriver: For browser automation.
ChromeDriver: For running tests on Google Chrome.
3. Running the Test
To execute the Selenium test, simply run the following command:

bash
Copy code
npm test
This will:

Launch Google Chrome.
Navigate to the login page: http://the-internet.herokuapp.com/login.
Enter the username and password (tomsmith / SuperSecretPassword!).
Verify if the login was successful.
4. Expected Output
If the login is successful, you will see a success message on the console:

Copy code
Login successful
The browser will then close automatically after the test.

5. Folder Structure
bash
Copy code
selenium-login-demo/
│
├── node_modules/             # Project dependencies
├── tests/                    # Folder containing the test scripts
│   └── loginTest.js          # Selenium login test script
├── package.json              # Node.js configuration file
├── README.md                 # Instructions for participants
└── loginTest.js              # Main Selenium test file
6. Modifying the Test
To modify or extend the test, edit the loginTest.js file inside the tests folder. For example, you can add new steps to automate additional interactions like:

Filling other form fields.
Navigating to other pages.
7. Troubleshooting
ChromeDriver issues: Ensure that the installed ChromeDriver version matches the version of your installed Google Chrome.
Node.js errors: Ensure that Node.js and npm are installed and correctly configured.
License
This project is licensed under the MIT License.