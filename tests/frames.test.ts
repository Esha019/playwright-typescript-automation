import { expect, test } from "@playwright/test";

test("Interact with frames", async({page}) =>{
    await page.goto("https://www.letcode.in/frame")

    const allframes = page.frames();
    console.log("No. of frames: " + allframes.length);

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Esha")
    await frame.locator("input[name='lname']").fill("Dhareshwar")

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("eshadaipule@gmail.com")

    await frame.locator("input[name='fname']").fill("letcode")

    // const myframe = page.frame("firstFr")
    // // if(myframe !=null){
    // //     await myframe.fill("", "")
    // // }
    // await myframe?.fill("input[name='fname']", "Esha")
    // await myframe?.fill("input[name='lname']", "Dhareshwar")

    // expect(await myframe?.locator("p.has-text-info").textContent()).toContain("You have entered")

    // await page.waitForTimeout(3000);

})