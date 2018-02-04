import { Injectable } from '@angular/core';
import { IStatsService } from '../interfaces/istats-service';

@Injectable()
export class StatsService implements IStatsService {
  statsServiceName: string;

  constructor() {
    this.statsServiceName = 'StatsService';
  }

}
