import test, { expect } from "@playwright/test";
import { SignInPage } from "../../pages/signIn.page";
import { HomePage } from "../../pages/home.page";
import { CustomersListPage } from "../../pages/customers/customers.page";
import { ADMIN_PASSWORD, ADMIN_USERNAME } from "../../../config/env";

test.describe("[UI] [Customers] [Filter Customers]", async function () {
  test.beforeEach("Should login with valid data", async ({ page }) => {
    const loginPage = new SignInPage(page);
    const homePage = new HomePage(page);
    const customersPage = new CustomersListPage(page);

    await loginPage.openLoginPage();
    await loginPage.fillCredentialsInputs({
      username: ADMIN_USERNAME,
      password: ADMIN_PASSWORD,
    });
    await loginPage.clickSubmitButton();
    await homePage.waitForOpened();
    await homePage.clickOnViewDetailsButton("Customers");
    await customersPage.waitForOpened();
  });

  test("Should filter customers", async ({
    page,
  }) => {
    const customersPage = new CustomersListPage(page);
    await customersPage.clickOnFilter();
    //await customersPage.clickOnCheckbox("USA");
    await page.locator("#USA-filter").click();
    await page.locator("#apply-filters").click();

   const dataChipCustomersText = await page
      .locator(".chip.text-primary.border")
      .innerText();
    expect(dataChipCustomersText).toBe("USA");
  });
});
