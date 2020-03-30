import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDriverModalComponent } from './new-driver-modal.component';

describe('NewDriverModalComponent', () => {
  let component: NewDriverModalComponent;
  let fixture: ComponentFixture<NewDriverModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDriverModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDriverModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
