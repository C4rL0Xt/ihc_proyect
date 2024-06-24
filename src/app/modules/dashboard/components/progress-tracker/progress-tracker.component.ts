import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

interface Course {
  name: string;
  grade: string;
}

interface StudyHabits {
  mostProductiveTime: string;
  mostProductiveDay: string;
}

interface TimeSpent {
  lectures: number;
  assignments: number;
  exams: number;
}


@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.css'
})
export class ProgressTrackerComponent implements OnInit, AfterViewInit {
  courses: Course[] = [
    { name: 'POO', grade: '16' },
    { name: 'Arquitectura de computadoras', grade: '15' },
    { name: 'Programacion Paralela', grade: '17' },
    { name: 'Base de datos', grade: '15' }
  ];

  studyHabits: StudyHabits = {
    mostProductiveTime: 'Evening (6 PM - 9 PM)',
    mostProductiveDay: 'Wednesday'
  };

  timeSpent: TimeSpent = {
    lectures: 30,
    assignments: 20,
    exams: 10
  };

  gradeTrendsChart: any;

  constructor() {
    // Register Chart.js components
    Chart.register(...registerables);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.createGradeTrendsChart();
  }

  createGradeTrendsChart(): void {
    this.gradeTrendsChart = new Chart('gradeTrendsChart', {
      type: 'line',
      data: {
        labels: ['2023-1', '2023-2', '2024-1', '2024-2'],
        datasets: [{
          label: 'Promedio',
          data: [16.5, 12.7, 15.8, 13.9],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Periodo'
            }
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Promedio'
            },
            beginAtZero: true
          }
        }
      }
    });
  }

}
