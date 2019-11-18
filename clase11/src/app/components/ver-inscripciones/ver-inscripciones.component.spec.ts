import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInscripcionesComponent } from './ver-inscripciones.component';

describe('VerInscripcionesComponent', () => {
  let component: VerInscripcionesComponent;
  let fixture: ComponentFixture<VerInscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
