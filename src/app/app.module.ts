import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';

// services

// components
import { HeaderComponent } from './header/header.component';

// pipes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';

// const appRoutes: Routes = [
//   {
//   },
//   {
//   }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    FooterComponent,
    StatsComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: false }
    // )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
