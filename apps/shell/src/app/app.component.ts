import { Component } from '@angular/core';

// ИМПОРТ SHELL ВРАППЕРА ИЗ БИБЛИОТЕКИ
import { ShellLib } from '@ng-mf/shell-lib';
@Component({
  imports: [ShellLib],
  selector: 'vsk-app',
  template: `
    <lib-shell>
      <h1>MAIN APP</h1>
    </lib-shell>
  `,
})
export class AppComponent {}
