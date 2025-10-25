import { Component, inject } from '@angular/core';

// ИМПОРТ КОНТЕКСТА ИЗ MFE SHELL
import { SHELL_TOKEN } from 'shell/Wrapper';

@Component({
  imports: [],
  selector: 'vsk-veranda',
  template: `
    <h1>VERANDA APP</h1>

    <div style="color: red; padding: 1rem;">{{ shellData }}</div>
  `,
})
export class VerandaContext {
  protected shellData = inject(SHELL_TOKEN);
}
