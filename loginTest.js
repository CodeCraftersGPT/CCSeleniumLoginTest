const { Builder, By, Key, until } = require('selenium-webdriver');

(async function loginTest() {
    // Create a new Chrome browser session
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the login page
        await driver.get('http://the-internet.herokuapp.com/login');

        // Input the username
        await driver.findElement(By.id('username')).sendKeys('tomsmith');

        // Input the password
        await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!', Key.RETURN);

        // Wait for the success message
        await driver.wait(until.elementLocated(By.css('.flash.success')), 5000);

        // Log success to the console
        console.log('Login successful');
    } finally {
        // Quit the browser session
        await driver.quit();
    }
})();
