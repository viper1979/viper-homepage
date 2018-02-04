import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';

// services
import { StatsService } from './shared/services/stats.service';

// components
import { HeaderComponent } from './header/header.component';

// pipes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'stats', component: StatsComponent },
  // default route, when nothing match
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    FooterComponent,
    StatsComponent,
    NotFoundComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
    StatsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
