import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ProjectService } from './project.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { FormComponent } from '../../Form/form/form.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  constructor(
    private ship: ProjectService,
    private snackbar: MatSnackBar,
    private dialog: Dialog,
  ) {}

  shipments: any[] = [];
  displayedColumns: string[] = [
    'ID',
    'Customer Name',
    'City',
    'Carrier',
    'Data Shipped',
    'Status',
    'Actions',
  ];

  ngOnInit() {
    this.ship.get().subscribe((shipment: any) => {
      this.shipments = shipment;
      console.log(this.shipments);
    });
  }

  addShipment() {
    this.dialog.open(FormComponent);
  }

  deleteShipment(id: number) {
    this.shipments = this.shipments.filter((Dname) => Dname.id !== id);
    this.snackbar.open('Shipment Is Delete', 'Okay');
  }
}
