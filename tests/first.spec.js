import {test, expect} from '@playwright/test'

test('first', async ({page}) => {
    await page.goto('https://www.amazon.in/')

    // await page.locator('//textarea[@class="gLFyf"]').click
    // await page.locator('//textarea[@class="gLFyf"]').fill("India")
    await page.fill("//input[@id='twotabsearchtextbox']", 'Apple Iphone')

    await page.locator("//input[@type='submit']").click()

    const tabss = await page.locator("//div[@class='s-no-outline']/h2[contains(text(), 'Results')]")

    await expect(tabss).toBeVisible();

    // await page.setDefaultTimeout(10000)
    await new Promise(resolve => setTimeout(resolve, 20000));

    await page.close();

    console.log("Done....")
})

test ('second', async({page}) => {
    const productList = await page.$$("//div[@role = 'listitem']")

})