import {test, expect} from "@playwright/test"

test("handling alerts", async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert")

    page.on("dialog", async (alert) =>{
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("Esha");
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'Esha'")
})