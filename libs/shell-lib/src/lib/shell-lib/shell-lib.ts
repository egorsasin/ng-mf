import { Component, InjectionToken } from '@angular/core';

export const MY_TOKEN = new InjectionToken<string>('My Token');

@Component({
  selector: 'lib-shell',
  imports: [],
  templateUrl: './shell-lib.html',
  styleUrl: './shell-lib.css',
  providers: [
    {
      provide: MY_TOKEN,
      useValue:
        'Привет из Shell библиотеки! В зависимостях можно провайдить данные для внедрения в дочерние компоненты (контент) например токены или стейт',
    },
  ],
})
export class ShellLib {}
