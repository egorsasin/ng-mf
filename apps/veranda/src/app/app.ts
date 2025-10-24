import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteEntry } from 'shell/Wrapper';
import { VerandaContext } from './content';

@Component({
  imports: [RouterModule, RemoteEntry, VerandaContext],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'veranda';
}
