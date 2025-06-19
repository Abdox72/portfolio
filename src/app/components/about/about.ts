import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  personalInfo = {
    name: 'Abdul-Rahman Mustafa Sayed',
    title: '.NET Developer | Software Engineer',
    location: 'Cairo, Egypt',
    email: 'Abdomostafa952001@gmail.com',
    phone: '+201157895731',
    linkedin: 'linkedin.com/in/mr-dox',
    github: 'github.com/Abdox72'
  };

  aboutText = `Computer Science graduate and Full Stack .NET developer skilled in ASP .NET Core MVC,Web API, Entity Framework Core, SQL Server and Angular. Fast learner and collaborative team player committed to building clean, scalable web applications.`;

  keyPoints = [
    'Full-stack development with modern technologies',
    'Strong focus on code quality and best practices',
    'Experience with agile methodologies and team collaboration',
    'Passionate about learning new technologies and frameworks',
    'Committed to writing clean, maintainable, and well-documented code'
  ];

  education = [
    {
      degree: 'B.Sc. in Computer Science and Information Systems',
      school: 'Assiut University',
      year: '2023',
      description: 'Graduated with honors, specialized in Computer Science'
    }
  ];

  certifications = [
    'Angular Developer Certification',
    // 'AWS Certified Developer Associate',
    // 'MongoDB Certified Developer'
  ];
}
