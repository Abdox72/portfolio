import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = {
    email: 'Abdomostafa952001@gmail.com',
    phone: '+201157895731',
    location: 'Cairo, Egypt',
    linkedin: 'https://linkedin.com/in/mr-dox',
    github: 'https://github.com/Abdox72',
  };

  constructor(private snackBar: MatSnackBar) {}

  onSubmit(): void {
    console.log('Contact form submitted:', this.contactForm);
    
    this.snackBar.open('Thank you for your message! I will get back to you soon.', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
        this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  openUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open('Copied to clipboard!', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    });
  }
}
