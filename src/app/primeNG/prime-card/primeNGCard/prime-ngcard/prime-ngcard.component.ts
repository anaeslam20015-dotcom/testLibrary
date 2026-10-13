import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-prime-ngcard',
  standalone: true,
  imports: [CardModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './prime-ngcard.component.html',
  styleUrl: './prime-ngcard.component.css',
})
export class PrimeNGCardComponent {
  constructor(private obj: ServiceService) {}

  Cards: any[] = [];
  loading = false;

  ngOnInit() {
    this.obj.getCard().subscribe({
      next: (data: any) => {
        this.Cards = data;
        this.loading = true;
      },
      error: (error) => {
        alert(error.message);
        this.loading = false;
      },
    });
  }
}
