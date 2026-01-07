import {test as pomtest} from "@playwright/test";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import SpecialHotPage from "../pages/specialHotPage";

type pages ={
    registerPage: RegisterPage;
    homePage: HomePage;
    loginPage: LoginPage;
    specialHotPage:SpecialHotPage;
}

pomtest.extend<pages>({
    registerPage: async({page}, use) =>{
        await use(new RegisterPage(page));
    },
     homePage: async({page}, use) =>{
        await use(new HomePage(page));
    },
     loginPage: async({page}, use) =>{
        await use(new LoginPage(page));
    },
     specialHotPage: async({page}, use) =>{
        await use(new SpecialHotPage(page));
    }
})