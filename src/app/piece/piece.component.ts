import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PieceOptionsComponent } from '../piece-options/piece-options.component';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit, OnChanges {

  @Input() piecesOptions: PieceOptionsComponent[] = [];
  @Input() color: string = 'black';
  @Input() id!: number;
  @Input() pieceOption!: PieceOptionsComponent;
  @Input() disabled = false;
  @Output() updatePiece = new EventEmitter<PieceComponent>();
  show= false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('aaaa');
    // this.pieceOption = changes[pieceOption];
  }

  ngOnInit(): void {

  }

  onSelectOption(option: PieceOptionsComponent): void{
    if(!this.disabled){
      this.pieceOption = option;
      this.show = false;
      this.updatePiece.emit(this);
    }
  }

  getPiece():PieceOptionsComponent {
    return this.pieceOption;
  }

  onCLick(): void{
    if(!this.disabled){
    this.show = !this.show;
    }
  }

}
