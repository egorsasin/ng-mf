import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

// ИМПОРТ SHELL ВРАППЕРА ИЗ БИБЛИОТЕКИ
import { ShellLib } from '@ng-mf/shell-lib';
import { VerandaContext } from './content';

@Component({
  imports: [RouterModule, ShellLib, VerandaContext],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
