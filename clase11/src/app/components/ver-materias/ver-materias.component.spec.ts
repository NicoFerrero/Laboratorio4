import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMateriasComponent } from './ver-materias.component';

describe('VerMateriasComponent', () => {
  let component: VerMateriasComponent;
  let fixture: ComponentFixture<VerMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
