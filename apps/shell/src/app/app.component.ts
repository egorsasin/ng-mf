import { Component } from '@angular/core';
import { RemoteEntry } from './remote-entry/entry';

@Component({
  imports: [RemoteEntry],
  selector: 'vsk-app',
  template: '<vsk-shell>Shell App</vsk-shell>',
})
export class AppComponent {}
