// playwright-dev-page.js
const { expect } = require("@playwright/test");

exports.EnableDashboardPage = class EnableDashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.roothubLink = page.locator('a[href*="apps.enable.com"]').first();
    this.tradingProgramDropdown = page
      .locator(".menu-items__panel-title")
      .nth(0);
    this.menuitemFirst = page.locator(".menu-items__panel__item").nth(0);
    this.menuitemSecond = page.locator(".menu-items__panel__item").nth(1);
    this.menuitemThird = page.locator(".menu-items__panel__item").nth(2);
    this.menuitemFourth = page.locator(".menu-items__panel__item").nth(3);
    this.menuitemFifth = page.locator(".menu-items__panel__item").nth(4);
    this.menuitemSixth = page.locator(".menu-items__panel__item").nth(5);
    this.activitymenuItem = page
      .locator(".menu-items__breadcrumb__link")
      .first();
    this.reportsmenuItem = page.locator("button[aria-label*='Hub switcher']");
    this.hubswitcherApps = page.locator(".tab-list__item--apps");
    this.hubswitcherNotification = page.locator(
      ".tab-list__item--notifications"
    );
    this.hubswitcherUsername = page.locator(".hub-list-header__username");
    this.hubswitcherHome = page.locator(".hub-list-header__home");
    this.hubswitcherOkay = page.locator("(//span[@class='title'])[1]");
    this.progressTracker = page
      .locator(".show-full-title >> text=Progress tracker")
      .first();
    this.testsupplierLink = page
      .locator(".show-full-title >> text= Suppliers")
      .first();
    this.workreportLink = page
      .locator(".show-full-title >> text= Workflow report")
      .first();
    this.externalearningLink = page
      .locator(".ng-star-inserted >> text= External earnings ")
      .first();
    this.testactivitystarLink = page.locator("(//span[@class='title'])[1]");
    this.tooltip = page.locator(".tooltip");
    this.programsearchButton = page.locator('input[placeholder*="Supplier"]');
    this.searchmultipleResults = page.locator(".details .trading-partner-name");
    this.testSearchresult = page.locator("text=Heritage Bathrooms").nth(3);
    this.testarticleLink = page.locator(".blog-article-tile__link");
    this.testProgramLink = page.locator('a[href*="Deals/Deals/Wizard"]');
    this.browsesupplierLink = page.locator("text=Browse suppliers");
    this.getstartedTile = page.locator(".userflow");
    this.frame1 = page.frameLocator('iframe[role="presentation"]').first();
    this.frame1Button = this.frame1.locator('[data-testid="minimize-button"]');
    this.programearningFile = page.locator("text=Program Earnings");
    this.dailyearningTile = page.locator("text=Daily Earnings");
    this.transactionTile = page.locator("text=Transactions");
    this.forecastearnigTile = page.locator("text=Forecast Earnings");
    this.myreportTile = page.locator("text=My Reports");
    this.debtorsreportTile = page.locator("text=Debtors Report");
    this.paymentallocationTile = page.locator("text=Payment Allocation");
    this.paymenthistoryTile = page.locator("text=Payment History").first();
    this.snapshotTile = page.locator("text=Snapshots");
    this.watchlistTile = page.locator("text=Watchlist");
    this.processingTile = page.locator("text=Processing");
  }

  async goto() {
    // user logs in enable dashboard page
    await this.page.goto(process.env.ENABLE_LOGIN_URL);
  }

  async testCurrentLinkandTitle() {
    // test the current link of the page
    await this.page.waitForLoadState("networkidle");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Dashboard`);
  }

  async testRoothubLink() {
    // validate the enable root hub link is working
    await this.roothubLink.click();
    await this.page.waitForLoadState("networkidle");

    await this.page.goBack();
  }

  async testMenudropdown() {
    // test the menu dropdown is working by clicking on it
    await this.tradingProgramDropdown.click();
    await expect.soft(this.menuitemFirst).toHaveText("Activity");
    await expect.soft(this.menuitemSecond).toHaveText("Progress tracker Beta");
    await expect.soft(this.menuitemThird).toHaveText("Suppliers");
    await expect.soft(this.menuitemFourth).toHaveText("Workflow report Beta");
    await expect.soft(this.menuitemFifth).toHaveText("External earnings");
    await expect.soft(this.menuitemSixth).toHaveText("Watchlist");
  }

  async testactivityMenuitem() {
    // click the activity menu item is working by clicking on it
    await this.activitymenuItem.click();
  }

  async testreportsMenuitem() {
    // validate the reports menu item is working fine by clicking on it
    await this.reportsmenuItem.click();
  }

  async testhubSwitcher() {
    //await page.locator("button[aria-label*='Hub switcher']");
    await expect.soft(this.hubswitcherApps).toHaveText("Apps");
    await expect.soft(this.hubswitcherNotification).toHaveText("Notifications");
    await expect.soft(this.hubswitcherUsername).toHaveText("Utkarsha Agrawal");
    await expect.soft(this.hubswitcherHome).toHaveText("Enable apps");
    await this.hubswitcherOkay.click();
  }

  async testProgresstracker() {
    // test the progress tracker by clicking on it
    await this.progressTracker.click();
    await this.page.goBack();
  }

  async testSupplierlink() {
    // test the suppliers by clicking on it
    await this.testsupplierLink.click();
  }

  async testWorkflowreportlink() {
    // validate the workflow report by clicking on it
    await this.workreportLink.click();
  }

  async testexternalEarningslink() {
    // test the external earnings by clicking on it
    await this.externalearningLink.click();
  }

  async testactivityStar() {
    // test the recent activity star icon is working fine
    await this.testactivitystarLink.click();
    await this.tooltip.dblclick();
  }

  async testprogramSearchbutton() {
    // test the supplier or program search button
    await this.programsearchButton.type("Heritage");
    await this.page.waitForResponse("**/Api/Dashboard/Search");
    const count = await this.searchmultipleResults.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(this.searchmultipleResults.nth(i))
        .toHaveText("Heritage Bathrooms");
    }
  }

  async testsearchResult() {
    //check the activities are displayed
    await this.testSearchresult.click();
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testArticlelink(context) {
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      this.testarticleLink.click(),
    ]);
    await newPage.waitForLoadState("networkidle");
    await newPage.context().pages().at(1).close();
    await this.page.bringToFront();
    await this.page.waitForLoadState("networkidle");
  }

  async testProgramlink() {
    // test the create program link is present on the page
    await this.testProgramLink.click();
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testBrowsesupplierlink() {
    // test the browse suppliers link is present on the page
    await this.browsesupplierLink.click();
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async getStartedtile() {
    // check the get started tile is present on the page
    await this.page.waitForLoadState("networkidle");
    await this.getstartedTile.hover();
    await this.getstartedTile.click();
    await this.page.waitForLoadState("networkidle");
    await this.frame1Button.click();
  }

  async testProgramearningfile() {
    //check the program earnings tile is present on the page
    await this.programearningFile.click();
    await this.page.waitForLoadState("networkidle");
    await expect
      .soft(this.page)
      .toHaveTitle("Program earnings — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Reports/DealEarnings`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testDailyearningtile() {
    //check the daily earning tile is present on the page
    await this.dailyearningTile.hover();
    await this.dailyearningTile.click();
    await expect
      .soft(this.page)
      .toHaveTitle("Daily earnings — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Reports/DailyEarnings`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testtransactionTile() {
    //check the transactions tile is present on the page
    await this.transactionTile.click();
    await expect.soft(this.page).toHaveTitle("Transactions — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Reports/TurnoverExtract`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async forecastEarningTile() {
    //check the forecast earnings tile is present on the page
    await this.forecastearnigTile.click();
    await this.page.waitForLoadState("networkidle");
    await expect
      .soft(this.page)
      .toHaveTitle("Forecast earnings — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Reports/ForecastEarnings`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testReporttile() {
    //check the my reports tile is present on the page
    await this.myreportTile.click();
    await expect.soft(this.page).toHaveTitle("My reports — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Reports`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testDebtorsreporttile() {
    //check the debtors report tile is present on the page
    await this.debtorsreportTile.click();
    await expect
      .soft(this.page)
      .toHaveTitle("Debtors report — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Cash/DebtorsReport`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testPaymentallocationtile() {
    //check the payment allocation tile is present on the page
    await this.paymentallocationTile.click();
    await expect
      .soft(this.page)
      .toHaveTitle("Payment allocation — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Cash/PaymentAllocation`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testPaymenthistorttile() {
    //check thepayment history tile is present on the page
    await this.paymenthistoryTile.click();
    await expect
      .soft(this.page)
      .toHaveTitle("Payment history — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Cash/PaymentHistory`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testSnapshottile() {
    //check snapshots tile is present on the page
    await this.snapshotTile.click();
    await this.page.waitForLoadState("networkidle");
    await expect.soft(this.page).toHaveTitle("Financials — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Modules/Financials/snapshots`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testWatchlisttile() {
    //check watchlist tile is present on the page
    await this.watchlistTile.click();
    await this.page.waitForLoadState("networkidle");
    await expect
      .soft(this.page)
      .toHaveTitle("Opportunities — Watchlist — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(
        `${process.env.ENABLE_BASE_URL}/Modules/WatchlistApp/Opportunities`
      );
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }

  async testProcessingtile() {
    //check processing tile is present on the page
    await this.processingTile.click();
    await this.page.waitForLoadState("networkidle");
    await expect
      .soft(this.page)
      .toHaveTitle("Calculation queue — Trading Programs");
    await expect
      .soft(this.page)
      .toHaveURL(`${process.env.ENABLE_BASE_URL}/Admin/Processing`);
    await this.page.waitForLoadState("networkidle");
    await this.page.goBack();
  }
};
