import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productos1Component } from './productos1.component';

describe('Productos1Component', () => {
  let component: Productos1Component;
  let fixture: ComponentFixture<Productos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
