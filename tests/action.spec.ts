import {test,expect,Locator} from '@playwright/test'


test('Actions Practice',async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const name:Locator= page.locator('#name')
    await expect( page.locator('#name')).toBeVisible();
    await expect(page.locator("#name")).toBeEnabled();
    await page.locator("#name").fill("Test Automation");
    const maxlength: String|null=await page.locator('#name').getAttribute('maxlength');
    console.log(maxlength); 
    expect(maxlength).toBe('15');
    await name.fill("JAmes Bond");
    console.log("Value the entered in the name field is ",await name.inputValue());
    const elemententered :String= await name.inputValue()
    expect (elemententered).toBe("JAmes Bond");
    await page.waitForTimeout(3000);

    
})

test("Radio buttons Practice",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#male').check();
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();
    await expect(page.locator('#male')).not.toBeChecked();

})


test ("Check box Practice",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const Sunday :Locator= page.locator('#sunday')
    await page.locator('#sunday').check();
    await page.locator('#monday').check();
    await page.locator('#tuesday').check();
    await page.locator('#wednesday').check();
    await page.locator('#thursday').check();
    await page.locator('#friday').check();
    await Sunday.uncheck();
    await expect(Sunday).not.toBeChecked();//preferable 

}

)


test ("loop",async({page})=>{
let Weekdays:String[]  = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
await page.goto('https://testautomationpractice.blogspot.com/');
for(let i=0;i<Weekdays.length;i++)
{
    await expect(page.getByLabel(`${Weekdays[i]}`)).toBeVisible();
    await expect(page.locator(`#${Weekdays[i]}`)).toBeEnabled();
    await page.locator(`#${Weekdays[i]}`).check();
    expect(await page.locator(`#${Weekdays[i]}`).isChecked()).toBe(true);

}

const checkboxes:Locator[]=Weekdays.map(index=>page.getByLabel(`${index}`));
for(const checkk of checkboxes){
    await checkk.uncheck();
}

for (const chh of checkboxes){
    await expect(chh).not.toBeChecked();
}


for(let i=Weekdays.length-1;i>3;i--){
    await page.locator(`#${Weekdays[i]}`).check();}



for(const chhh of checkboxes.slice(-3))

{ await expect(chhh).toBeChecked();}

for (const chh of checkboxes){
    if(await chh.isChecked()){
        await chh.uncheck();
    }
    else{await chh.check();}
}

for(const checkk of checkboxes){
    await checkk.uncheck();
}

const indexes=[1,5,6];
for(const i of indexes){
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
}
await page.waitForTimeout(5000);
}
)