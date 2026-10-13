import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prime-project',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RouterLink],
  templateUrl: './prime-project.component.html',
  styleUrl: './prime-project.component.css',
})
export class PrimeProjectComponent {
  sidebarVisible: boolean = false;

  show() {
    alert('hello');
  }
}
