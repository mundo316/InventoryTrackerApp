import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsSheetComponent } from './parts-sheet.component';

describe('PartsSheetComponent', () => {
  let component: PartsSheetComponent;
  let fixture: ComponentFixture<PartsSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
