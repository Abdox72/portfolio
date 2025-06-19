import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory: string = 'all';
  categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Applications' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'desktop', label: 'Desktop Apps' },
    { value: 'other', label: 'Other Projects' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filterProjects();
    });
  }

  filterProjects(): void {
    if (this.selectedCategory === this.categories[0].label.toLowerCase().replace(' ', '') || this.selectedCategory === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => this.selectedCategory.includes(project.category));
    }
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterProjects();
  }

  openUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
