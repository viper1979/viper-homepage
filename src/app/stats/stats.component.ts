import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StatsService } from '../shared/services/stats.service';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, AfterViewInit {

  visitorChart: any;
  visitorChartContext: any;

  constructor(private _statsService: StatsService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit( ) {
    this.visitorChart = document.getElementById('visitorChart');
    this.visitorChartContext = this.visitorChart.getContext('2d');

    let chart = new Chart(this.visitorChartContext, {
      type: 'bar',

      data: {
          labels: [
            'CN', 'US', 'JP', 'DE', 'FR', 'RU', 'NL', 'BZ', 'CA', 'BR', 'UA', 'GB', 'ES'
          ],
          datasets: [{
              label: 'Hits',

              data: [9106, 5486, 4122, 2622, 1297, 920, 447, 254, 245, 227, 197, 170, 165],

              backgroundColor: [
                  'rgba(255, 99, 132, 0.4)',
                  'rgba(54, 162, 235, 0.4)',
                  'rgba(255, 206, 86, 0.4)',
                  'rgba(255, 99, 132, 0.4)',
                  'rgba(54, 162, 235, 0.4)',
                  'rgba(255, 206, 86, 0.4)',
                  'rgba(255, 99, 132, 0.4)',
                  'rgba(54, 162, 235, 0.4)',
                  'rgba(255, 206, 86, 0.4)',
                  'rgba(255, 99, 132, 0.4)',
                  'rgba(54, 162, 235, 0.4)',
                  'rgba(255, 206, 86, 0.4)',
                  'rgba(255, 99, 132, 0.4)',
              ],

              borderWidth: 1
          }]
      },

      options: {
        responsive: false,
        display: true
      }
    });
  }

}
