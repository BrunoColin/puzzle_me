import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceOptionsComponent } from './piece-options.component';

describe('PieceOptionsComponent', () => {
  let component: PieceOptionsComponent;
  let fixture: ComponentFixture<PieceOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
