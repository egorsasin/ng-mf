import { Component, inject } from '@angular/core';

// ИМПОРТ КОНТЕКСТА ИЗ БИБЛИОТЕКИ SHELL
import { MY_TOKEN } from '@ng-mf/shell-lib';

@Component({
  imports: [],
  selector: 'vsk-context',
  template: `
    <h1>VERANDA APP</h1>

    <div style="color: red; padding: 1rem;">{{ myToken }}</div>
  `,
})
export class VerandaContext {
  protected myToken = inject(MY_TOKEN);
}
