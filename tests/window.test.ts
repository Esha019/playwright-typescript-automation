import { expect, Page, test } from "@playwright/test";

test("Interact with multiple tabs", async ({page}) =>{
    page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    const [multiPge] = await Promise.all([
        page.waitForEvent("popup"),
        page.click('#followboth')
    ])

    await multiPge.waitForLoadState();

    const pages = multiPge.context().pages();
    console.log('No. of tabs: ' + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    })

    let facebookPage:Page;
    for(let index =0; index< pages.length; index++){
        const url = pages[index].url()
        if(url == "https://www.facebook.com/Lambdatest/"){
            facebookPage = pages[index];
        }
    }
    const text = await facebookPage.textContent("//h1")
    console.log(text);
})