import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyhaiqueComponent } from './coyhaique.component';

describe('CoyhaiqueComponent', () => {
  let component: CoyhaiqueComponent;
  let fixture: ComponentFixture<CoyhaiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyhaiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyhaiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
