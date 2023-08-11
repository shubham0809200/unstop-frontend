import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundStatusComponent } from './round-status.component';

describe('RoundStatusComponent', () => {
  let component: RoundStatusComponent;
  let fixture: ComponentFixture<RoundStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundStatusComponent]
    });
    fixture = TestBed.createComponent(RoundStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
