import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac',
  imports: [CommonModule],
  templateUrl: './tic-tac.component.html',
  styleUrl: './tic-tac.component.scss',
})
export class TicTacComponent {
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;
  isDraw: boolean = false;

  private isCellOccupied(index: number): boolean {
    return this.board[index] !== '';
  }

  private isBoardFull(): boolean {
    return this.board.every((cell) => cell !== '');
  }

  private isInvalidMove(index: number): boolean {
    return this.isCellOccupied(index) || this.isGameOver();
  }

  private isGameOver(): boolean {
    return this.winner !== null || this.isDraw;
  }
  makeMove(index: number): void {
    if (this.isInvalidMove(index)) return;

    this.board[index] = this.currentPlayer;
    this.updateGameStatus(index);
  }

  private switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner(): boolean {
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winnerCombinations.some(([a, b, c]) => {
      return (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ); //return keyword was dismissed
    });
  }

  private updateGameStatus() {
    if (this.checkWinner()) this.winner = this.currentPlayer;
    else if (this.isBoardFull()) this.isDraw = true;
    else this.switchPlayer();
  }

  resetGame() {
    this.winner = null;
    this.board = Array(9).fill('');
    this.isDraw = false;
    this.currentPlayer = 'X';
  }
}
