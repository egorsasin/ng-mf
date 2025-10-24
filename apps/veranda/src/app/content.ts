import { Component, inject } from '@angular/core';

// ИМПОРТ КОНТЕКСТА ИЗ MFE SHELL
import { MY_TOKEN } from 'shell/Wrapper';

@Component({
  imports: [],
  selector: 'vsk-veranda',
  template: `
    <h1>VERANDA APP</h1>

    <div style="color: red; padding: 1rem;">{{ myToken }}</div>
  `,
})
export class VerandaContext {
  protected myToken = inject(MY_TOKEN);
}
