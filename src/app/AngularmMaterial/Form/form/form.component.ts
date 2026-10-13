import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  testForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Salary: new FormControl('', [Validators.required, Validators.min(1000)]),
    Department: new FormControl('', [Validators.required]),
  });
}
