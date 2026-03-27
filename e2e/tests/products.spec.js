const { test, expect } = require('@playwright/test');

test.describe('Simple E-Commerce Frontend Tests', () => {

  test('should load the homepage and display basic branding', async ({ page }) => {
    // 1. Visit the home page
    await page.goto('/');

    // 2. Wait for the page to load by asserting title or header
    await expect(page).toHaveTitle(/Lumina/);
    await expect(page.locator('text=Next-Gen')).toBeVisible();
    await expect(page.locator('text=Audio Devices')).toBeVisible();
  });

  test('should display product cards with names and prices', async ({ page }) => {
    // 1. Visit the home page
    await page.goto('/');

    // 2. Verify that at least one product is loaded and visible. We wait for the product grid to populate.
    const productGrid = page.locator('#product-grid');
    await expect(productGrid).toBeVisible();

    // 3. Since there's animation, we just wait for the cards to appear
    const productItems = page.locator('.product-item');
    await expect(productItems.first()).toBeVisible();

    // 4. Verify count of products displayed matches the initial hardcoded list length (6)
    const count = await productItems.count();
    expect(count).toBe(6);

    // 5. Pick the first product and verify its contents
    const firstProduct = productItems.nth(0);
    const productName = firstProduct.locator('.product-name');
    const productPrice = firstProduct.locator('.product-price');

    await expect(productName).toBeVisible();
    await expect(productName).toHaveText('Lumina Studio Pro');

    await expect(productPrice).toBeVisible();
    await expect(productPrice).toHaveText('$299.99');
  });

});
