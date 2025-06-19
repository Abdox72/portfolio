export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  icon?: string;
}
