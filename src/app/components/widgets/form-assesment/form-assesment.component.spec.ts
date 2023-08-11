import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssesmentComponent } from './form-assesment.component';

describe('FormAssesmentComponent', () => {
  let component: FormAssesmentComponent;
  let fixture: ComponentFixture<FormAssesmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAssesmentComponent]
    });
    fixture = TestBed.createComponent(FormAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
