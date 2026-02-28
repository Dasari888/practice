import {test,expect,Locator} from '@playwright/test';
test('Verify Bootstrap ',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@name='username']").first().fill("Admin")
    await page.locator("//input[@name='password']").first().fill("admin123")
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000);

    await page.getByText("PIM").click();
    await page.locator("(//div[@tabindex='0'])[3]").click();
    await page.waitForTimeout(3000)
    const count:(String|null)[]= await page.locator("form span").allTextContents();
    console.log("count iss",count)
    console.log("count iss",count.length)
})