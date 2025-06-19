import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';
import { Skill } from '../models/skill';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: 1,
        title: 'Ezz Store – Online Perfume & Oud Shop',
        description: 'Admin & user roles; product & category management; user authentication; RESTful API backend.',
        technologies: ['ASP.NET Core Web API', 'Angular 19', 'MS SQL Server', 'JWT Auth'],
        imageUrl: 'assets/projects/ezz-store.png',
        githubUrl: 'https://github.com/Abdox72/EzzStore',
        liveUrl: '',
        featured: true,
        category: 'web'
      },
      {
        id: 2,
        title: 'Supermarket Management System (WinForms)',
        description: 'Admin & cashier roles; sales, inventory & category management; barcode-based lookup & sales processing.',
        technologies: ['.NET WinForms', 'C#', 'SQL Server'],
        imageUrl: 'assets/projects/supermarket.png',
        githubUrl: 'https://github.com/Abdox72/SupermarketManagmentSystem_SMS',
        liveUrl: '',
        featured: false,
        category: 'desktop'
      },
      {
        id: 3,
        title: 'Hotel Management System (WinForms)',
        description: 'Room booking & availability; check‑in/out workflows; billing & reporting; role-based access.',
        technologies: ['.NET WinForms', 'C#', 'SQL Server'],
        imageUrl: 'assets/projects/hotelManagement.png',
        githubUrl: 'https://github.com/Abdox72/Hotel-Management-System-WinForms',
        liveUrl: '',
        featured: false,
        category: 'desktop'
      },
      {
        id: 4,
        title: 'E‑Commerce Angular App',
        description: 'Product catalog with search & filters; cart & wishlist; secure payments; OAuth2 auth.',
        technologies: ['Angular', 'Firebase Auth', 'Firestore', 'PayPal Sandbox'],
        imageUrl: 'assets/projects/e-commerce.png',
        githubUrl: 'https://github.com/Abdox72/ecommerce-angular',
        liveUrl: '',
        featured: false,
        category: 'web'
      },
      {
        id: 5,
        title: 'Full‑Stack Django E‑Commerce',
        description: 'Advanced product search; user profiles; admin dashboard; order management; JWT auth.',
        technologies: ['Django', 'PostgreSQL', 'Django REST Framework', 'Bootstrap', 'JavaScript'],
        imageUrl: 'assets/placeholder-icon-design-free-vector.jpg',
        githubUrl: 'https://github.com/Abdox72/Electro-ECommerce-Django',
        liveUrl: '',
        featured: false,
        category: 'web'
      },
      {
        id: 6,
        title: 'SPA E‑Commerce (Vanilla JS & Firebase)',
        description: 'Single‑page UX; dynamic cart & wishlist; real‑time updates; admin panel.',
        technologies: ['ES6 JavaScript', 'Firebase Auth', 'Firestore'],
        imageUrl: 'assets/placeholder-icon-design-free-vector.jpg',
        githubUrl: 'https://github.com/Abdox72/ecommerce',
        liveUrl: '',
        featured: false,
        category: 'web'
      },
      {
        id: 7,
        title: 'School Management System',
        description: 'Student & teacher profiles; attendance tracking; grading dashboard.',
        technologies: ['Django', 'DTL', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
        imageUrl: 'assets/placeholder-icon-design-free-vector.jpg',
        githubUrl: 'https://github.com/Abdox72/SchoolManagementSystem',
        liveUrl: '',
        featured: false,
        category: 'web'
      },
      {
        id: 8,
        title: 'Examination System (T‑SQL)',
        description: 'Question bank; exam scheduling; automated grading; student/instructor role assignments.',
        technologies: ['Microsoft SQL Server', 'T‑SQL', 'Stored Procedures'],
        imageUrl: 'assets/placeholder-icon-design-free-vector.jpg',
        githubUrl: 'https://github.com/Abdox72/Examination_System',
        liveUrl: '',
        featured: false,
        category: 'other'
      },
      {
        id: 9,
        title: 'Travelling Website',
        description: 'Interactive destination galleries; map integration; PWA‑ready.',
        technologies: ['HTML5', 'CSS3', 'jQuery', 'JavaScript'],
        imageUrl: 'assets/placeholder-icon-design-free-vector.jpg',
        githubUrl: 'https://github.com/Abdox72/Travelling-Project',
        liveUrl: '',
        featured: false,
        category: 'web'
      },
      {
        id: 10,
        title: 'Pharaoh Website',
        description: 'SEO‑optimized; mobile‑first design; semantic markup.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        imageUrl: 'assets/placeholder-icon-design-free-vector.jpg',
        githubUrl: 'https://github.com/Abdox72/Pharaoh',
        liveUrl: '',
        featured: false,
        category: 'web'
      },
      {
        id: 11,
        title: 'Danita UI Website',
        description: 'Pixel‑perfect reproduction; fully responsive; cross‑browser compatibility.',
        technologies: ['HTML5', 'CSS3', 'jQuery', 'JavaScript'],
        imageUrl: 'assets/placeholder-icon-design-free-vector.jpg',
        githubUrl: 'https://github.com/Abdox72/Dantia-Project',
        liveUrl: '',
        featured: false,
        category: 'web'
      }
    ];
    return of(projects);
  }

  getSkills(): Observable<Skill[]> {
    return of([
      { id: 1, name: 'Angular', level: 90, category: 'frontend', icon: 'angular' },
      { id: 2, name: 'TypeScript', level: 85, category: 'frontend', icon: 'typescript' },
      { id: 3, name: 'JavaScript', level: 90, category: 'frontend', icon: 'javascript' },
      { id: 4, name: 'HTML5', level: 95, category: 'frontend', icon: 'html5' },
      { id: 5, name: 'CSS3/SCSS', level: 88, category: 'frontend', icon: 'css3' },
      { id: 6, name: 'JQuery', level: 85, category: 'frontend', icon: 'JQuery' },
      { id: 7, name: 'ASP .NET Core', level: 80, category: 'backend', icon: 'ASP' },
      { id: 8, name: 'Django', level: 80, category: 'backend', icon: 'Django' },
      { id: 9, name: 'FastAPI', level: 60, category: 'backend', icon: 'FastAPI' },
      { id: 10, name: 'MS SQL Server', level: 75, category: 'database', icon: 'SQLServer' },
      { id: 11, name: 'MySQL', level: 65, category: 'database', icon: 'mysql' },
      { id: 12, name: 'PostgreSQL', level: 70, category: 'database', icon: 'postgresql' },
      { id: 13, name: 'Docker', level: 55, category: 'devops', icon: 'docker' },
      { id: 14, name: 'Git', level: 85, category: 'devops', icon: 'git' },
      { id: 15, name: 'REST APIs', level: 85, category: 'other', icon: 'api' },
      { id: 16, name: 'WinForms C#', level: 85, category: 'other', icon: 'WinForms' },
      { id: 17, name: 'Agile/Scrum', level: 80, category: 'other', icon: 'agile' }
    ]);
  }

  getExperience(): Observable<Experience[]> {
    const experience: Experience[] = [
      {
        id: 1,
        company: 'Information Technology Institute (ICC) - Minya, Egypt',
        position: 'Full Stack .NET Web Development Trainee',
        startDate: 'Mar 2025',
        endDate: 'Jun 2025',
        description: 'Intensive Code Camp – Hybrid training on .NET Core, ASP.NET MVC, Web API, EF Core, SQL Server, Angular.',
        technologies: ['.NET Core', 'ASP.NET MVC', 'Web API', 'Entity Framework Core', 'SQL Server', 'Angular'],
        achievements:[]
      },
      {
        id: 2,
        company: 'Information Technology Institute (Early Career) - Assiut, Egypt',
        position: 'Python Full Stack Web Development Trainee',
        startDate: 'Jun 2022',
        endDate: 'Jul 2022',
        description: 'Early Career Build Up – Training on Django, Python, PostgreSQL, RESTful APIs, Clean Architecture, SQLite.',
        technologies: ['Django', 'Python', 'PostgreSQL', 'RESTful APIs', 'Clean Architecture', 'SQLite'],
        achievements: [
          'Develop ECommerce App Using Django, PostgreSQL, DTL',
        ]
      }
    ];
    return of(experience);
  }
}
