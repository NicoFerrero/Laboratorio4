import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEmailComponent } from './mostrar-email.component';

describe('MostrarEmailComponent', () => {
  let component: MostrarEmailComponent;
  let fixture: ComponentFixture<MostrarEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
