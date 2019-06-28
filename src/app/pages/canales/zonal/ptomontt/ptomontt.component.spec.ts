import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtomonttComponent } from './ptomontt.component';

describe('PtomonttComponent', () => {
  let component: PtomonttComponent;
  let fixture: ComponentFixture<PtomonttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtomonttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtomonttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
