import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  educations: string[] = [
    '10th',
    '12th',
    'Diploma',
    'Graduate',
    'Post Graduate'
  ];
}
