import{test,expect,Locator} from '@playwright/test';

test("Bstack Demo",async({page})=>{
    await page.goto('https://bstackdemo.com/');
    await page.locator('.sort select').selectOption('lowestprice'); 

    const cc:number =  await page.locator('//div[@class="val"]').count();
    console.log(cc)
    const priceString:(string|null)[]=[]
    
    // if real select visible
    for(let i=1;i<=cc;i++){

        priceString.push(await page.locator(`(//div[@class='val'])[${i}]/b`).textContent());
    }
     console.log(priceString);
     console.log(Math.max(...priceString.map(Number)))
    //  console.log(Math.max(...priceString.map(Number))); 
    //     console.log(Math.min(...priceString.map(Number)));

// Another Way
    
  // const prices = await page.locator('text=/\\$\\d+/').allTextContents();
  //   console.log(prices);
  // const priceNumbers = prices.map(price =>price.replace('$', ''));
  //   console.log(priceNumbers);
  //   console.log(Math.max(...priceNumbers.map(Number)));
  //   console.log(Math.min(...priceNumbers.map(Number)));

  //   await page.waitForTimeout(1000);
  } 
  )
