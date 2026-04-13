// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('login.html');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('input[type="submit"]');
  }

  // without async since it's just returning a locator
  getWelcomeMessage() {
    return this.page.locator('.account-page');
  }
}