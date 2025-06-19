import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'linkedin', url: 'https://linkedin.com/in/mr-dox', label: 'LinkedIn' },
    { icon: 'code', url: 'https://github.com/Abdox72', label: 'GitHub' },
    { icon: 'email', url: 'mailto:abdomostafa952001@gmail.com', label: 'Email' }
  ];

  openUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
