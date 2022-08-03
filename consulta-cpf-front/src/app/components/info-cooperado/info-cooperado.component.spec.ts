import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCooperadoComponent } from './info-cooperado.component';

describe('InfoCooperadoComponent', () => {
  let component: InfoCooperadoComponent;
  let fixture: ComponentFixture<InfoCooperadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCooperadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
