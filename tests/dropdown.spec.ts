import {test,expect,Locator} from '@playwright/test';

test("Dropdown Practice",async({page})=>{



    await page.goto('https://testautomationpractice.blogspot.com/');

   await page.locator('#country').selectOption('India');
   await page.locator('#country').selectOption({label:'India'});
   await page.locator('#country').selectOption({value:'uk'});
   await page.locator('#country').selectOption({index:5});

   await expect(page.locator('#country')).toHaveValue('australia');

    const dropdowncount:Locator= page.locator('#country option');
    await expect(dropdowncount).toHaveCount(10);


    const dropdownvalues=await page.locator('#country option').allTextContents();
    console.log(dropdownvalues);

    const dropdownvalues1=(await page.locator('#country option').allTextContents()).map(text=>text.trim());
    console.log(dropdownvalues1);

    expect(dropdownvalues1).toContain('India');
    console.log(dropdownvalues1)

    const coloursdrop:String[]=(await page.locator('#colors>option').allTextContents()).map(text=>text.trim());
    console.log(coloursdrop);
    const originalList:String[]=[...coloursdrop];
    console.log(originalList);
    console.log([...coloursdrop].sort());
    console.log(originalList);
    expect([...coloursdrop].sort()).not.toEqual(originalList);


    const myset:Set<String>=new Set(coloursdrop);
    const set1=new Set<String>();
    const duplicates:String[]=[];
    console.log(myset);
    for (const chh of coloursdrop){
        if(set1.has(chh)){
            duplicates.push(chh);
        } else {
            set1.add(chh);
        }
    }
    console.log(duplicates);


    if(duplicates.length>0){
        console.log('Duplicates found:',duplicates);
    } else {
        console.log('No duplicates found');
    }
})