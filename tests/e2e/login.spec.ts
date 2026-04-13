// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { testUsers } from '../../utils/testData';

test('user can login and see welcome message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);

  await expect(loginPage.getWelcomeMessage())
    .toContainText(`Welcome, ${testUsers.validUser.username}!`);
    
});