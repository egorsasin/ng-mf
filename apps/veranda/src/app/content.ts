import { Component, inject } from '@angular/core';

// ИМПОРТ КОНТЕКСТА ИЗ БИБЛИОТЕКИ SHELL
import { SHELL_TOKEN } from '@ng-mf/shell-lib';

@Component({
  imports: [],
  selector: 'vsk-context',
  template: `
    <h1>VERANDA APP</h1>

    <div style="color: red; padding: 1rem;">{{ shellData }}</div>
  `,
})
export class VerandaContext {
  protected shellData = inject(SHELL_TOKEN);
}
