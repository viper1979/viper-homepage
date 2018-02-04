import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuData: any;

  constructor() {
    this.menuData = this.initMenuData();
  }

  ngOnInit() {
  }

  private initMenuData( ): any {
    return [
      { label: 'Main', url: '' },
      { label: 'Stats', url: '/stats' },
      { label: 'Bitcoin', url: '/bitcoin' }
    ];
  }
}
