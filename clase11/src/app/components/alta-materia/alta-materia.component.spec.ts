import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMateriaComponent } from './alta-materia.component';

describe('AltaMateriaComponent', () => {
  let component: AltaMateriaComponent;
  let fixture: ComponentFixture<AltaMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
