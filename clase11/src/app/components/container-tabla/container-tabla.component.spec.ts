import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTablaComponent } from './container-tabla.component';

describe('ContainerTablaComponent', () => {
  let component: ContainerTablaComponent;
  let fixture: ComponentFixture<ContainerTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
