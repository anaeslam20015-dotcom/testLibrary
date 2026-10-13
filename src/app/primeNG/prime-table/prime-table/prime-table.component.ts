import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TableServiceService } from '../tableService/table-service.service';

@Component({
  selector: 'app-prime-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './prime-table.component.html',
  styleUrl: './prime-table.component.css',
})
export class PrimeTableComponent {
  constructor(private servie: TableServiceService) {}

  Employees: any[] = [];

  ngOnInit() {
    this.servie.getEmployees().subscribe((data: any) => {
      this.Employees = data;
      console.log(this.Employees);
    });
  }
}
