import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionMateriaComponent } from './inscripcion-materia.component';

describe('InscripcionMateriaComponent', () => {
  let component: InscripcionMateriaComponent;
  let fixture: ComponentFixture<InscripcionMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
