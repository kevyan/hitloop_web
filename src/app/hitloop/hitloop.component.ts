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
  BMR = undefined;
  constructor() { }

  canvas: any;
  ctx: any;
  myChart;

  hiitdata: Array<number>;

  selectedLS: string;
  selectedWO: string;
  selectedPace: string;
  gender: string;

  // lifestyleControl = new FormControl('', Validators.required);

  lifestyles = [
    {desc: 'very active', value: 10},
    {desc: 'active', value: 7},
    {desc: 'modetrate', value: 5},
    {desc: 'less active', value: 3},
    {desc: 'not active at all', value: 1}
  ];

  genders = ['male', 'female'];

  metTableRunning = [
    {type: 'running', pace_running: 5, met: 8.0},
    {type: 'running', pace_running: 5.2, met: 9.0},
    {type: 'running', pace_running: 6, met: 10.0},
    {type: 'running', pace_running: 6.7, met: 11.0},
    {type: 'running', pace_running: 7, met: 11.5},
    {type: 'running', pace_running: 7.5, met: 12.5},
    {type: 'running', pace_running: 8, met: 13.5},
    {type: 'running', pace_running: 8.6, met: 14.0},
    {type: 'running', pace_running: 9, met: 15.0},
    {type: 'running', pace_running: 10, met: 16.0},
    {type: 'running', pace_running: 10.9, met: 18.0}
  ];

  metTableWalking = [
    {type: 'walking', pace_walking: 'relax', met: 4.5},
    {type: 'walking', pace_walking: 'medium', met: 6},
    {type: 'walking', pace_walking: 'brisk', met: 7}
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

  getBMR() {
    this.BMR = 66.5 - (6.755 * this.age) + (5.003 * this.height) + (13.75 * this.weight);
    if (this.gender === 'female') {
      this.BMR = this.BMR * 0.95;
    }
    console.log('bmr is ', this.BMR);
  }

  getRunningPace() {
    this.metTableRunning.forEach(element => {
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
                  data: [this.BMR, this.weight, 199.9],
                  borderWidth: 1,
                },
                {
                  data: [0, 200, 0],
                  borderWidth: 1
                },
                {
                label: 'Line Dataset',
                data: [this.BMR, 2400, 2600],
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
