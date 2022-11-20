import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-piece-options',
  templateUrl: './piece-options.component.html',
  styleUrls: ['./piece-options.component.css']
})
export class PieceOptionsComponent implements OnInit {

  @Input() color!: string;
  @Output() changeOption = new EventEmitter<PieceOptionsComponent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption(): void{
    this.changeOption.emit(this);
  }

}
