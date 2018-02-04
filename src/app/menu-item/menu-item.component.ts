import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  data: any;

  label: string;
  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.label = this.data.label;
    this.url = this.data.url;
  }

  navigate(event: any): void {
    this.router.navigateByUrl(this.url);
  }

}
