// @ts-check
const { test, expect } = require("@playwright/test");
const {
  EnableDashboardPage,
} = require("../pageObjects/enable-dashboard-page.js");

test("homepage dashboard has menu, header and tiles", async ({
  page,
  context,
}) => {
  const enableDashboard = new EnableDashboardPage(page);

  // testing current link, title, roothub link
  await enableDashboard.goto();
  await enableDashboard.testCurrentLinkandTitle();
  await enableDashboard.testRoothubLink();

  // testing the header elemnts
  await enableDashboard.testMenudropdown();
  await enableDashboard.testactivityMenuitem();
  await enableDashboard.testreportsMenuitem();
  await enableDashboard.testhubSwitcher();

  //testing the menu elements
  await enableDashboard.testProgresstracker();
  await enableDashboard.testSupplierlink();
  await enableDashboard.testWorkflowreportlink();
  await enableDashboard.testexternalEarningslink();
  await enableDashboard.testactivityStar();
  await enableDashboard.testprogramSearchbutton();
  //await enableDashboard.testsearchResult();

  // test the blog article link is working fine
  await enableDashboard.testArticlelink(context);
  await enableDashboard.testProgramlink();
  await enableDashboard.testBrowsesupplierlink();

  //test the tiles
  await enableDashboard.getStartedtile();
  await enableDashboard.testProgramearningfile();
  await enableDashboard.testDailyearningtile();
  await enableDashboard.testtransactionTile();
  await enableDashboard.forecastEarningTile();
  await enableDashboard.testReporttile();
  await enableDashboard.testDebtorsreporttile();
  await enableDashboard.testPaymentallocationtile();
  await enableDashboard.testPaymenthistorttile();
  await enableDashboard.testSnapshottile();
  await enableDashboard.testWatchlisttile();
  await enableDashboard.testProcessingtile();

  // test the finance menu item is working fine by clicking on it

  // validate the config menu item is working fine by clicking on it

  // validate the hub switcher button, username,
});

// test("validate the workflow report page", async ({ page }) => {
//   // Expect a title "to contain" a substring.
//   // create a locator
//   // Expect an attribute "to be strictly equal" to the value.
//   // Click the get started link.
//   // Expects the URL to contain intro.
// });

// test('homepage has title and links to intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.getByRole('link', { name: 'Get started' });

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
