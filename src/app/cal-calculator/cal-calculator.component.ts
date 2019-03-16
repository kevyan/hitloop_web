import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as chart from 'chart.js';

@Component({
  selector: 'app-cal-calculator',
  templateUrl: './cal-calculator.component.html',
  styleUrls: ['./cal-calculator.component.scss']
})
export class CalCalculatorComponent implements OnInit, AfterViewInit {

  constructor() { }

  canvas: any;
  ctx: any;
  myChart;

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  renderchart() {
        this.canvas = document.getElementById('hitchart');
        this.ctx = this.canvas.getContext('2d');
        console.log('context: ', this.ctx);
        this.myChart = new chart(this.ctx, {
          type: 'bar',
          data: {
              labels: ['basal metabolic burn', 'InHiiT Burn', 'After Burn'],
              datasets: [
                {
                  data: [2000, 400, 199.9],
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
