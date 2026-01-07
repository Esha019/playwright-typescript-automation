import {test as myTest} from "@playwright/test";

type data = {
    age:number,
    email:string
}

const myfixtureTest = myTest.extend<data>({
    age:35,
    email:"eshadaipule@gmail.com"
})

export const test = myfixtureTest;