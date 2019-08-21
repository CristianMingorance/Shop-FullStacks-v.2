import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagScrollComponent } from './imag-scroll.component';

describe('ImagScrollComponent', () => {
  let component: ImagScrollComponent;
  let fixture: ComponentFixture<ImagScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
