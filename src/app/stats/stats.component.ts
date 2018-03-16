import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StatsService } from '../shared/services/stats.service';
import { VisitorInfo } from '../shared/models/visitorInfo';
import { environment } from '../../environments/environment';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, AfterViewInit {

  visitorChart: any;
  visitorChartContext: any;

  private visitorInfo: VisitorInfo[] = null;

  constructor(private _statsService: StatsService) {
  }

  ngOnInit() {
    this._statsService.getVisitorsByCountries( ).subscribe(
      result => {
        this.visitorInfo = result.sort((n1, n2) => n2.count - n1.count);
        this.drawChart();
      },
      error => {
        console.log( 'request error' );
      }
    );
  }

  ngAfterViewInit( ) {
    this.visitorChart = document.getElementById('visitorChart');
    this.visitorChartContext = this.visitorChart.getContext('2d');
  }

  private drawChart( ) {
    let chartLabels: string[] = [];
    let chartData: number[] = [];

    // only take the hightest 12 entries
    let rawData = this.visitorInfo.slice(0, 12);

    rawData.map( item => {
      chartLabels.push( item.countryId );
    });
    rawData.map( item => {
      chartData.push( item.count );
    });

    // repeat color cycle as backgroundColor
    let bgColor: string[] = [];
    let index = 0;
    for (let i = 0; i < rawData.length; i++) {
       if (index > environment.charts.visitorChart.backgroundColors.length) {
         index = 0;
       }
       bgColor.push( environment.charts.visitorChart.backgroundColors[index] );

       index++;
    }

    const chart = new Chart(this.visitorChartContext, {
      type: 'horizontalBar',

      data: {
          labels: chartLabels,

          datasets: [{
              label: environment.charts.visitorChart.label,

              data: chartData,

              backgroundColor: bgColor,

              borderWidth: 1
          }]
      },

      options: {
        responsive: false,
        display: true,
        legend: {
          display: false
        }
      }
    });
  }

}
