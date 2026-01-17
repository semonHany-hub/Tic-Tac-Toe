import { Component } from '@angular/core';
import { TicTacComponent } from './tic-tac/tic-tac.component';

@Component({
  selector: 'app-root',
  imports: [TicTacComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
