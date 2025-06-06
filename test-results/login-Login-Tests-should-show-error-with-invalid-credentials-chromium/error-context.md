# Test info

- Name: Login Tests >> should show error with invalid credentials
- Location: /Users/jonaksindhudas/Desktop/vantage_fit_dashboard_automation/vantage_fit_dashboard/tests/login.spec.ts:22:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
Call log:
  - navigating to "http://localhost:3000/login", waiting until "load"

    at LoginPage.navigate (/Users/jonaksindhudas/Desktop/vantage_fit_dashboard_automation/vantage_fit_dashboard/pages/BasePage.ts:11:25)
    at /Users/jonaksindhudas/Desktop/vantage_fit_dashboard_automation/vantage_fit_dashboard/tests/login.spec.ts:25:25
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - strong: localhost
  - text: refused to connect.
- paragraph: "Try:"
- list:
  - listitem: Checking the connection
  - listitem:
    - link "Checking the proxy and the firewall":
      - /url: "#buttons"
- text: ERR_CONNECTION_REFUSED
- button "Reload"
- button "Details"
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export class BasePage {
   4 |     protected page: Page;
   5 |
   6 |     constructor(page: Page) {
   7 |         this.page = page;
   8 |     }
   9 |
  10 |     async navigate(path: string) {
> 11 |         await this.page.goto(path);
     |                         ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
  12 |     }
  13 |
  14 |     async waitForPageLoad() {
  15 |         await this.page.waitForLoadState('networkidle');
  16 |     }
  17 |
  18 |     async getTitle() {
  19 |         return await this.page.title();
  20 |     }
  21 | } 
```