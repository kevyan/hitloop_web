import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as chart from 'chart.js';

@Component({
  selector: 'app-cal-calculator',
  templateUrl: './cal-calculator.component.html',
  styleUrls: ['./cal-calculator.component.scss']
})
export class CalCalculatorComponent implements OnInit, AfterViewInit {
  age = 0;
  weight = 0;
  constructor() { }

  canvas: any;
  ctx: any;
  myChart;

  hiitdata: Array<number>;

  metTable = [
    {type: 'running', pace: 5, met: 8.0},
    {type: 'running', pace: 5.2, met: 9.0},
    {type: 'running', pace: 6, met: 10.0},
    {type: 'running', pace: 6.7, met: 11.0},
    {type: 'running', pace: 7, met: 11.5},
    {type: 'running', pace: 7.5, met: 12.5},
    {type: 'running', pace: 8, met: 13.5},
    {type: 'running', pace: 8.6, met: 14.0},
    {type: 'running', pace: 9, met: 15.0},
    {type: 'running', pace: 10, met: 16.0},
    {type: 'running', pace: 10.9, met: 18.0},
    {type: 'running stairs', pace: 0, met: 15.0}
  ];

  runningPace = [];
  workoutType = [
    'running',
    'walking',
    'swimming'
  ];


  ngOnInit() {
    this.getRunningPace();
    console.log('pace ', this.runningPace);

  }

  getRunningPace() {
    this.metTable.forEach(element => {
      if (element.type === 'running') {
        this.runningPace.push(element.met);
      }
    });
  }

  ngAfterViewInit() {
  }

  gethiitdata() {
  }

  renderchart() {
        console.log('age is ', this.age);
        console.log('weight is ', this.weight);
        this.canvas = document.getElementById('hitchart');
        this.ctx = this.canvas.getContext('2d');
        console.log('context: ', this.ctx);
        this.myChart = new chart(this.ctx, {
          type: 'bar',
          data: {
              labels: ['basal metabolic burn', 'InHiiT Burn', 'After Burn'],
              datasets: [
                {
                  data: [this.age, this.weight, 199.9],
                  borderWidth: 1,
                },
                {
                  data: [0, 200, 0],
                  borderWidth: 1
                },
                {
                label: 'Line Dataset',
                data: [2000, 2400, 2600],
                type: 'line'
                }
            ]
          },
          options: {
            scales: {
              xAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true
                  }
              }]
          }
          }
      });
  }

}
