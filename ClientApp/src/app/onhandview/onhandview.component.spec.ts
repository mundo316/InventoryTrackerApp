import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnhandviewComponent } from './onhandview.component';

describe('OnhandviewComponent', () => {
  let component: OnhandviewComponent;
  let fixture: ComponentFixture<OnhandviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnhandviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnhandviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
