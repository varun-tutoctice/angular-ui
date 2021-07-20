var { Given, When, And, Then, Before } = require("@cucumber/cucumber");
import { AppPage } from "../app.po";
import { browser, by, element, protractor, until } from "protractor";

let app: AppPage;

Before(() => (app = new AppPage()));


// Scenario 1

Given("Currently on build information page", { timeout: 2 * 20000 }, async () => {
  await browser.sleep(2000);
});

When("click on the table of build info", { timeout: 2 * 20000 }, async () => {
  await app.s(2000);
});

When("check the date and version number", { timeout: 2 * 20000 }, async () => {

  await browser.sleep(2000);
});

Then(
  "we can find the current build information",
  { timeout: 2 * 20000 },
  async () => {
 //   await alert(window.location.pathname);
    await browser.sleep(3000);
  }
);
