import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { AssessmentComponent } from '../../pages/assessment/assessment.component';

@Component({
  selector: 'app-form-assesment',
  templateUrl: './form-assesment.component.html',
  styleUrls: ['./form-assesment.component.css'],
})
export class FormAssesmentComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredSkills: Observable<string[]>;

  skills: string[] = [
    'UI/UX and Design',
    'No of Question',
    'Web Development',
    'UI/UX and Design',
    'Web Development',
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ];

  selectedSkills: string[] = [
    'UI/UX and Design',
    'No of Question',
    'Web Development',
    'UI/UX and Design',
    'Web Development',
  ];

  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement> =
    {} as ElementRef;

  assessment: FormGroup = this.fb.group({
    name: ['', Validators.required],
    purpose: ['', Validators.required],
    description: ['', Validators.required],
    skills: [[]],
    duration: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private announcer: LiveAnnouncer,
    private bottomSheetRef: MatBottomSheetRef<AssessmentComponent>
  ) {
    this.filteredSkills = this.assessment.get('skills')!.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) =>
        skill ? this._filter(skill) : this.skills.slice()
      )
    );
  }

  ngOnInit(): void {}

  closeBottomSheet(): void {
    this.bottomSheetRef.dismiss();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our skill
    if (value) {
      this.selectedSkills.push(value);
    }

    event.chipInput!.clear();

    this.assessment.get('skills')!.setValue(null);
  }

  remove(skill: string): void {
    const index = this.selectedSkills.indexOf(skill);

    if (index >= 0) {
      this.selectedSkills.splice(index, 1);
      this.announcer.announce(`Removed ${skill}`);
      // this.assessment.get('skills')!.setValue(this.selectedSkills);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    // const skill = event.option.viewValue;
    // if (this.selectedSkills.indexOf(skill) === -1) {
    //   this.selectedSkills.push(skill);
    //   this.assessment.get('skills')!.setValue(this.selectedSkills);
    // }
    // this.skillInput.nativeElement.value = '';.
    this.selectedSkills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.assessment.get('skills')!.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.skills.filter((skill) =>
      skill.toLowerCase().includes(filterValue)
    );
  }
}
