import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMateriasProfesorComponent } from './ver-materias-profesor.component';

describe('VerMateriasProfesorComponent', () => {
  let component: VerMateriasProfesorComponent;
  let fixture: ComponentFixture<VerMateriasProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMateriasProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMateriasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
