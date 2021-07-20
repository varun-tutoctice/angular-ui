var { Given, When, And, Then, Before } = require("@cucumber/cucumber");
import { AppPage } from "../app.po";
import { browser, by, element, protractor, until } from "protractor";

let app: AppPage;

Before(() => (app = new AppPage()));


// Scenario 1

Given("navigate to homepage", { timeout: 2 * 20000 }, async () => {
  await app.navigateToHomepage();
  await browser.sleep(1000);
});

When("Seeing the graphs", { timeout: 2 * 20000 }, async () => {
  await app.s(1000);
});

When("scroll the page", { timeout: 2 * 20000 }, async () => {

  await browser.sleep(1000);
});

Then(
  "graphs can be seen",
  { timeout: 2 * 20000 },
  async () => {
 //   await alert(window.location.pathname);
    await browser.sleep(1000);
  }
);
