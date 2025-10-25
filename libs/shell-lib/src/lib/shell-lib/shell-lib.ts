import { Component, InjectionToken } from '@angular/core';

export const SHELL_TOKEN = new InjectionToken<string>('Shell Data');

@Component({
  selector: 'lib-shell',
  imports: [],
  templateUrl: './shell-lib.html',
  styleUrl: './shell-lib.css',
  providers: [
    {
      provide: SHELL_TOKEN,
      useValue:
        'Привет из Shell библиотеки! В зависимостях можно провайдить данные для внедрения в дочерние компоненты (контент) например AUTH токены или стейт',
    },
  ],
})
export class ShellLib {}
