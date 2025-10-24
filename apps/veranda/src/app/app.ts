import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteEntry } from 'shell/Wrapper';

@Component({
  imports: [RouterModule, RemoteEntry],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'veranda';
}
