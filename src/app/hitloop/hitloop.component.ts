import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as chart from 'chartjs';

@Component({
  selector: 'app-hitloop',
  templateUrl: './hitloop.component.html',
  styleUrls: ['./hitloop.component.scss']
})
export class HitloopComponent implements OnInit, AfterViewInit {

  times = [1, 2, 3];
  temps = [10, 20, 30];
  humidities = [];
  winds = [];
  windsDegree = [];

  canvas: any;
  ctx: any;
  chart1;
  data = [1, 2, 3];

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  renderchart() {
        this.canvas = document.getElementById('chart1');
        console.log('canvas is: ', this.canvas);
        this.ctx =  this.canvas.getContext('2d');
        console.log('context: ', this.ctx);
        console.log('data: ', this.data);


        this.chart1 = new chart(this.ctx, {
          type: 'bar',
          data: {
            label: 'sample',
            datasets: {
              label: 'sample data',
              data: this.data
            }
          }
      });
  }

}
