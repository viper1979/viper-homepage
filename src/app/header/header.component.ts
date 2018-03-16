import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../shared/guards/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authGuard: AuthGuard) { }

  ngOnInit() {
  }

  isAuthorized() {
    if (this._authGuard) {
      return this._authGuard.isAuthorized();
    }
    return false;
  }
}
