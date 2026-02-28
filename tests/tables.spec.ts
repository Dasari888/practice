import {test,expect,Locator}from '@playwright/test';

test("verifythe table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // const table:string[]= await page.locator("//table[@name='BookTable']/tbody/tr").allTextContents();
    // console.log(table);

    const table:Locator= await page.locator("//table[@name='BookTable']/tbody");

    const rows:Locator= await table.locator("tr");
    const rowCount:number= await rows.count();
    console.log("number of rows in the table is %s",rowCount);
    await expect(rowCount).toBe(7);
    await expect(table.locator("tr")).toHaveCount(7);

    const header:Locator= await rows.locator("th");
    console.log("header of the table is %s",await header.allTextContents());
    console.log("fourth columnheader is %s",await header.nth(-1).textContent());

})