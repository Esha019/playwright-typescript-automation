import { expect, test } from "@playwright/test";

test("Download Files", async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share and Comment");
    await page.click("id=create");

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=Link-to-download")
    ])
    // const path = await download.path();
    // console.log(path);

    const fileName = download.suggestedFilename();
    await download.saveAs(fileName);  
})

test("Upload File", async({page}) =>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
   // await page.setInputFiles("input[type='file']", ["uploadItems/apple.png", "uploadItems/mango.png"]);

   //Incase if the upload option is hidden then use the following 

   const [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"), 
    page.click("input[type='file']")
   ])

   const isMultiple = uploadFiles.isMultiple();
   console.log(isMultiple);
   uploadFiles.setFiles(
    ["uploadItems/apple.png", "uploadItems/mango.png"]
   )
    await page.waitForTimeout(3000)
})

