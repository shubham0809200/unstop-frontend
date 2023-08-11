import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  skills: string[] = [
    'UI/UX and Design',
    'Web Development',
    'UI/UX and Design',
    'No of Question',
    'Web Development',
  ];
}
