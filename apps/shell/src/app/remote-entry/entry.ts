import { Component, InjectionToken } from '@angular/core';

export const MY_TOKEN = new InjectionToken<string>('My Token');
@Component({
  imports: [],
  selector: 'vsk-shell',
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
  providers: [
    {
      provide: MY_TOKEN,
      useValue:
        'Привет из Shell MFE! В зависимостях можно провайдить данные для внедрения в MFE из SHELL (контент) например AUTH токены или стейт',
    },
  ],
})
export class RemoteEntry {}
