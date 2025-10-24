import { Component } from '@angular/core';
import { RemoteEntry } from './remote-entry/entry';

@Component({
  imports: [RemoteEntry],
  selector: 'vsk-app',
  template: '<vsk-shell><h1>MAIN APPLICATION</h1></vsk-shell>',
})
export class AppComponent {}
