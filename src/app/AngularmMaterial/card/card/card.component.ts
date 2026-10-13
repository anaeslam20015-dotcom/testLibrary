import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServiceService } from '../service/service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private serve: ServiceService) {}

  products!: any;
  loading = false;

  ngOnInit() {
    this.serve.getProduct().subscribe({
      next: (data: any) => {
        this.products = data;
        this.loading = true;
      },
      error: (error) => {
        alert(error.message);
        this.loading = false;
      },
    });
  }
}
