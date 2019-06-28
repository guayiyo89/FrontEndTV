import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiloeComponent } from './chiloe.component';

describe('ChiloeComponent', () => {
  let component: ChiloeComponent;
  let fixture: ComponentFixture<ChiloeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiloeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiloeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
