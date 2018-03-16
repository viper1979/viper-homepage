import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IStatsService } from '../interfaces/istats-service';
import { VisitorInfo } from '../models/visitorInfo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StatsService implements IStatsService {
  statsServiceName: string;

  constructor(private http: Http) {
    this.statsServiceName = 'StatsService';
  }

  getVisitorsByCountries(): Observable<VisitorInfo[]> {
    return this.http.get('http://localhost:5000/api/stats/').map( response => {
      let visitorInfo: VisitorInfo[] = [];
      response.json( ).forEach(element => {
        let vi: VisitorInfo = Object.assign( new VisitorInfo, element);
        visitorInfo.push(vi);
      });
      return visitorInfo;
    });
  }
}
