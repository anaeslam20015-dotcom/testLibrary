import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ServiceService } from '../service/service.service';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);

  constructor(private serve: ServiceService) {}
  Employees!: any;

  ngOnInit(): void {
    this.serve.get().subscribe((data) => {
      this.Employees = data;
    });
  }
  displayedColumns = ['ID', 'name', 'salary', 'employmentDuration'];
}
