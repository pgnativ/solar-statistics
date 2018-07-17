import { DatePipe } from '@angular/common';

export interface Statistic {
  // date?: DatePipe;
  id: number;
  description?: string;
  iconUrl?: string;
  courseListIcon?: string;
  longDescription?: string;
  category?: string;
  lessonsCount?: number;
}
