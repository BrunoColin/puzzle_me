import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PieceOptionsComponent } from './piece-options/piece-options.component';
import { PieceComponent } from './piece/piece.component';

@Component({
  selector: 'pm-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  show= false;

  pieces: PieceComponent[] = [];
  pieces2: PieceComponent[] = [];
  pieces3: PieceComponent[] = [];
  piecesOptions: PieceOptionsComponent[] = [];
  pieceGreen: PieceOptionsComponent;
  pieceBlue: any;
  piecePink: PieceOptionsComponent;
  pieceWhite: PieceOptionsComponent;
  pieceBlack: PieceOptionsComponent;
  piecesOptionsAnswer: PieceOptionsComponent[] = [];
  pieceYellow: PieceOptionsComponent;
  

  constructor() {
    this.pieces.push(new PieceComponent());
    this.pieces.push(new PieceComponent());
    this.pieces.push(new PieceComponent());
    this.pieces.push(new PieceComponent());
    this.pieces.push(new PieceComponent());
    this.pieceGreen = new PieceOptionsComponent();
    this.pieceGreen.color = 'green';
    this.pieceBlue = new PieceOptionsComponent();
    this.pieceBlue.color = 'blue';
    this.piecePink = new PieceOptionsComponent();
    this.piecePink.color = 'pink';
    this.pieceWhite = new PieceOptionsComponent();
    this.pieceWhite.color = 'white';
    this.pieceBlack = new PieceOptionsComponent();
    this.pieceBlack.color = 'black';
    this.pieceYellow = new PieceOptionsComponent();
    this.pieceYellow.color = 'yellow';
    this.pieces[0].color = 'green';
    this.pieces[0].pieceOption = this.pieceBlue;
    this.pieces[1].pieceOption = this.pieceGreen;
    this.pieces[2].pieceOption = this.piecePink;
    this.pieces[3].pieceOption = this.pieceYellow;
    this.pieces[4].pieceOption = this.pieceWhite;

    this.pieces2.push(new PieceComponent());
    this.pieces2.push(new PieceComponent());
    this.pieces2.push(new PieceComponent());
    this.pieces2.push(new PieceComponent());
    this.pieces2.push(new PieceComponent());
    this.pieces2[2].color = 'yellow';
    this.pieces2[0].pieceOption = this.pieceWhite;
    this.pieces2[1].pieceOption = this.pieceYellow;
    this.pieces2[2].pieceOption = this.piecePink;
    this.pieces2[3].pieceOption = this.pieceGreen;
    this.pieces2[4].pieceOption = this.pieceBlue;

    this.pieces3.push(new PieceComponent());
    this.pieces3.push(new PieceComponent());
    this.pieces3.push(new PieceComponent());
    this.pieces3.push(new PieceComponent());
    this.pieces3.push(new PieceComponent());
    this.pieces3[3].color = 'red';
    this.pieces3[0].pieceOption = this.pieceYellow;
    this.pieces3[1].pieceOption = this.piecePink;
    this.pieces3[2].pieceOption = this.pieceGreen;
    this.pieces3[3].pieceOption = this.pieceWhite;
    this.pieces3[4].pieceOption = this.pieceBlue;

   }

  ngOnInit(): void {

  }

}
