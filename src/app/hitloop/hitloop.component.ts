import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as chart from 'chart.js';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-hitloop',
  templateUrl: './hitloop.component.html',
  styleUrls: ['./hitloop.component.scss']
})
export class HitloopComponent implements OnInit, AfterViewInit {
  age = undefined;
  weight = undefined;
  height = undefined;
  LoopNum = undefined;
  IntenseTime = undefined;
  ModerateTime = undefined;
  LightTime = undefined;
  constructor() { }

  canvas: any;
  ctx: any;
  myChart;

  hiitdata: Array<number>;

  selectedLS: string;
  selectedWO: string;

  // lifestyleControl = new FormControl('', Validators.required);

  lifestyles = [
    {desc: 'very active', value: 10},
    {desc: 'active', value: 7},
    {desc: 'modetrate', value: 5},
    {desc: 'less active', value: 3},
    {desc: 'not active at all', value: 1}
  ];

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
