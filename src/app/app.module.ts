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
import { DisclaimerComponent } from './static/disclaimer/disclaimer.component';
import { PrivacyComponent } from './static/privacy/privacy.component';
import { NotFoundComponent } from './static/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'stats', component: StatsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
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
    NotFoundComponent,
    PrivacyComponent,
    DisclaimerComponent
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
