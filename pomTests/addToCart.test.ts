import { expect, test } from "@playwright/test";

import RegisterPage from "../pages/registerPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SpecialHotPage from "../pages/specialHotPage";
import { log } from "node:console";

const email = "koushik02@mailinator.com";
const password = "Koushik@123";

test.describe("Page object test demo", async()=>{
    test("Resgister test_01", async({page, baseURL}) =>{
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Esha");
    await register.enterLastName("Dhareshwar");
    await register.enterEmail(email);
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickTermandCondition();
    await register.clickContinueToRegister();
})

test("Login test_02", async({page, baseURL}) =>{
    const login =new LoginPage(page);
    await page.goto(`${baseURL}route=account/Login`)
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.clickLoginBtn();
    expect (await page.title()).toBe("My Account");
})

test("Add to cart test_03", async ({page, baseURL}) =>{
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const special = new SpecialHotPage(page);
    await page.goto(`${baseURL}route=account/Login`)
    await login.login(email, password);
    await homePage.clickOnSpecialHotMenu();
    await special.addFirstProductToTheCart();
    const isCartVisible = await special.isToastVisible();
    expect(isCartVisible).toBeVisible();
})
} )
