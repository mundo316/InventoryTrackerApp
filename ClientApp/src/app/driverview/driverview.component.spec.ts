import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverviewComponent } from './driverview.component';

describe('DriverviewComponent', () => {
  let component: DriverviewComponent;
  let fixture: ComponentFixture<DriverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
