import { Component } from '@angular/core';
import { PieceOptionsComponent } from './piece-options/piece-options.component';
import { PieceComponent } from './piece/piece.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pieces: PieceComponent[] = [];
  piecesOptions: PieceOptionsComponent[] = [];

  title = 'puzzle-me';
  pieceGreen: PieceOptionsComponent;
  pieceBlue: any;
  piecePink: PieceOptionsComponent;
  pieceWhite: PieceOptionsComponent;
  pieceBlack: PieceOptionsComponent;
  pieceAnswer1: PieceOptionsComponent;
  pieceAnswer2: PieceOptionsComponent;
  pieceAnswer3: PieceOptionsComponent;
  pieceAnswer4: PieceOptionsComponent;
  pieceAnswer5: PieceOptionsComponent;
  piecesOptionsAnswer: PieceOptionsComponent[] = [];
  pieceYellow: PieceOptionsComponent;
  pieceRed: PieceOptionsComponent;
  numberOfShots = 0;
  maxShots = 4;
  result = false;
  over = false;
  tries: Map<number, PieceComponent[]> = new Map();
  tries2: {id: number, pieces: PieceComponent[]}[] = [];
  showGameInfo = false;

  constructor(){
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
    this.pieceRed = new PieceOptionsComponent();
    this.pieceRed.color = 'red';
    this.pieceYellow = new PieceOptionsComponent();
    this.pieceYellow.color = 'yellow';
    this.piecesOptions.push(this.pieceGreen);
    this.piecesOptions.push(this.pieceBlue);
    this.piecesOptions.push(this.piecePink);
    this.piecesOptions.push(this.pieceWhite);
    this.piecesOptions.push(this.pieceBlack);
    this.piecesOptions.push(this.pieceRed);
    this.piecesOptions.push(this.pieceYellow);

    this.pieceAnswer1 = new PieceOptionsComponent();
    this.pieceAnswer1.color = 'yellow';
    this.pieceAnswer2 = new PieceOptionsComponent();
    this.pieceAnswer2.color = 'white';
    this.pieceAnswer3 = new PieceOptionsComponent();
    this.pieceAnswer3.color = 'black';
    this.pieceAnswer4 = new PieceOptionsComponent();
    this.pieceAnswer4.color = 'red';
    this.pieceAnswer5 = new PieceOptionsComponent();
    this.pieceAnswer5.color = 'blue';
    this.piecesOptionsAnswer.push(this.pieceAnswer1);
    this.piecesOptionsAnswer.push(this.pieceAnswer2);
    this.piecesOptionsAnswer.push(this.pieceAnswer3);
    this.piecesOptionsAnswer.push(this.pieceAnswer4);
    this.piecesOptionsAnswer.push(this.pieceAnswer5);

    this.tries.set(this.maxShots, this.pieces);
    this.tries2.push({id: this.maxShots, pieces: this.pieces});

  }

  onClickSend(): void{
    if(this.pieces[0].pieceOption.color === this.piecesOptionsAnswer[0].color){
      this.pieces[0].color = '#19db10';
    } else{
      if(this.piecesOptionsAnswer.find(c => c.color === this.pieces[0].pieceOption.color)){
        this.pieces[0].color = '#d1a641';
      } else{
        this.pieces[0].color = '#db1010';
      }
    }
    if(this.pieces[1].pieceOption.color === this.piecesOptionsAnswer[1].color){
      this.pieces[1].color = '#19db10';
    }  else{
      if(this.piecesOptionsAnswer.find(c => c.color === this.pieces[1].pieceOption.color)){
        this.pieces[1].color = '#d1a641';
      } else{
        this.pieces[1].color = '#db1010';
      }
    }
    if(this.pieces[2].pieceOption.color === this.piecesOptionsAnswer[2].color){
      this.pieces[2].color = '#19db10';
    } else{
      if(this.piecesOptionsAnswer.find(c => c.color === this.pieces[2].pieceOption.color)){
        this.pieces[2].color = '#d1a641';
      } else{
        this.pieces[2].color = '#db1010';
      }
    }
    if(this.pieces[3].pieceOption.color === this.piecesOptionsAnswer[3].color){
      this.pieces[3].color = '#19db10';
    }else{
      if(this.piecesOptionsAnswer.find(c => c.color === this.pieces[3].pieceOption.color)){
        this.pieces[3].color = '#d1a641';
      } else{
        this.pieces[3].color = '#db1010';
      }
    }
    if(this.pieces[4].pieceOption.color === this.piecesOptionsAnswer[4].color){
      this.pieces[4].color = '#19db10';
    } else{
      if(this.piecesOptionsAnswer.find(c => c.color === this.pieces[4].pieceOption.color)){
        this.pieces[4].color = '#d1a641';
      } else{
        this.pieces[4].color = '#db1010';
      }
    }

    this.numberOfShots++;
    if(this.checkResult()){
      this.result = true;
      this.over = true;
    } else{
      if(this.numberOfShots > this.maxShots){
        this.over = true;
        if(this.checkResult()){
          this.result = true;
        }
      } else{
        this.pieces = [];
        this.pieces.push(new PieceComponent());
        this.pieces.push(new PieceComponent());
        this.pieces.push(new PieceComponent());
        this.pieces.push(new PieceComponent());
        this.pieces.push(new PieceComponent());
        this.tries2.push({id:this.maxShots - this.numberOfShots, pieces:this.pieces});
      }
    }
    // let lastTry = JSON.parse(JSON.stringify(this.pieces));
    // this.tries.set(this.maxShots - this.numberOfShots, lastTry);
  }

  updatePiece(piece: PieceComponent){
    this.pieces[piece.id] = piece;
  }

  checkResult() : boolean{
    let a = true;
    this.pieces.forEach(piece => {
      if(piece.color !== '#19db10'){
        a = false;
      }
    })
    return a;
  }

  onClickGameInfo(){
    this.showGameInfo = !this.showGameInfo;
  }
}
