// import {test, expect} from '@playwright/test'
import * as allure from "allure-js-commons";

test('first', async () => {
    await allure.goto('https://www.amazon.in/')

    // await page.locator('//textarea[@class="gLFyf"]').click
    // await page.locator('//textarea[@class="gLFyf"]').fill("India")
    await allure.fill("//input[@id='twotabsearchtextbox']", 'Apple Iphone')

    console.log("Done....")

    await allure.locator("//input[@type='submit']").click()

    const tabss = await allure.locator("//div[@class='s-no-outline']/h2[contains(text(), 'Results')]")

    await expect(tabss).toBeVisible();

    await allure.setDefaultTimeout(10000)
})