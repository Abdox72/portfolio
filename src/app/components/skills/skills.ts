import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioService } from '../../services/portfolio';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatChipsModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  skillCategories = ['frontend', 'backend', 'database', 'devops', 'other'];
  categoryNames: { [key: string]: string } = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database & Storage',
    devops: 'DevOps & Tools',
    other: 'Other Skills'
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      frontend: 'web',
      backend: 'code',
      database: 'storage',
      devops: 'build',
      other: 'extension'
    };
    return icons[category] || 'star';
  }

  getAverageSkillLevel(): number {
    if (this.skills.length === 0) return 0;
    const total = this.skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / this.skills.length);
  }
}
