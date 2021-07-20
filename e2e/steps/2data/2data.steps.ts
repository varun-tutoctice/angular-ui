var { Given, When, And, Then, Before } = require("@cucumber/cucumber");
import { AppPage } from "../app.po";
import { browser, by, element, protractor, until } from "protractor";

let app: AppPage;

Before(() => (app = new AppPage()));


// Scenario 1

Given("Currently on homepage", { timeout: 2 * 20000 }, async () => {
  await browser.sleep(2000);
});

When("click on left side nav", { timeout: 2 * 20000 }, async () => {
  await app.s(2000);
});

When("takes to unit test page", { timeout: 2 * 20000 }, async () => {

  await browser.sleep(2000);
});

Then(
  "Unit test reports can be seen",
  { timeout: 2 * 20000 },
  async () => {
 //   await alert(window.location.pathname);
    await browser.sleep(3000);
  }
);
