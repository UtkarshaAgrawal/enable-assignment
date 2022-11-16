// @ts-check
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const pdf = require("pdf-parse");

test("test and read the enable workflow report", async ({ page, context }) => {
  // user logs into enable dashboard
  await page.goto(process.env.ENABLE_LOGIN_URL);

  // user navigates to workflow report tab and downloads Heritage 2021 report
  await page
    .locator(".show-full-title >> text= Workflow report")
    .first()
    .click();
  await page.locator("[title='S00000042']").click();
  await page.locator('button:has-text("View program")').click();

  const [download] = await Promise.all([
    page.waitForEvent("download"), // wait for download to start
    page.locator('button:has-text("Download PDF")').click(),
  ]);

  await download.saveAs("HeritageReport2021.pdf");

  // parse the Heritage 2021 report pdf file to json format
  const pdfContent = await readPdf("HeritageReport2021.pdf");

  //testing Heritage Report pdf content like Name and Supplier Trading Agreement
  await expect
    .soft(pdfContent)
    .toContain("Supplier Trading Agreement: Jan 1, 2021 to Dec 31, 2021");
  await expect
    .soft(pdfContent)
    .toContain("NameHeritage Bathrooms LtdCompany Number0234526");
  await expect
    .soft(pdfContent)
    .toContain("Guaranteed Rebate 1 of 1: D00000139");
});

function readPdf(pathToPdf) {
  return new Promise((resolve) => {
    let dataBuffer = fs.readFileSync(pathToPdf);
    pdf(dataBuffer).then(function ({ text }) {
      resolve(text);
    });
  });
}
