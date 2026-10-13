import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-prime-form',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    NgClass,
  ],
  templateUrl: './prime-form.component.html',
  styleUrl: './prime-form.component.css',
})
export class PrimeFormComponent {
  cities = [
    { name: 'Cairo' },
    { name: 'Alexandria' },
    { name: 'Tanta' },
    { name: 'Mansoura' },
    { name: 'Aswan' },
  ];
}
