import test, { expect } from "@playwright/test";

test('validate Login',async({page})=>
   {
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.pause()
    let url=page.url();
    console.log(url);
    //Add to cart
    await expect(url).toContain('inventory');
    let tshirt=page.locator('.inventory_item').filter({hasText:/T-shirt/i});
    console.log(await tshirt.count());
    await expect(tshirt).toHaveCount(2);
    for(const tshirts of await tshirt.all()){
    await tshirts.getByRole('button',{name:'Add to cart'}).click();
    await page.pause()
    }
    //check out
    await page.locator('#shopping_cart_container').click();
    await page.locator('#checkout').click();
    await page.pause()
    //Checkout: Your Information
await page.getByPlaceholder('First Name').fill('PRIYA');
await page.getByPlaceholder('Last Name').fill('YA');
await page.getByPlaceholder('Zip/Postal Code').fill('600059');
await page.locator('#continue').click();
await page.pause()
//finish
await page.locator('#finish').click();

})
//Invalid
// test('validate Invalid',async({page})=>
//    {
//     await page.goto("https://www.saucedemo.com/")
//     await page.locator('#user-name').fill('standard_user');
//     await page.locator('#password').fill('setauce');
//     await page.locator('#login-button').click();
//     await page.pause()
// })
//Locked OUT
// // test.only('validate Lockedout',async({page})=>
// //    {
// //     await page.goto("https://www.saucedemo.com/")
// //     await page.locator('#user-name').fill('locked_out_user');
// //     await page.locator('#password').fill('secret_sauce');
// //     await page.locator('#login-button').click();
// //     await page.pause()
// // })