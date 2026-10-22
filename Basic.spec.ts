import test, { expect } from "@playwright/test";

test('validate URL',async({page})=>
   
{
    await page.goto("https://practicetestautomation.com/")
    await page.pause()
   let res:string= await page.title();
   console.log(res)
    await page.pause()
})