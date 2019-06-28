import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCanalComponent } from './buscar-canal.component';

describe('BuscarCanalComponent', () => {
  let component: BuscarCanalComponent;
  let fixture: ComponentFixture<BuscarCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
